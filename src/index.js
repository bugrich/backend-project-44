import readlineSync from 'readline-sync'
import crypto from 'crypto'

function logQuestion(numbers) {
  console.log(`Question: ${numbers}`)
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ')
}

function getRandomNumber(decimality) {
  const buffer = crypto.randomBytes(4)
  const randomValue = buffer.readUInt32LE(0)
  return randomValue % decimality
}

function logUserAnswerIsRight() {
  console.log('Correct!')
}

function logUserAnswerIsWrong(name, correctAnswer, userAnswer) {
  if (typeof userAnswer === 'string' && userAnswer.length > 0) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    )
    console.log(`Let's try again, ${name}!`)
  }
  else {
    console.log(
      `Wrong answer! The correct answer was '${correctAnswer ? 'yes' : 'no'}'.`,
    )
    console.log(`Let's try again, ${name}!`)
  }
}

function checkIfUserWon(name, index) {
  if (index === 2) {
    console.log(`Congratulations, ${name}!`)
  }
}

export {
  logQuestion,
  getUserAnswer,
  getRandomNumber,
  logUserAnswerIsRight,
  logUserAnswerIsWrong,
  checkIfUserWon,
}
