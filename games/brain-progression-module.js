import {
  question,
  userAnswer,
  getRandomNumber,
  rightAsnwer,
  wrongAnswer,
  conditionForAWin,
} from '../src/index.js'

function getArray() {
  const array = []

  const decimalityForStart = 100
  const decimalityForStep = 10

  const start = getRandomNumber(decimalityForStart)
  const step = getRandomNumber(decimalityForStep)

  for (let i = 0; i < 10; i += 1) {
    if (step !== 0) {
      const currentElement = start + i * step
      array.push(currentElement)
    }
    else {
      const currentElement = start + i * 2
      array.push(currentElement)
    }
  }

  return array
}

function taskForBrainProgressionGame() {
  console.log('What number is missing in the progression?')
}

function brainProgressionGame(name) {
  for (let i = 0; i < 3; i += 1) {
    const decimality = 10

    const randomNumberOfProgression = getRandomNumber(decimality)

    const progression = getArray()

    const result = progression[randomNumberOfProgression]

    progression[randomNumberOfProgression] = '..'

    question(progression.join(' '))

    const userInput = userAnswer()

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

export { taskForBrainProgressionGame, brainProgressionGame, getArray }
