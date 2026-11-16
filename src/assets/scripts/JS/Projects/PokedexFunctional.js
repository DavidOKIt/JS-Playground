// Pokedex – funktionale Variante
// Grundidee: so viel wie möglich als reine Funktionen (gleicher Input -> gleicher Output,
// keine Seiteneffekte) und die Seiteneffekte (Netzwerk, DOM, Timer) an den Rand schieben.
// Abhängigkeiten wie `signal` oder `display` werden als Parameter übergeben statt
// aus einem äußeren, veränderlichen Zustand gelesen.

// ---------- Konstanten ----------

const API_URL = "https://pokeapi.co/api/v2";
const MAX_POKEMON_ID = 1025;
const TEAM_SIZE = 6;
const TIMEOUT_MS = 3000;
const SPINNER_DELAY_MS = 1000;

// ---------- Reine Funktionen ----------

const pokemonUrl = (nameOrId) => `${API_URL}/pokemon/${nameOrId}`;
const speciesUrl = (name) => `${API_URL}/pokemon-species/${name}`;

const toPokemonId = (random) => Math.floor(random * MAX_POKEMON_ID) + 1;

const normalizeQuery = (value) => value.toLowerCase().trim();

const collectEvolutionNames = (node) => [node.species.name, ...node.evolves_to.flatMap(collectEvolutionNames)];

const zip = (a, b) => a.map((item, index) => [item, b[index]]);

const isTimeout = (signal) => signal.reason?.name === "TimeoutError";

// Liefert die anzuzeigende Meldung oder null, wenn nichts angezeigt werden soll
const errorMessage = (error) => {
  if (error.name === "AbortError") return null;
  if (error.name === "TimeoutError") return "Request timed out";
  if (error.status === 404) return "No Pokemon found";
  return "Something went wrong, try again later";
};

const spinnerMarkup = () => `<div class="pokeball"></div>`;

const pokemonCardMarkup = (data, speciesData) => `
  <div class="Card">
    <div class="Card_Info">
      <div class="Card_Name">${data.name}</div>
      <div class="Card_Number">${data.id}</div>
    </div>
    <img class="Card_Image" src="${data.sprites.other.home.front_default}" alt="Picture of the Pokemon" />
    <div class="Card_Types">${data.types[0].type.name}</div>
    <div class="Card_Description">${speciesData?.flavor_text_entries[0].flavor_text ?? ""}</div>
  </div>`;

const evolutionCardMarkup = (name) => `
  <div class="EvolutionCard">
    <span class="EvolutionCard_Name">${name}</span>
    <button class="EvolutionCard_Btn">Load this Pokemon</button>
  </div>`;

// ---------- Seiteneffekte: Netzwerk & Zeit ----------

const handleResponse = (response) => {
  if (!response.ok) {
    throw Object.assign(new Error(`HTTP: ${response.status}`), { status: response.status });
  }
  return response.json();
};

// Curried: erst das Signal festlegen, dann beliebig viele URLs damit laden
const fetchJson = (signal) => (url) => fetch(url, { signal }).then(handleResponse);

