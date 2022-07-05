const game = document.getElementById('game')
const scoreDisplay = document.getElementById ('score')

const sport = 21
const levels = ['easy', 'medium', 'hard']

function addGenre() {
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = 'the genres'
    game.append(column);

    levels.forEach(level => {

       const card = document.createElement('div')
       card.classList.add('card')
       column.append (card)


    fetch(`https://opentdb.com/api.php?amount=1&category=21&difficulty=${level}&type=boolean`)
        .then (response => response.json())
        .then (data => { 
            console.log(data)
            card.setAttribute('data-question',data.results[1].question )    
        
        })
    })

}


addGenre()
 


