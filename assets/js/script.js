const game-area = document.getElementById('the quiz')
const scoreDisplay = document.getElementById ('score')

const sport = 6
const levels = ['medium', 'easy', 'hard']

function addGenre() {
    const column = document.createElement('div')
    column.classList.add('game-area')
    column.innerHTML = 'the genres'
    game.append(column)

    levels.forEach(level => {
        fetch(`https://opentdb.com/api.php?amount=6&category=21&difficulty={level}&type=multiple`)
        .then (response => response.json())
        .then (data => console.log(data))
    })
    

}

addGenre()
 


console.log("Connected!")