const section = document.querySelector('section')

fetch('http://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(response => {
        response.results.forEach(character => {
            const card = document.createElement('article')
            const name = document.createElement('p')
            const image = document.createElement('img')

        card.className = 'character-card'
        name.textContent = character.name
        image.src = character.image

        card.append(name, image)
        section.appendChild(card)
        })

    })

    
