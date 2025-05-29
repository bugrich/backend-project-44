#!/usr/bin/env node
import readlineSync from "readline-sync";
import { greetUser } from "../bin/brain-games.js";

const name = greetUser;

function isNumberEven(number) {
  return number % 2 === 0;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question("Your answer: ");

  if (
    (userAnswer === "yes" && isNumberEven(randomNumber)) ||
    (userAnswer === "no" && !isNumberEven(randomNumber))
  ) {
    console.log("Correct!");
  } else {
    console.log(
      `Wrong answer! The correct answer was '${
        isNumberEven(randomNumber) ? "yes" : "no"
      }'.`
    );
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
