import {
  question,
  userAnswer,
  getRandomNumber,
  rightAsnwer,
  wrongAnswer,
  conditionForAWin,
} from '../src/index.js'

function getGcd(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

function taskForBrainGcdGame() {
  console.log('Find the greatest common divisor of given numbers.')
}

function brainGcdGame(name) {
  for (let i = 0; i < 3; i += 1) {
    const decimality = 100

    const numbers = [getRandomNumber(decimality), getRandomNumber(decimality)]

    question(numbers.join(' '))

    const userInput = userAnswer()

    const result = getGcd(numbers[0], numbers[1])

    if (Number(userInput) === result) {
      rightAsnwer()
    }
    else {
      wrongAnswer(name, result, userInput)
      break
    }
    conditionForAWin(name, i)
  }
}

export { getGcd, brainGcdGame, taskForBrainGcdGame }
