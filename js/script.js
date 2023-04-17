// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html


"use strict";

/**
 * This function generates a random number and compares it with the user's guess.
 */
function guessnumber() {
  let result = "";
  const MIN = 1;
  const MAX = 6;
  let userGuess = parseInt(document.getElementById("user-guess").value);
  let generator = Math.floor((Math.random() * MAX) + MIN);
  
  if (userGuess == generator) {
    result = "Great job, you guessed the number correctly!";
  }

  if (userGuess != generator){
    result = "Wrong, try again.";
  }
  
  document.getElementById("result").innerHTML = result;
}
