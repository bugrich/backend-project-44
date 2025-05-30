import {
  logQuestion,
  getUserAnswer,
  getRandomNumber,
  logUserAnswerIsRight,
  logUserAnswerIsWrong,
  checkIfUserWon,
} from '../src/index.js'

function getProgression() {
  const progression = []

  const decimalityForStart = 100
  const decimalityForStep = 10

  const start = getRandomNumber(decimalityForStart)
  let step = getRandomNumber(decimalityForStep)

  while (step === 0) {
    step = getRandomNumber(decimalityForStep)
  }

  for (let i = 0; i < 10; i += 1) {
    const currentElement = start + i * step
    progression.push(currentElement)
  }

  return progression
}

function logTaskForBrainProgressionGame() {
  console.log('What number is missing in the progression?')
}

function runBrainProgressionGame(name) {
  const decimality = 10
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOfProgression = getRandomNumber(decimality)

    const progression = getProgression()

    const correctAnswer = progression[randomNumberOfProgression]

    progression[randomNumberOfProgression] = '..'

    logQuestion(progression.join(' '))

    const userAnswer = getUserAnswer()

    if (Number(userAnswer) === correctAnswer) {
      logUserAnswerIsRight()
    }
    else {
      logUserAnswerIsWrong(name, correctAnswer, userAnswer)
      break
    }

    checkIfUserWon(name, i)
  }
}

export { logTaskForBrainProgressionGame, runBrainProgressionGame }
