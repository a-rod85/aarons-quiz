const game = document.getElementById('the quiz')
const scoreDisplay = document.getElementById ('score')

const titles = [
    {   name: 'Sport'
        id: 21

    }
]
const levels = ['easy', 'medium', 'hard']

function addGenre(titles) {
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = titles.name
    

    
levels.forEach(level => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card);

        if (level === 'easy') {
            card.innerHTML = 25

        }

        if  (level === 'medium') {
            card.innerHTML = 50
        }

        if  (level === 'hard') {
            card.innerHTML = 100
        }

        fetch(`https://opentdb.com/api.php?amount=1&category=${titles.id}&type=boolhttps://opentdb.com/api.php?amount=1&category=21&difficulty=${level}&type=booleann`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                card.setAttribute('data-question', data.results[0].question)
                card.setAttribute('data-answer', data.results[0].correct_answer)
            
            })
           card.addEventListener('click', card-turns)
    })
        
}

function cardturns() {
    console.log('clicked')
}


addGenre(titles[0])


