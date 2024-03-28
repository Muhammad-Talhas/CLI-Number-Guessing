#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a number
// 2) User input for guessing number
// 3) Compare user input with computer genertaed number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "userGuessNumber",
        type: "number",
        message: "Please guess a Number between 1-6:" },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number.");
}
else
    (console.log("Sorry! You guessed a wrong Number."));
