#!/usr/bin/env node
import {greetUser} from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

const name = greetUser();

function getGcd(a, b) {     
        while (b !== 0) {
            let temp = b
            b = a % b   
            a = temp
        }
    return a;
}

console.log('Find the greatest common divisor of given numbers.')

for (let i = 0; i < 3; i += 1) {
    
    const firstNumber = Math.floor(Math.random() * 100)
    const secondNumber = Math.floor(Math.random() * 100)
    
    console.log(`Question: ${firstNumber} ${secondNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const result = getGcd(firstNumber, secondNumber)

    if(Number(userAnswer) === result) {
        console.log('Correct!')
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`)
        console.log(`Let's try again, ${name}`)
        break;
    }

    if(i === 2) {
    console.log(`Congratulations, ${name}!`);
    }
}