import {
  logQuestion,
  getUserAnswer,
  getRandomNumber,
  logUserAnswerIsRight,
  logUserAnswerIsWrong,
  checkIfUserWon,
} from '../src/index.js'

function getOperations() {
  let opOrder = []

  for (let i = 0; i < 3; i += 1) {
    const decimality = 100
    const random = getRandomNumber(decimality)
    if (random >= 0 && random <= 33) {
      opOrder.push('-')
    }
    else if (random >= 33 && random <= 66) {
      opOrder.push('+')
    }
    else {
      opOrder.push('*')
    }
  }
  return opOrder
}

function calc(expression) {
  const [firstNumber, operator, secondNumber] = expression

  switch (operator) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
    default:
      return null
  }
}

function logTaskForBrainCalcGame() {
  console.log('What is the result of the expression?')
}

function runBrainCalcGame(name) {
  const decimality = 100
  for (let i = 0; i < 3; i += 1) {
    const operations = getOperations()

    const firstNumber = getRandomNumber(decimality)

    const secondNumber = getRandomNumber(decimality)

    const expression = [firstNumber, operations[i], secondNumber]

    logQuestion(expression.join(' '))

    const userAnswer = getUserAnswer()

    const result = calc(expression)

    if (result === Number(userAnswer)) {
      logUserAnswerIsRight()
    }
    else {
      logUserAnswerIsWrong(name, result, userAnswer)
      break
    }
    checkIfUserWon(name, i)
  }
}

export { runBrainCalcGame, logTaskForBrainCalcGame }
