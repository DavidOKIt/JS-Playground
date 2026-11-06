const Pokedex = document.querySelectorAll(".Pokedex");

Pokedex.forEach((pokedex) => {
  const display = pokedex.querySelector(".Display");
  const search = pokedex.querySelector(".Search_Bar");
  const searchBtn = pokedex.querySelector(".Search_Btn");
  const evolutionSearchBtn = pokedex.querySelector(".Evolution_Btn");
  const teamBtn = pokedex.querySelector(".Team_Btn");

  let controller = new AbortController();

  const resetController = () => {
    controller.abort();
    controller = new AbortController();
  };

  const handleResponse = (response) => {
    if (!response.ok) {
      const error = new Error("HTTP: " + response.status);
      error.status = response.status;
      throw error;
    }
    return response.json();
  };

  const handleError = (error) => {
    if (error.name === "AbortError") {
      if (timedOut) display.textContent = "Request timed out";
      return;
    }

    if (error.status === 404) {
      display.textContent = "No Pokemon found";
    } else {
      display.textContent = "Something went wrong, try again later";
    }
  };

  const fetchSinglePokemon = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal: controller.signal }).then(handleResponse);
  };

  const fetchSpecies = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, { signal: controller.signal }).then(handleResponse);
  };

  const fetchEvolutions = (url) => {
    return fetch(url, { signal: controller.signal })
      .then(handleResponse)
      .then((data) => evolutionHandler(data));
  };

  const evolutionHandler = (evolutionData) => {
    const collectNames = (node) => {
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

  // loading-spinner helper functions
  const addSpinner = () => {
    const loadSpinner = document.createElement("div");
    loadSpinner.className = "pokeball";
    display.appendChild(loadSpinner);
  };

  const removeSpinner = () => {
    display.querySelector(".pokeball")?.remove();
  };

  // event listeners
  const listeners = () => {
    searchBtn.addEventListener("click", async (e) => {
      display.replaceChildren();
      await searchHandler(e);
    });

    search.addEventListener("keypress", async (e) => {
      if (e.key === "Enter") {
        display.replaceChildren();
        await searchHandler(e);
      }
    });

    evolutionSearchBtn.addEventListener("click", async (e) => {
      display.replaceChildren();
      await searchHandler(e);
    });

    // teamBtn.addEventListener("click", asnyc() => {

    // })

    display.addEventListener("click", async (e) => {
      const btn = e.target.closest(".EvolutionCard_Btn");
      if (!btn) return;
      try {
        display.replaceChildren();
        const evolutionCard = e.target.closest(".EvolutionCard");
        const span = evolutionCard.querySelector(".EvolutionCard_Name");
        const pokemonName = span.textContent;

        resetController();
        addSpinner();
        await wait();
        removeSpinner();

        const pokemonData = await fetchSinglePokemon(pokemonName);
        createPokemon(pokemonData);
      } catch (error) {
        handleError(error);
      } finally {
        removeSpinner();
      }
    });
  };

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

      const speciesData = await fetchSpecies(searchInput);

      const url = speciesData.evolution_chain.url;
      const evolutionNames = await fetchEvolutions(url);

      if (e.target.className === "Evolution_Btn") {
        evolutionNames.forEach((Name) => {
          renderEvolution(Name);
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
      handleError(error);
    } finally {
      clearTimeout(timeout);
      if (signal.aborted && !timedOut) return;
      removeSpinner();
      search.value = "";
    }
  };

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
