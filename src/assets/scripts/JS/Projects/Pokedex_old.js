// Alte Version des Pokedex-Skripts, mit verschiedenen auskommentierten Ansätzen

const Pokedex = document.querySelectorAll(".Pokedex");

Pokedex.forEach((pokedex) => {
  const display = pokedex.querySelector(".Display");
  const search = pokedex.querySelector(".Search_Bar");
  const searchBtn = pokedex.querySelector(".Search_Btn");
  const evolutionSearchBtn = pokedex.querySelector(".Evolution_Btn");

  let controller = new AbortController();

  const resetController = () => {
    controller.abort();
    controller = new AbortController();
  };

  const fetchSinglePokemon = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal: controller.signal }).then((response) => {
      if (!response.ok) {
        const error = new Error("HTTP: " + response.status);
        error.status = response.status;
        throw error;
      }
      return response.json();
    });
  };

  const fetchSpecies = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, { signal: controller.signal }).then((response) => {
      if (!response.ok) {
        const error = new Error("HTTP: " + response.status);
        error.status = response.status;
        throw error;
      }
      return response.json();
    });
  };

  const fetchEvolutions = (url) => {
    return fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          const error = new Error("HTTP: " + response.status);
          error.status = response.status;
          throw error;
        }
        return response.json();
      })
      .then((data) => evolutionHandler(data));
  };

  const evolutionHandler = (evolutionData) => {
    // Zugriff Logs für die Nachvollziehbarkeit der folgenden function
    // console.log([evolutionData.chain.species.name]);
    // console.log(evolutionData.chain.evolves_to[0].species.name);
    console.log(evolutionData);

    // Collect all evolution names recursively
    const collectNames = (node) => {
      console.log(node);
      return [node.species.name, ...node.evolves_to.flatMap(collectNames)];
    };
    const evolutionNames = collectNames(evolutionData.chain);
    return evolutionNames;
  };

  const wait = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  const listeners = () => {
    searchBtn.addEventListener("click", async (e) => {
      display.replaceChildren();
      await searchHandler(e);
      console.log("fired");
    });

    evolutionSearchBtn.addEventListener("click", async (e) => {
      display.replaceChildren();
      await searchHandler(e);
    });

    search.addEventListener("keypress", async (e) => {
      if (e.key === "Enter") {
        display.replaceChildren();
        await searchHandler(e);
      }
    });
  };

  const addSpinner = () => {
    const loadSpinner = document.createElement("div");
    loadSpinner.className = "pokeball";
    display.appendChild(loadSpinner);
  };

  const removeSpinner = () => {
    display.querySelector(".pokeball")?.remove();
  };

  // Variante mit try & catch und async & await

  const searchHandler = async (e) => {
    const searchInput = search.value.toLowerCase().trim();
    if (!searchInput) return;

    resetController();
    const { signal } = controller;

    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 3000);

    try {
      addSpinner();
      await wait();
      if (signal.aborted) return;
      // mit .then
      // await Promise.all([fetchSinglePokemon(searchInput), fetchSpecies(searchInput)]).then(([pokeData, speciesData]) => {
      //   createPokemon(pokeData, speciesData);
      // });

      // ursprünglich zum handeln der beiden promises gedacht - nach umbau allerdings überflüssig da nur noch eine Promise relevant ist

      // const [pokeData, speciesData] = await Promise.allSettled([fetchSinglePokemon(searchInput), fetchSpecies(searchInput)]);

      // const speciesDataResult = speciesData.status === "fulfilled" ? speciesData.value : null;

      // if (pokeData.status === "rejected") {
      //   throw pokeData.reason;
      // }

      const speciesData = await fetchSpecies(searchInput);

      const url = speciesData.evolution_chain.url;
      const evolutionNames = await fetchEvolutions(url);

      if (e.target.className === "Evolution_Btn") {
        evolutionNames.forEach((Name) => {
          renderEvolution(Name);
        });

        const loadEvolutionBtns = pokedex.querySelectorAll(".EvolutionCard_Btn");
        loadEvolutionBtns.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            display.replaceChildren();
            const evolutionCard = e.target.closest(".EvolutionCard");
            const span = evolutionCard.querySelector(".EvolutionCard_Name");
            const pokemonName = span.textContent;

            addSpinner();
            await wait();
            removeSpinner();

            const pokemonData = await fetchSinglePokemon(pokemonName);
            createPokemon(pokemonData);
          });
        });
      }

      if (e.target.className !== "Evolution_Btn") {
        const pokemons = await Promise.all(evolutionNames.map((Name) => fetchSinglePokemon(Name)));
        console.log(pokemons);

        const flavorTexts = await Promise.all(evolutionNames.map((Name) => fetchSpecies(Name))); // const falvorTexts = [{speciesObj1}, {speciesObj2}, {speciesObj3}, usw]
        console.log(flavorTexts);

        pokemons.forEach((pokemonData, index) => {
          console.log(index);
          createPokemon(pokemonData, flavorTexts[index]);
        });
      }
    } catch (error) {
      console.log(error);
      if (error.name === "AbortError") {
        if (timedOut) display.textContent = "Request timed out";
        return;
      }

      if (error.status === 404) {
        display.textContent = "No Pokemon found";
      } else {
        display.textContent = "Something went wrong, try again later";
      }
    } finally {
      clearTimeout(timeout);
      if (signal.aborted && !timedOut) return;
      removeSpinner();
      search.value = "";
    }
  };

  // Varainte mit .then & .catch /promise chain

  // const searchHandler = () => {
  //   const searchInput = search.value.toLowerCase().trim();
  //   const fetchPromise = fetchSinglePokemon(searchInput);
  //   fetchPromise
  //     .then((response) => createPokemon(response))
  //     .catch((error) => {
  //       console.log(error);
  //       display.textContent = "No Pokemon found";
  //     });
  // };

  const createPokemon = (data, speciesData) => {
    const markup = `
      <div class="Card">
        <div class="Card_Info">
          <div class="Card_Name">${data.name}</div>
          <div class="Card_Number">${data.id}</div>
        </div>
        <img class="Card_Image" src="${data.sprites.other.home.front_default}" alt="Picture of the Pokemon" />
        <div class="Card_Types">${data.types[0].type.name}</div>
        <div class="Card_Description">${speciesData?.flavor_text_entries[0].flavor_text ?? ""}</div>
      </div>`;
    display.insertAdjacentHTML("beforeend", markup);
  };

  const renderEvolution = (Name) => {
    const markup = `
    <div class="EvolutionCard">
      <span class="EvolutionCard_Name">${Name}</span>
      <button class="EvolutionCard_Btn">Load this Pokemon</button>
    </div>`;
    display.insertAdjacentHTML("beforeend", markup);
  };

  listeners();
});
