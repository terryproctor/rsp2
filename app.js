let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')

const possibleChoices = document.querySelectorAll('.choices')

const randomNumber = Math.round(Math.random() * (3))


// Get users userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

//Get a random computers choice
function generatedComputerChoice() {
  if (randomNumber === 1) {
    return computerChosen = 'Rock'
  } else if (randomNumber === 2) {
    return computerChosen = 'Paper'
  } else if (randomNumber === 3) {
    return computerChosen = 'Scissors'
  }
}

function results() {
  if (computerChosen === userChosen) {
    return result = 'There was a tie'
  } else if (computerChosen === 'Rock' && userChosen === 'Paper') {
    return result = 'You win!'
  } else if (computerChosen === 'Rock' && userChosen === 'Scissors') {
    return result = 'You lost!'
  } else if (computerChosen === 'Paper' && userChosen === 'Rock') {
    return result = 'You lost!'
  } else if (computerChosen === 'Paper' && userChosen === 'Scissors') {
    return result = 'You win!'
  } else if (computerChosen === 'Scissors' && userChosen === 'Rock') {
    return result = 'You win!'
  } else if (computerChosen === 'Scissors' && userChosen === 'Paper') {
    return result = 'You lost'
  }
}

console.log(computerChosen)
console.log(userChosen)