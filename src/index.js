import readlineSync from "readline-sync";
import crypto from "crypto";

function question(numbers) {
  console.log(`Question: ${numbers}`);
}

function userAnswer() {
  const userAnswer = readlineSync.question("Your answer: ");
  return userAnswer;
}

function getRandomNumber(decimality) {
  const buffer = crypto.randomBytes(4);
  const randomValue = buffer.readUInt32LE(0);
  return randomValue % decimality;
}

function rightAsnwer() {
  console.log("Correct!");
}

function wrongAnswer(name, questionValue, userAnswer) {
  if (typeof userAnswer === "string" && userAnswer.length > 0) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${questionValue}'`
    );
    console.log(`Let's try again, ${name}`);
  } else {
    console.log(
      `Wrong answer! The correct answer was '${questionValue ? "yes" : "no"}'.`
    );
    console.log(`Let's try again, ${name}!`);
  }
}

function conditionForAWin(name, index) {
  if (index === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}

export {
  question,
  userAnswer,
  getRandomNumber,
  rightAsnwer,
  wrongAnswer,
  conditionForAWin,
};
