const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const image = document.getElementById('image');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const pokeapiproxy = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const displayPokemon = async () => {
    try {
        const searchTerm = searchInput.value.toLowerCase();
        const res = await fetch(pokeapiproxy +"/"+ searchTerm); //fetch function is used t make network requests to retrieve resources from a server. fetch returns a promise ; a promise is an object that shows the status of the html request, response is the actual data and metadata returned by the server once the request is fullfilled
        const pokemon = await res.json();
        console.log(pokemon);
        pokemonName.textContent = pokemon.name.toUpperCase();
        pokemonId.textContent = `#${pokemon.id}`;
        weight.textContent = `Weight: ${pokemon.weight}`;
        height.textContent = `Height: ${pokemon.height}`;
        image.innerHTML = `<img id="sprite" src="${pokemon.sprites.front_default}">`
        types.innerHTML = pokemon.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');
        console.log(pokemon.stats[1].base_stat);
        hp.innerText = pokemon.stats[0].base_stat;
        attack.innerText = pokemon.stats[1].base_stat;
        defense.innerText = pokemon.stats[2].base_stat;
        specialAttack.innerText = pokemon.stats[3].base_stat;
        specialDefense.innerText = pokemon.stats[4].base_stat;
        speed.innerText = pokemon.stats[5].base_stat;

    } catch(err) {
        alert('Pokémon not found')
        console.log(err);
    }
};

searchBtn.addEventListener("click", ()=> {
    displayPokemon();
})