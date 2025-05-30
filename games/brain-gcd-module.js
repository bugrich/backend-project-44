import {
  logQuestion,
  getUserAnswer,
  getRandomNumber,
  logUserAnswerIsRight,
  logUserAnswerIsWrong,
  checkIfUserWon,
} from '../src/index.js'

function getGcd(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

function logTaskForBrainGcdGame() {
  console.log('Find the greatest common divisor of given numbers.')
}

function runBrainGcdGame(name) {
  const decimality = 100
  for (let i = 0; i < 3; i += 1) {
    const numbers = [getRandomNumber(decimality), getRandomNumber(decimality)]

    logQuestion(numbers.join(' '))

    const userAnswer = getUserAnswer()

    const gcd = getGcd(...numbers)

    if (Number(userAnswer) === gcd) {
      logUserAnswerIsRight()
    }
    else {
      logUserAnswerIsWrong(name, gcd, userAnswer)
      break
    }
    checkIfUserWon(name, i)
  }
}

export { runBrainGcdGame, logTaskForBrainGcdGame }
