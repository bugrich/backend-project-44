#!/usr/bin/env node
import { greetUser } from "../bin/brain-games.js";
import {
  taskForBrainCalcGame,
  brainCalcGame,
} from "../games/brain-calc-module.js";

const name = greetUser;

taskForBrainCalcGame();

brainCalcGame(name);
