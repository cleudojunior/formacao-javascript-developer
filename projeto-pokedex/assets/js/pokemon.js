window.addEventListener('DOMContentLoaded', (e) => {
    let content = document.querySelector('.content')
    let back = null
    let individual = null

    let pokemon = document.querySelector('.pokemon')
    pokemon.addEventListener('click', apareceInformacao)
  
    // Resto do código...
    async function apareceInformacao(e) {
        const pokemonName = e.currentTarget.childNodes[3].innerHTML
            const poke = await pokeApi.getPokemon(pokemonName)
            console.log(poke)
            let htmlNew = `
        <div class="pokemonIndividual ${poke.types[0].type.name}">
            <div class="background-overlay"></div>
            <div class="headerPoke">
                <button class="back"></button>
                <h2 class="name">${poke.name}</h2>
                <span class="idPoke">#${poke.id}</span>
            </div>
            <div class="photoSection">
                <button class="previous"></button>
                <img src="imgs/bulbasauro.svg" alt="" class="photoIndividual">
                <button class="next"></button>
            </div>
            <div class="informations">
                <ul class="tipo">
                    ${poke.types.map((types) => `<li class="type ${types.type.name}">${types.type.name}</li>`).join('')}
                </ul>
                <h2 class="titlepoke ${poke.types[0].type.name}C">
                    About
                </h2>
                <div class="dados-container">
                    <ul class="dados">
                        <li class="dado" id="weight">
                            ${poke.weight / 10}kg
                        </li>
                        <li class="reference">
                            Weight
                        </li>
                    </ul>
                    <span class="border">

                    </span>
                    <ul class="dados">
                        <li class="dado" id="height">
                            0.${poke.height} m
                        </li>
                        <li class="reference">
                            height
                        </li>
                    </ul>
                    <span class="border">

                    </span>
                    <ul class="dados">
                        <li class="dado" id="moves">
                            <span>${poke.moves[0].move.name}</span>
                            <span>${poke.moves[1].move.name}</span>
                        </li>
                        <li class="reference">
                            Moves    
                        </li>
                    </ul>
                </div>
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed porro iusto, distinctio ut a non tempore cum beatae. Assumenda unde modi sequi facilis maxime cum itaque nemo? Placeat, fugit!
                </p>

                <h2 class="titlepoke ${poke.types[0].type.name}C" id="baseState">
                    Base states
                </h2>
                <div class="states">
                    <ul class="atributes">
                        <li class="atribute ${poke.types[0].type.name}C">HP</li>
                        <li class="atribute ${poke.types[0].type.name}C">ATK</li>
                        <li class="atribute ${poke.types[0].type.name}C">DEF</li>
                        <li class="atribute ${poke.types[0].type.name}C">DEF</li>
                        <li class="atribute ${poke.types[0].type.name}C">DEF</li>
                        <li class="atribute ${poke.types[0].type.name}C">DEF</li>
                    </ul>
                    <span class="division"></span>
                    <div class="powers">
                        <ul class="state">
                            <li class="power">0${poke.stats[0].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}" style="width: ${poke.stats[0].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[1].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}" style="width: ${poke.stats[1].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[2].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}" style="width: ${poke.stats[2].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[3].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}" style="width: ${poke.stats[3].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[4].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}" style="width: ${poke.stats[4].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[5].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}" style="width: ${poke.stats[5].base_stat}%;"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
        content.innerHTML += htmlNew  
        individual = document.querySelector('.pokemonIndividual')
        
        back = document.querySelector('.back');
        back.addEventListener('click', escondeInformacao);
    }

    function escondeInformacao() {
        if(individual) {
        individual.style.display = 'none'
        individual.style.transform = 'translateY(100%)'
        individual.style.opacity = '0'
        back.removeEventListener('click', escondeInformacao)
        }
    }

})
