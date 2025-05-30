import {
  question,
  userAnswer,
  getRandomNumber,
  rightAsnwer,
  wrongAnswer,
  conditionForAWin,
} from '../src/index.js'

function getOperation() {
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

function calcResult(coll) {
  let result

  const firstNumber = coll[0]
  const secondNumber = coll[2]
  const operator = coll[1]

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber
      break
    case '-':
      result = firstNumber - secondNumber
      break
    case '*':
      result = firstNumber * secondNumber
      break
    default:
      result = null
  }
  return result
}

function taskForBrainCalcGame() {
  console.log('What is the result of the expression?')
}

function brainCalcGame(name) {
  for (let i = 0; i < 3; i += 1) {
    const decimality = 100

    const arrayOfOp = getOperation()

    const firstNumber = getRandomNumber(decimality)

    const secondNumber = getRandomNumber(decimality)

    const numbers = [firstNumber, arrayOfOp[i], secondNumber]

    question(numbers.join(' '))

    const userInput = userAnswer()

    const result = calcResult(numbers)

    if (result === Number(userInput)) {
      rightAsnwer()
    }
    else {
      wrongAnswer(name, result, userInput)
      break
    }
    conditionForAWin(name, i)
  }
}

export { getOperation, brainCalcGame, taskForBrainCalcGame }
