#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  logTaskForBrainCalcGame,
  runBrainCalcGame,
} from '../games/brain-calc-module.js'

const name = greetUser

logTaskForBrainCalcGame()

runBrainCalcGame(name)
