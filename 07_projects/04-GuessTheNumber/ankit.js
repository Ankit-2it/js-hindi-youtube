// challenge no 1 : guess no between 1- 100

let random = parseInt(Math.random() * 100 + 1);
// console.log(random)


// on the submit event, we have to take many values

// firstly take submit
const submit = document.querySelector('#subt');

// take user input
const userInput = document.querySelector('#guessField');

// previous guess
const guessSlot = document.querySelector('.guesses');

// lastResult
const remaining = document.querySelector('.lastResult')

// guess is near or far
const lowOrHi = document.querySelector('.lowOrHi');

// class of these 3
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// we will store the guesses (in array) that user has alreadh guessed
const prevGuess = [];

// to count no of guesses, as it becomes more than 10 => startover
let numGuess = 1;

// playbutton
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        // prevGuess = []
        validateGuess(guess);
    });
}

//------------------------------------- Functionality --------------------------------------------

// to check whether input is a,b,c | -ve | more than 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than one')
    }else if(guess > 100){
        alert('Please enter a number less than one')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number is ${random}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }


}

// to print message whether the input no is low/high/equal using 'displayMessage'
function checkGuess(guess){
    if(guess === random){
        displayMessage('You guessed it right');
        endGame();
    }else if(guess < random){
        displayMessage('Number is too Low');
    }else if(guess > random){
        displayMessage('Number is too High');
    }
    
}

// all dom manipulation: empty guess box | previous guess | guess remaining
function displayGuess(guess){
    userInput.value = '';        // clean up
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

// display message low or high
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');   // 'disabled':it takes as key-pair value
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}
