const game = document.getElementById('the quiz')
const scoreDisplay = document.getElementById ('score')

const titles = [
    {   name: 'Sport'
        id: 21

    },

    {   name: 'Geography'
        id: 22

    },

{   name: 'Music'
    id: 12

},]
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
titles.forEach(title => addTitles(titles))

function cardturns() {
    console.log('clicked')

    const textDisplay = document.createElement('div')
    const  trueButton = document.createElement('button')
    const  falseButton = document.createElement('button')
    falseButton.innerHTML = 'false'
    trueButton.innerHTML = 'true'
    this.append (textDisplay, trueButton. falseButton)
    textDisplay.innerHTML = this.getAttribute('data-question')

    const allCards = Array.from(document.querySelectorAll('.card'))
    console.log (allCards)
    allCards.forEach(card => card.removeEventListener('click', cardturn))
}
funcion getResult() {
    if (cardOfButton.getAttribute('data-answer') === this.innerHTML)
    {console.log ('Another one')}


    while (cardOfButton.firstChild) { 
        cardOfButton.removeChild(cardOfButton.lastChild)
    }
    cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')

}




