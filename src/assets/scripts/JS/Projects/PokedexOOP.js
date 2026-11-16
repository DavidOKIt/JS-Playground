// Pokedex – objektorientierte Variante
// Zustand und Verhalten werden in Klassen gekapselt:
//   HttpError    -> eigener Fehlertyp mit Statuscode
//   Request      -> ein abbrechbarer Request mit optionalem Timeout
//   PokeApi      -> kümmert sich nur um die Kommunikation mit der PokeAPI
//   PokedexView  -> kümmert sich nur um das DOM (Rendern, Spinner, Meldungen)
//   Pokedex      -> verbindet alles und reagiert auf Events

class HttpError extends Error {
  constructor(status) {
    super(`HTTP: ${status}`);
    this.name = "HttpError";
    this.status = status;
  }
}

class Request {
  #controller = new AbortController();
  #timeoutId = null;
  #timedOut = false;

  constructor(timeoutMs) {
    if (timeoutMs) {
      this.#timeoutId = setTimeout(() => {
        this.#timedOut = true;
        this.#controller.abort();
      }, timeoutMs);
    }
  }

  get signal() {
    return this.#controller.signal;
  }

  get aborted() {
    return this.#controller.signal.aborted;
  }

  get timedOut() {
    return this.#timedOut;
  }

  abort() {
    this.#controller.abort();
  }

  finish() {
    clearTimeout(this.#timeoutId);
  }
}

class PokeApi {
  static #BASE_URL = "https://pokeapi.co/api/v2";
  static #MAX_ID = 1025;

  async #get(url, signal) {
    const response = await fetch(url, { signal });
    if (!response.ok) throw new HttpError(response.status);
    return response.json();
  }

  getPokemon(nameOrId, signal) {
    return this.#get(`${PokeApi.#BASE_URL}/pokemon/${nameOrId}`, signal);
  }

  getRandomPokemon(signal) {
    const randomId = Math.floor(Math.random() * PokeApi.#MAX_ID) + 1;
    return this.getPokemon(randomId, signal);
  }

  getSpecies(name, signal) {
    return this.#get(`${PokeApi.#BASE_URL}/pokemon-species/${name}`, signal);
  }

  async getEvolutionNames(url, signal) {
    const data = await this.#get(url, signal);
    return PokeApi.#collectNames(data.chain);
  }

  static #collectNames(node) {
    return [node.species.name, ...node.evolves_to.flatMap((child) => PokeApi.#collectNames(child))];
  }
}

class PokedexView {
  #display;

  constructor(display) {
    this.#display = display;
  }

  clear() {
    this.#display.replaceChildren();
  }

  showSpinner() {
    const spinner = document.createElement("div");
    spinner.className = "pokeball";
    this.#display.appendChild(spinner);
  }

  hideSpinner() {
    this.#display.querySelector(".pokeball")?.remove();
  }

  showMessage(text) {
    this.#display.textContent = text;
  }

  renderPokemon(data, speciesData) {
    this.#display.insertAdjacentHTML(
      "beforeend",
      `
      <div class="Card">
        <div class="Card_Info">
          <div class="Card_Name">${data.name}</div>
          <div class="Card_Number">${data.id}</div>
        </div>
        <img class="Card_Image" src="${data.sprites.other.home.front_default}" alt="Picture of the Pokemon" />
        <div class="Card_Types">${data.types[0].type.name}</div>
        <div class="Card_Description">${speciesData?.flavor_text_entries[0].flavor_text ?? ""}</div>
      </div>`,
    );
  }

  renderEvolution(name) {
    this.#display.insertAdjacentHTML(
      "beforeend",
      `
      <div class="EvolutionCard">
        <span class="EvolutionCard_Name">${name}</span>
        <button class="EvolutionCard_Btn">Load this Pokemon</button>
      </div>`,
    );
  }
}

class Pokedex {
  static #TIMEOUT_MS = 3000;
  static #SPINNER_DELAY_MS = 1000;
  static #TEAM_SIZE = 6;

  #api = new PokeApi();
  #view;
  #currentRequest = null;

  #display;
  #searchInput;
  #searchBtn;
  #evolutionBtn;
  #teamBtn;

