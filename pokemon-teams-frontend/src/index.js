const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function renderTrainers(trainers) {
    trainers.forEach(trainer => {
        const trainerCard = generateTrainerCard(trainer)         
        document.querySelector('main').appendChild(trainerCard)
    })
}

function generatePokemonLi(pokemon) {
    const li = document.createElement('li')
    li.innerText = pokemon.nickname    
    
    const releaseButton = document.createElement('button')
    releaseButton.className = 'release'
    releaseButton.innerHTML = 'Release'
    li.appendChild(releaseButton)

    return li
}

function generateTrainerCard(trainer) {
        const trainerCard = document.createElement('div')
        trainerCard.className = 'card'
        
        const p = document.createElement('p')
        p.innerHTML = trainer.name
        trainerCard.appendChild(p)

        const addButton = document.createElement('button')
        addButton.innerHTML = 'Add Pokemon'
        trainerCard.appendChild(addButton)
 
        const ul = document.createElement('ul')

        trainer.pokemons.forEach(pokemon => {
            const li = generatePokemonLi(pokemon)
            ul.appendChild(li)
        });
      
        trainerCard.appendChild(ul)
        return trainerCard
}

fetch(TRAINERS_URL)
.then(response => response.json())
.then(trainers => {          
        renderTrainers(trainers)
});


