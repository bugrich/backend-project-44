#!/usr/bin/env node
import {greetUser} from '../bin/brain-games.js';
import readlineSync from 'readline-sync';

const name = greetUser();

function isPrime(number) {
    if (number < 2) {
        return false;
    } else if (number === 2) {
        return true;
    } else if (number % 2 === 0) {
        return false;
    } 

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ');

        if ((userAnswer === 'yes' && isPrime(randomNumber)) || 
            (userAnswer === 'no' && !isPrime(randomNumber))) {
            console.log('Correct!');
        } else {
            console.log(`Wrong answer! The correct answer was '${isPrime(randomNumber) ? 'yes' : 'no'}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    if (i === 2) {
        console.log(`Congratulations, ${name}!`);
    }
}