'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

//function expressions that make rest of code easier to read.
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

const displayColor = function(color){
    document.querySelector('.message').style.color = color
}

const displayColorBody = function(bodycolor){
    document.querySelector('body').style.backgroundColor = bodycolor
}

const displayNumber = function(number){
    document.querySelector('.number').textContent = number
}

const displayNumberStyle = function(numberstyle){
    document.querySelector('.number').style.width = numberstyle
}
const displayScore = function(score){
    document.querySelector('.score').textContent = score
}
const displayBoolean = function(boolean){
    document.querySelector('.check').disabled = boolean
}

const displayGuess = function(){
    Number(document.querySelector('.guess').value)
}


//beginning of click event of the check button.
document.querySelector('.check').addEventListener('click',function(){
 const guess = Number(document.querySelector('.guess').value)


 //When no input
 if(!guess){
    displayMessage('ENTER GUESS')
    displayColor('orange')

//When player wins
 }else if(guess === secretNumber){
        displayMessage('GREAT GUESS!')
        displayColor('yellow')
        displayColorBody ('green')
        displayNumberStyle('300px')
        displayNumber(secretNumber)
        displayBoolean(true)

        //Keeps highscore
        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }
        
//When guess is wrong
else if (guess !== secretNumber){
    if (score > 1){
        score--
        displayMessage(guess < secretNumber ? 'TOO LOW!' : 'TOO HIGH!')
        displayColor (guess < secretNumber ? 'blue' : 'red')
        displayScore(score)
    }else{
        displayMessage('LOST')
        displayColor ('darkred')
        displayScore(0)
    }
}

 }

)

//Start new round //New click event for the again button
document.querySelector('.again').addEventListener('click',()=>{
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20
    displayScore(score)
    displayMessage ('Begin...')
    displayColor('white')
    Number(document.querySelector('.guess').value = '')
    displayColorBody ('#222')
    displayNumberStyle('15rem')
    displayNumber('?')
    displayBoolean(false)
 })

