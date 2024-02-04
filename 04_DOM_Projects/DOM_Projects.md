# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 Color Switcher

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 bmi calculator

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    const category = document.createElement('p');
    if (bmi<18.6){
      results.innerHTML =`<span>${bmi}</span>`;
      category.textContent = "You are Underweight"
      results.appendChild(category)
    }else if (bmi>24.9){
      results.innerHTML =`<span>${bmi}</span>`;
      category.textContent = "You are Overweight"
      results.appendChild(category)
    }else if (bmi>=18.6 && bmi<=24.9){
      results.innerHTML =`<span>${bmi}</span>`;
      category.textContent = "You are in Normal Range"
      results.appendChild(category)
    }
  }
});


```
## project 3 Digital Clock

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
## project 4 Random number guesser game

```javascript
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlots = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
 let prevGuess = [];
 let numGuess = 1;

 let playGame = true;

 if (playGame){
   submit.addEventListener('click' , function(e){
     e.preventDefault();
     const guess = parseInt(UserInput.value);
     validateGuess(guess);
   })
 }

 function validateGuess(guess){
   if (isNaN(guess)){
     alert("Please enter a valid number")
   }else if (guess<1 || guess >100){
     alert("Please enter a valid number in range")
   }else {
     prevGuess.push(guess)
     if (numGuess === 10 ){
       displayGuess(guess)
       displayMessage(`Game Over . Random number was ${randomNumber}`)
       endgame()
     } else {
       displayGuess(guess)
       checkGuess(guess)
     }    
     }
  }

 function checkGuess(guess){
  if (guess === randomNumber){
    displayMessage(`You Guessed it right`)
    endgame()
  }else if (guess < randomNumber){
    displayMessage(`Number is Too low`)
  }else if (guess > randomNumber){
    displayMessage(`Number is Too High`)
  }
 }


 function displayGuess(guess){
   UserInput.value = ''
   guessSlots.textContent +=`${guess}  `
   remaining.textContent =`${10-numGuess}`
   numGuess++;

 }


 function displayMessage(message){
   lowOrHi.textContent = `${message}`;
 }

 function endgame(){
   UserInput.value ='';
   UserInput.setAttribute('disabled','');
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
   startOver.appendChild(p);
   playGame = false;
   newgame();
 }

 function  newgame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click' , function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlots.textContent = '';
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame =true;
    remaining.textContent =`${10-numGuess}`

   })
 }
