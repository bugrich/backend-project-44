#!/usr/bin/env node
console.log('Welcome to the Brain Games!');
import { getUserName } from '../src/cli.js';

let greet = getUserName();

console.log(`Hello, ${greet}!`); 