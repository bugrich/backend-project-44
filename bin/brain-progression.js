#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  logTaskForBrainProgressionGame,
  runBrainProgressionGame,
} from '../games/brain-progression-module.js'

const name = greetUser

logTaskForBrainProgressionGame()

runBrainProgressionGame(name)
