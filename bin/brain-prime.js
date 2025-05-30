#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  logTaskForBrainPrimeGame,
  runBrainPrimeGame,
} from '../games/brain-prime-module.js'

const name = greetUser

logTaskForBrainPrimeGame()

runBrainPrimeGame(name)
