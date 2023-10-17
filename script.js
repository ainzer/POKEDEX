function searchPokemon() {
    const inputElement = document.getElementById('pokemonInput');
    const pokemonName = inputElement.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            console.error('Erreur de recherche de Pokémon:', error);
            displayPokemonError();
        });
}

function displayPokemon(pokemonData) {
    const pokemonInfoElement = document.getElementById('pokemonInfo');
    pokemonInfoElement.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p><strong>Type:</strong> ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Numéro:</strong> ${pokemonData.id}</p>
    `;
}

function displayPokemonError() {
    const pokemonInfoElement = document.getElementById('pokemonInfo');
    pokemonInfoElement.innerHTML = '<p>Aucun Pokémon trouvé. Veuillez réessayer.</p>';
}
