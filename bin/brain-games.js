#!/usr/bin/env node

import { getUserName } from '../src/cli.js';

function greetUser() {

    console.log('Welcome to the Brain Games!');

    let name = getUserName();

    console.log(`Hello, ${name}!`);
    return name;
}
export { greetUser };