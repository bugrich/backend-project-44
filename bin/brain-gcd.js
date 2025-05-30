#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  logTaskForBrainGcdGame,
  runBrainGcdGame,
} from '../games/brain-gcd-module.js'

const name = greetUser

logTaskForBrainGcdGame()

runBrainGcdGame(name)
