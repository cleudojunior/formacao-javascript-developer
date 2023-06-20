let content = document.querySelector('.container')


    async function pokemonnn() {
    let pokemon = await document.querySelectorAll('.pokemon')
    pokemon.forEach(p => {
        p.addEventListener('click', apareceInformacao)
    })
    
}

    pokemonnn()
  
    // Resto do código...
    async function apareceInformacao(e) {
        let pokemonName = e.currentTarget.id
        console.log(typeof(pokemonName))
            const poke = await pokeApi.getPokemon(pokemonName)
            htmlNew = `
        <div class="pokemonIndividual ${poke.types[0].type.name}">
            <div class="background-overlay"></div>
            <div class="headerPoke">
                <button class="back"></button>
                <h2 class="name">${poke.name}</h2>
                <span class="idPoke">#${poke.id}</span>
            </div>
            <div class="photoSection">
                <button class="previous"></button>
                <img src="${poke.sprites.other.dream_world.front_default}" alt="" class="photoIndividual">
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

                <h2 class="titlepoke ${poke.types[0].type.name}C" id="baseState">
                    Base states
                </h2>
                <div class="states">
                    <ul class="atributes">
                        <li class="atribute ${poke.types[0].type.name}C">HP</li>
                        <li class="atribute ${poke.types[0].type.name}C">ATK</li>
                        <li class="atribute ${poke.types[0].type.name}C">DEF</li>
                        <li class="atribute ${poke.types[0].type.name}C">SATK</li>
                        <li class="atribute ${poke.types[0].type.name}C">SDEF</li>
                        <li class="atribute ${poke.types[0].type.name}C">SPD</li>
                    </ul>
                    <span class="division"></span>
                    <div class="powers">
                        <ul class="state">
                            <li class="power">0${poke.stats[0].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[0].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[1].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[1].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[2].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[2].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[3].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[3].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[4].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[4].base_stat}%;"></li>
                        </ul>
                        <ul class="state">
                        <li class="power">0${poke.stats[5].base_stat}</li>
                        <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[5].base_stat}%;"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `

        // Estilos para animação e fundo do docuemnto
        pokemonList.style.filter = 'blur(2px)'
        content.style.top = '50%'
        content.style.opacity = '1'

        content.innerHTML += htmlNew 

        function escondeInformacao() {
            let pokeI = document.querySelector('.pokemonIndividual')
            let back = document.querySelector('.back')
            back.addEventListener('click', () => {
                content.removeChild(pokeI)
                content.style.top = '100%'
                pokemonList.style.filter = 'blur(0px)'
            })
        }
        escondeInformacao()
        function proximoPokemon() {
            let pokeI = document.querySelector('.pokemonIndividual')
            next = document.querySelector('.next')
            next.addEventListener('click', () => {
                content.removeChild(pokeI)
                pokemonName = Number(pokemonName) + 1
                trocaPokemon(pokemonName)
            })
        }
        proximoPokemon()

        if(pokemonName == 1) {
            previous = document.querySelector('.previous')
            previous.style.display = 'none'
        } else {
            function anteriorPokemon() {
            let pokeI = document.querySelector('.pokemonIndividual')
            previous = document.querySelector('.previous')
            previous.style.display = 'block'
            previous.addEventListener('click', () => {
                content.removeChild(pokeI)
                pokemonIdNext = Number(pokemonName) - 1
                console.log(pokemonName)
                trocaPokemon(pokemonIdNext)
            })
        }
        anteriorPokemon()
    }
}


    // Função para trocar pokemon quando algum é selecionado

    async function trocaPokemon(e) {
            let pokemonId = e
            console.log(typeof(pokemonId))
                const poke = await pokeApi.getPokemon(pokemonId)
                htmlNew = `
            <div class="pokemonIndividual ${poke.types[0].type.name}">
                <div class="background-overlay"></div>
                <div class="headerPoke">
                    <button class="back"></button>
                    <h2 class="name">${poke.name}</h2>
                    <span class="idPoke">#${poke.id}</span>
                </div>
                <div class="photoSection">
                    <button class="previous"></button>
                    <img src="${poke.sprites.other.dream_world.front_default}" alt="" class="photoIndividual">
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
    
                    <h2 class="titlepoke ${poke.types[0].type.name}C" id="baseState">
                        Base states
                    </h2>
                    <div class="states">
                        <ul class="atributes">
                            <li class="atribute ${poke.types[0].type.name}C">HP</li>
                            <li class="atribute ${poke.types[0].type.name}C">ATK</li>
                            <li class="atribute ${poke.types[0].type.name}C">DEF</li>
                            <li class="atribute ${poke.types[0].type.name}C">SATK</li>
                            <li class="atribute ${poke.types[0].type.name}C">SDEF</li>
                            <li class="atribute ${poke.types[0].type.name}C">SPD</li>
                        </ul>
                        <span class="division"></span>
                        <div class="powers">
                            <ul class="state">
                                <li class="power">0${poke.stats[0].base_stat}</li>
                                <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[0].base_stat}%;"></li>
                            </ul>
                            <ul class="state">
                            <li class="power">0${poke.stats[1].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[1].base_stat}%;"></li>
                            </ul>
                            <ul class="state">
                            <li class="power">0${poke.stats[2].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[2].base_stat}%;"></li>
                            </ul>
                            <ul class="state">
                            <li class="power">0${poke.stats[3].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[3].base_stat}%;"></li>
                            </ul>
                            <ul class="state">
                            <li class="power">0${poke.stats[4].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[4].base_stat}%;"></li>
                            </ul>
                            <ul class="state">
                            <li class="power">0${poke.stats[5].base_stat}</li>
                            <li class="bar ${poke.types[0].type.name}C" style="width: ${poke.stats[5].base_stat}%;"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `
            pokemonList.style.filter = 'blur(2px)'
            content.style.top = '50%'
            content.style.opacity = '1'
    
            content.innerHTML += htmlNew  

            // Função para esconde informação quando apertar no botão

            function escondeInformacao() {
                let pokeI = document.querySelector('.pokemonIndividual')
                let back = document.querySelector('.back')
                back.addEventListener('click', () => {
                    content.removeChild(pokeI)
                    pokemonList.style.filter = 'blur(0px)'
                    content.style.top = '50%'
                })
            }
            escondeInformacao()

            //Função para voltar um pokemon

            function proximoPokemon() {
                let pokeI = document.querySelector('.pokemonIndividual')
                next = document.querySelector('.next')
                next.addEventListener('click', () => {
                    content.removeChild(pokeI)
                    pokemonId = Number(pokemonId) + 1
                    console.log(pokemonId)
                    trocaPokemon(pokemonId)
                })
            }
            proximoPokemon()


            // Função para gerar voltar um pokemon

            function anteriorPokemon() {
                let pokeI = document.querySelector('.pokemonIndividual')
                previous = document.querySelector('.previous')
                previous.addEventListener('click', () => {
                    content.removeChild(pokeI)
                    pokemonId = Number(pokemonId) - 1
                    console.log(pokemonId)
                    trocaPokemon(pokemonId)
                })
            }
            anteriorPokemon()
    }
