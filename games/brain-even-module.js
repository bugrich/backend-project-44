import {
  question,
  userAnswer,
  getRandomNumber,
  rightAsnwer,
  wrongAnswer,
  conditionForAWin,
} from "../src/index.js";

function isNumberEven(number) {
  return number % 2 === 0;
}

function taskForBrainEvenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function brainEvenGame(name) {
  for (let i = 0; i < 3; i += 1) {
    const decimality = 100;

    const number = getRandomNumber(decimality);

    question(number);

    const userInput = userAnswer();

    const result = isNumberEven(number);

    if ((userInput === "yes" && result) || (userInput === "no" && !result)) {
      rightAsnwer();
    } else {
      wrongAnswer(name, result);
      break;
    }
    conditionForAWin(name, i);
  }
}

export { isNumberEven, brainEvenGame, taskForBrainEvenGame };
