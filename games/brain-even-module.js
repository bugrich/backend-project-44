import {
  logQuestion,
  getUserAnswer,
  getRandomNumber,
  logUserAnswerIsRight,
  logUserAnswerIsWrong,
  checkIfUserWon,
} from '../src/index.js'

function isNumberEven(number) {
  return number % 2 === 0
}

function logTaskForBrainEvenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

function runBrainEvenGame(name) {
  const decimality = 100
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(decimality)

    logQuestion(number)

    const userAnswer = getUserAnswer()

    const isEven = isNumberEven(number)

    if (userAnswer === (isEven ? 'yes' : 'no')) {
      logUserAnswerIsRight()
    }
    else {
      logUserAnswerIsWrong(name, isEven)
      break
    }
    checkIfUserWon(name, i)
  }
}

export { runBrainEvenGame, logTaskForBrainEvenGame }
