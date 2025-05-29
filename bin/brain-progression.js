#!/usr/bin/env node
import { greetUser } from "../bin/brain-games.js";
import readlineSync from "readline-sync";

const name = greetUser;

function getArray() {
  const start = Math.floor(Math.random() * 100);
  const array = [];
  const step = Math.floor(Math.random() * 10);

  for (let i = 0; i < 10; i += 1) {
    if (step !== 0) {
      const currentElement = start + i * step;
      array.push(currentElement);
    } else {
      const currentElement = start + i * 2;
      array.push(currentElement);
    }
  }

  return array;
}

console.log("What number is missing in the progression?");

for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 10);
  const progression = getArray();
  const result = progression[randomNumber];
  progression[randomNumber] = "..";

  console.log(`Question: ${progression.join(" ")}`);

  const userAnswer = readlineSync.question("Your answer: ");

  if (Number(userAnswer) === result) {
    console.log("Correct!");
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`
    );
    console.log(`Let's try again, ${name}`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
