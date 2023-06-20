const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 5
let offset = 0;


function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>  `
                <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}"
                             alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')
        pokemonList.innerHTML += newHtml
        pokemonnn()
    })
}

loadPokemonItens(offset, limit)

document.addEventListener('click', function(event) {
    if (event.target.id === 'loadMoreButton') {
      offset += limit;
      console.log('clicou aqui');
      console.log(offset)
  
      const qtdRecordNextPage = offset + limit;
  
      if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
      } else {
        loadPokemonItens(offset, limit);
      }
    }
  })