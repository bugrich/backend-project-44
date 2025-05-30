#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  brainEvenGame,
  taskForBrainEvenGame,
} from '../games/brain-even-module.js'

const name = greetUser

taskForBrainEvenGame()

brainEvenGame(name)
