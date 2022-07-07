const quiz = document.getElementById('quiz');
const scoreDisplay = document.getElementById('score');
let score = 0
let questionScore = 0

const titles = ['Books', 'Film', 'Music', 'Video Games'];


const levels = ['easy', 'medium', 'hard'];

function addGenre() {
    titles.forEach(title => {
        const column = document.createElement('div');
        column.classList.add('genre-column');
        
        column.innerHTML = title;
        if (title === 'Books') {
            category = 10;
        }
        if (title === 'Film') {
            category = 11;
        }
        if (title === 'Music') {
            category = 12;
        }
        if (title === 'Video Games') {
            category = 15;
        }
        levels.forEach(level => {
            const card = document.createElement('div');
            card.classList.add('card');
            column.append(card);

            if (level === 'easy') {
                card.innerHTML = 25;
            }

            if (level === 'medium') {
                card.innerHTML = 50;
            }

            if (level === 'hard') {
                card.innerHTML = 100;
            }
            fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${level}&type=boolean`)
                .then(response => response.json())
                .then(data => {
                    
                    card.setAttribute('data-question', data.results[0].question);
                    card.setAttribute('data-answer', data.results[0].correct_answer);
                })
            card.addEventListener('click', cardturns, { once: true })
        })
        quiz.append(column);
    })
}

function cardturns() {
    console.log('clicked');

    questionScore = this.innerText;

    const textDisplay = document.createElement('div');
    const trueButton = document.createElement('button');
    const falseButton = document.createElement('button');

    falseButton.innerHTML = 'False';
    trueButton.innerHTML = 'True';

    falseButton.addEventListener('click', getResult)
    trueButton.addEventListener('click', getResult)

    textDisplay.innerHTML = this.getAttribute('data-question')

    this.append(textDisplay, trueButton, falseButton);
    textDisplay.innerHTML = this.getAttribute('data-question');
    const allCards = Array.from(document.querySelectorAll('.card'));

    
}

function getResult() {
    const cardOfButton = this.parentElement
    if (cardOfButton.getAttribute('data-answer') === this.innerHTML) {
        console.log('yes another one!')
        score = score + parseInt(questionScore)
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            
            cardOfButton.innerHTML = questionScore;
            cardOfButton.style.color = '#000'
        }, 40)

    } else {
        cardOfButton.classList.add('false-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 40)
    }
}
addGenre()

const username = document.getElementById('login')
const submitbutton = document.getElementById('submit')
 
var name = ''
submitbutton.onclick = function()
{console.log(username)
document.getElementById('nameholder').innerText= username.value

}