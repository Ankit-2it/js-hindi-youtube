// challenge no 1 : guess no between 1- 100

const random = parseInt(Math.random() * 100 + 1)
console.log(random)


// on the submit event, we have to take many values

// firstly take submit
const submit = document.querySelector('#subt')

// take user input
const userInput = document.querySelector('#guessField')

// previous guess
const guessSlot = document.querySelector('.guesses')

// lastResult
const remaining = document.querySelector('.lastResult')

// guess is near or far
const lowOrHi = document.querySelector('.lowOrHi')

// class of these 3
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

// we will store the guesses (in array) that user has alreadh guessed
const prevGuess = []

// to count no of guesses, as it becomes more than 10 => startover
let numGuess = 1

// playbutton
let playGame = true

//------------------------------------- Functionality --------------------------------------------

// to check whether input is a,b,c | -ve | more than 100
function validateGuess(guess){
    //

}

// to print message whether the input no is low/high/equal using 'displayMessage'
function checkGuess(guess){
    //
    
}

// all dom manipulation: empty guess box | previous guess | guess remaining
function displayGuess(guess){
    //
    
}

// display message low or high
function displayMessage(message){
    //
    
}


function endGame(){
    //
}


function newGame(){
    //
}
