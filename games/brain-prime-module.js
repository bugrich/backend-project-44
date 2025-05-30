import {
  question,
  userAnswer,
  getRandomNumber,
  rightAsnwer,
  wrongAnswer,
  conditionForAWin,
} from '../src/index.js'

function isPrime(number) {
  if (number < 2) {
    return false
  }
  else if (number === 2) {
    return true
  }
  else if (number % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

function taskForBrainPrimeGame() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
}

function brainPrimeGame(name) {
  for (let i = 0; i < 3; i += 1) {
    const decimality = 100

    const number = getRandomNumber(decimality)

    question(number)

    const userInput = userAnswer()

    const result = isPrime(number)

    if ((userInput === 'yes' && result) || (userInput === 'no' && !result)) {
      rightAsnwer()
    }
    else {
      wrongAnswer(name, result)
      break
    }
    conditionForAWin(name, i)
  }
}

export { brainPrimeGame, taskForBrainPrimeGame, isPrime }
