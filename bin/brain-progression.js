#!/usr/bin/env node
import { greetUser } from "../bin/brain-games.js";
import {
  taskForBrainProgressionGame,
  brainProgressionGame,
} from "../games/brain-progression-module.js";

const name = greetUser;

taskForBrainProgressionGame();

brainProgressionGame(name);
