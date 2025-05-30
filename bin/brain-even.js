#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  runBrainEvenGame,
  logTaskForBrainEvenGame,
} from '../games/brain-even-module.js'

const name = greetUser

logTaskForBrainEvenGame()

runBrainEvenGame(name)