const createApi = (signal) => {
  const get = fetchJson(signal);
  return {
    pokemon: (nameOrId) => get(pokemonUrl(nameOrId)),
    randomPokemon: () => get(pokemonUrl(toPokemonId(Math.random()))),
    species: (name) => get(speciesUrl(name)),
    evolutionNames: (url) => get(url).then((data) => collectEvolutionNames(data.chain)),
  };
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Bricht nach `ms` mit einem TimeoutError als Grund ab; gibt eine Funktion zum Aufräumen zurück
const startTimeout = (controller, ms) => {
  const id = setTimeout(() => controller.abort(new DOMException("Request timed out", "TimeoutError")), ms);
  return () => clearTimeout(id);
};

// Einzige Stelle mit veränderlichem Zustand – in einer Event-getriebenen UI nicht ganz vermeidbar.
// Jeder Aufruf bricht den vorherigen Request ab und liefert einen neuen Controller.
const createAbortSwitch = () => {
  let current = new AbortController();
  return () => {
    current.abort();
    current = new AbortController();
    return current;
  };
};

// ---------- Datenabläufe (kombinieren API-Funktionen) ----------

const loadEvolutionNames = async (api, query) => {
  const species = await api.species(query);
  return api.evolutionNames(species.evolution_chain.url);
};

const loadPokemonsWithSpecies = async (api, names) => {
  const pokemons = await Promise.all(names.map((name) => api.pokemon(name)));
  const speciesList = await Promise.all(names.map((name) => api.species(name)));
  return zip(pokemons, speciesList);
};

const loadTeam = (api) => Promise.all(Array.from({ length: TEAM_SIZE }, () => api.randomPokemon()));

// ---------- Seiteneffekte: DOM ----------

const clear = (display) => display.replaceChildren();
const render = (display) => (markup) => display.insertAdjacentHTML("beforeend", markup);
const showSpinner = (display) => render(display)(spinnerMarkup());
const hideSpinner = (display) => display.querySelector(".pokeball")?.remove();

const showError = (display) => (error) => {
  const message = errorMessage(error);
  if (message) display.textContent = message;
};

// ---------- Zusammenbau pro Pokedex ----------

const setupPokedex = (root) => {
  const display = root.querySelector(".Display");
  const searchInput = root.querySelector(".Search_Bar");
  const searchBtn = root.querySelector(".Search_Btn");
  const evolutionBtn = root.querySelector(".Evolution_Btn");
  const teamBtn = root.querySelector(".Team_Btn");

  const nextController = createAbortSwitch();
  const renderMarkup = render(display);
  const renderError = showError(display);

  const search = async (evolutionsOnly) => {
    const query = normalizeQuery(searchInput.value);
    if (!query) return;

    const controller = nextController();
    const { signal } = controller;
    const stopTimeout = startTimeout(controller, TIMEOUT_MS);
    const api = createApi(signal);

    try {
      showSpinner(display);
      await delay(SPINNER_DELAY_MS);
      if (signal.aborted) return;

      const names = await loadEvolutionNames(api, query);
      const markup = evolutionsOnly
        ? names.map(evolutionCardMarkup).join("")
        : (await loadPokemonsWithSpecies(api, names)).map(([pokemon, species]) => pokemonCardMarkup(pokemon, species)).join("");

      renderMarkup(markup);
    } catch (error) {
      renderError(error);
    } finally {
      stopTimeout();
      if (!signal.aborted || isTimeout(signal)) {
        hideSpinner(display);
        searchInput.value = "";
      }
    }
  };

  const randomTeam = async () => {
    const controller = nextController();
    const { signal } = controller;
    const stopTimeout = startTimeout(controller, TIMEOUT_MS);
    const api = createApi(signal);

    try {
      showSpinner(display);
      await delay(SPINNER_DELAY_MS);
      if (signal.aborted) return;

      const team = await loadTeam(api);
      renderMarkup(team.map((pokemon) => pokemonCardMarkup(pokemon)).join(""));
    } catch (error) {
      renderError(error);
    } finally {
      stopTimeout();
      if (!signal.aborted || isTimeout(signal)) hideSpinner(display);
    }
  };

  const loadEvolution = async (name) => {
    const api = createApi(nextController().signal);

    try {
      showSpinner(display);
      await delay(SPINNER_DELAY_MS);
      hideSpinner(display);

      const pokemon = await api.pokemon(name);
      renderMarkup(pokemonCardMarkup(pokemon));
    } catch (error) {
      renderError(error);
    } finally {
      hideSpinner(display);
    }
  };

  // Higher-Order-Funktion: leert zuerst das Display und ruft dann den Handler auf
  const withClear = (handler) => () => {
    clear(display);
    return handler();
  };

  searchBtn.addEventListener("click", withClear(() => search(false)));
  evolutionBtn.addEventListener("click", withClear(() => search(true)));
  teamBtn.addEventListener("click", withClear(randomTeam));

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") withClear(() => search(false))();
  });

  display.addEventListener("click", (e) => {
    const btn = e.target.closest(".EvolutionCard_Btn");
    if (!btn) return;
    const name = btn.closest(".EvolutionCard").querySelector(".EvolutionCard_Name").textContent;
    withClear(() => loadEvolution(name))();
  });
};

document.querySelectorAll(".Pokedex").forEach((root) => setupPokedex(root));
