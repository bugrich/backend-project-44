#!/usr/bin/env node
import { greetUser } from "../bin/brain-games.js";
import {
  taskForBrainPrimeGame,
  brainPrimeGame,
} from "../games/brain-prime-module.js";

const name = greetUser;

taskForBrainPrimeGame();

brainPrimeGame(name);