  constructor(root) {
    this.#display = root.querySelector(".Display");
    this.#searchInput = root.querySelector(".Search_Bar");
    this.#searchBtn = root.querySelector(".Search_Btn");
    this.#evolutionBtn = root.querySelector(".Evolution_Btn");
    this.#teamBtn = root.querySelector(".Team_Btn");
    this.#view = new PokedexView(this.#display);

    this.#bindEvents();
  }

  // Bricht den vorherigen Request ab, damit immer nur der neueste gerendert wird
  #startRequest(timeoutMs) {
    this.#currentRequest?.abort();
    this.#currentRequest = new Request(timeoutMs);
    return this.#currentRequest;
  }

  #wait() {
    return new Promise((resolve) => setTimeout(resolve, Pokedex.#SPINNER_DELAY_MS));
  }

  #handleError(error, timedOut = false) {
    if (error.name === "AbortError") {
      if (timedOut) this.#view.showMessage("Request timed out");
      return;
    }

    if (error.status === 404) {
      this.#view.showMessage("No Pokemon found");
    } else {
      this.#view.showMessage("Something went wrong, try again later");
    }
  }

  #bindEvents() {
    this.#searchBtn.addEventListener("click", () => {
      this.#view.clear();
      this.#search(false);
    });

    this.#searchInput.addEventListener("keypress", (e) => {
      if (e.key !== "Enter") return;
      this.#view.clear();
      this.#search(false);
    });

    this.#evolutionBtn.addEventListener("click", () => {
      this.#view.clear();
      this.#search(true);
    });

    this.#teamBtn.addEventListener("click", () => {
      this.#view.clear();
      this.#loadRandomTeam();
    });

    this.#display.addEventListener("click", (e) => {
      const btn = e.target.closest(".EvolutionCard_Btn");
      if (!btn) return;
      const name = btn.closest(".EvolutionCard").querySelector(".EvolutionCard_Name").textContent;
      this.#view.clear();
      this.#loadEvolution(name);
    });
  }

  async #search(evolutionsOnly) {
    const query = this.#searchInput.value.toLowerCase().trim();
    if (!query) return;

    const request = this.#startRequest(Pokedex.#TIMEOUT_MS);
    const { signal } = request;

    try {
      this.#view.showSpinner();
      await this.#wait();
      if (request.aborted) return;

      const species = await this.#api.getSpecies(query, signal);
      const evolutionNames = await this.#api.getEvolutionNames(species.evolution_chain.url, signal);

      if (evolutionsOnly) {
        evolutionNames.forEach((name) => this.#view.renderEvolution(name));
        return;
      }

      const pokemons = await Promise.all(evolutionNames.map((name) => this.#api.getPokemon(name, signal)));
      const speciesList = await Promise.all(evolutionNames.map((name) => this.#api.getSpecies(name, signal)));

      pokemons.forEach((pokemon, index) => this.#view.renderPokemon(pokemon, speciesList[index]));
    } catch (error) {
      this.#handleError(error, request.timedOut);
    } finally {
      request.finish();
      if (!request.aborted || request.timedOut) {
        this.#view.hideSpinner();
        this.#searchInput.value = "";
      }
    }
  }

  async #loadRandomTeam() {
    const request = this.#startRequest(Pokedex.#TIMEOUT_MS);
    const { signal } = request;

    try {
      this.#view.showSpinner();
      await this.#wait();
      if (request.aborted) return;

      const team = await Promise.all(Array.from({ length: Pokedex.#TEAM_SIZE }, () => this.#api.getRandomPokemon(signal)));
      team.forEach((pokemon) => this.#view.renderPokemon(pokemon));
    } catch (error) {
      this.#handleError(error, request.timedOut);
    } finally {
      request.finish();
      if (!request.aborted || request.timedOut) this.#view.hideSpinner();
    }
  }

  async #loadEvolution(name) {
    const request = this.#startRequest();

    try {
      this.#view.showSpinner();
      await this.#wait();
      this.#view.hideSpinner();

      const pokemon = await this.#api.getPokemon(name, request.signal);
      this.#view.renderPokemon(pokemon);
    } catch (error) {
      this.#handleError(error);
    } finally {
      this.#view.hideSpinner();
    }
  }
}

document.querySelectorAll(".Pokedex").forEach((root) => new Pokedex(root));
