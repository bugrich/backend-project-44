#!/usr/bin/env node
import { greetUser } from '../bin/brain-games.js'
import {
  taskForBrainGcdGame,
  brainGcdGame,
} from '../games/brain-gcd-module.js'

const name = greetUser

taskForBrainGcdGame()

brainGcdGame(name)
