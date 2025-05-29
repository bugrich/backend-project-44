#!/usr/bin/env node
import {greetUser} from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

const name = greetUser();

function getOperation() {
    
    let opOrder = [];   

    for (let i = 0; i < 3; i += 1) {
     const random = Math.random()  
        if (random >= 0 && random <= 0.33) {
            opOrder.push('-')
        } else if (random >= 0.33 && random <= 0.66) {
            opOrder.push('+')
        }   else {
            opOrder.push('*')
        }
    }
    return opOrder
}

console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
    
    const firstNumber = Math.floor(Math.random() * 100)
    const secondNumber = Math.floor(Math.random() * 100)

    const arrayOfOp = getOperation()

    
    console.log(`Question: ${firstNumber} ${arrayOfOp[i]} ${secondNumber}`);
    
    const userAnswer = readlineSync.question('Your answer: ');

    let result; 
    switch(arrayOfOp[i]) {
        case '+' : 
            result = firstNumber + secondNumber;
            break;
        case '-' :
            result = firstNumber - secondNumber;
            break; 
        case '*':
            result = firstNumber * secondNumber;
            break;
        default:
            result = null;
    }

    if(result === Number(userAnswer)) {
        console.log('Correct!')
    }
    else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`)
        console.log(`Let's try again, ${name}`)
        break;
    }
    
    if(i === 2) {
    console.log(`Congratulations, ${name}!`);
    }
}