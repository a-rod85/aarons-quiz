const quiz = document.getElementById('quiz');
const scoreDisplay = document.getElementById('score');
let score = 0
let questionScore = 0

const genres = [
    { name: 'Books', id: 10 },
    { name: 'Film', id: 11 },
    { name: 'Music', id: 12 },
    { name: 'Video Games', id: 15 }
]

const levels = [
    { name: 'easy', id: 100 },
    { name: 'medium', id: 200 },
    { name: 'hard', id: 300 }
]

function addGenre() {
    genres.forEach(genre => {
        const column = document.createElement('div');
        column.classList.add('genre-column');

        const columnTitle = document.createElement('div');
        columnTitle.classList.add('genre-title');
        columnTitle.innerHTML = genre.name;

        column.append(columnTitle)

        levels.forEach(level => {

            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('value', level.id)
            fetch(`https://opentdb.com/api.php?amount=1&category=${genre.id}&difficulty=${level.name}&type=boolean`)
                .then(response => response.json())
                .then(data => {
                    card.setAttribute('data-question', data.results[0].question);
                    card.setAttribute('data-answer', data.results[0].correct_answer);
                })

            const cardValue = document.createElement('div')
            cardValue.classList.add('value')
            cardValue.innerHTML = card.getAttribute('value')

            card.append(cardValue)
            card.addEventListener('click', cardturns, { once: true })
            column.append(card);
        })
        quiz.append(column);
    })
}

function cardturns() {
    console.log('clicked');

    questionScore = this.getAttribute('value')

    const textDisplay = document.createElement('div');
    textDisplay.classList.add('question');
    textDisplay.innerHTML = this.getAttribute('data-question')

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('buttons')

    const trueButton = document.createElement('button');
    trueButton.classList.add('true')
    trueButton.innerHTML = 'True';
    trueButton.addEventListener('click', getResult)

    const falseButton = document.createElement('button');
    falseButton.classList.add('false')
    falseButton.innerHTML = 'False';
    falseButton.addEventListener('click', getResult)

    buttonDiv.append(trueButton, falseButton)

    this.append(textDisplay, buttonDiv);
}

function getResult() {
    const cardOfButton = this.parentElement.parentElement
    console.log(this.parentElement)
    console.log(cardOfButton.firstChild)

    if (cardOfButton.getAttribute('data-answer') === this.innerHTML) {

        score = score + parseInt(questionScore)
        scoreDisplay.innerHTML = score

        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            const resultValue = document.createElement('div')
            resultValue.classList.add('value')
            resultValue.innerHTML = questionScore
            cardOfButton.append(resultValue)
        }, 40)

    } else {
        cardOfButton.classList.add('false-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            const resultValue = document.createElement('div')
            resultValue.classList.add('value')
            resultValue.innerHTML = 0
            cardOfButton.append(resultValue)
        }, 40)
    }
}
addGenre()
