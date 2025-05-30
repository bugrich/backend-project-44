import {
  logQuestion,
  getUserAnswer,
  getRandomNumber,
  logUserAnswerIsRight,
  logUserAnswerIsWrong,
  checkIfUserWon,
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

export function logTaskForBrainPrimeGame() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
}

export function runBrainPrimeGame(name) {
  const decimality = 100
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(decimality)

    logQuestion(number)

    const userAnswer = getUserAnswer()

    const correctAnswer = isPrime(number)

    if (userAnswer === (correctAnswer ? 'yes' : 'no')) {
      logUserAnswerIsRight()
    }
    else {
      logUserAnswerIsWrong(name, correctAnswer)
      break
    }
    checkIfUserWon(name, i)
  }
}
