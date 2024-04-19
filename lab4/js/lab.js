// index.js - To create a Hangman Game
// Author: Segolen Plihon & Isabella Santana
// Date: 4/19/24

//Pseudocode for simple Hangman Game:
  // Select a random word
  // Set the number of maximum attempts (e.g., 6)
  // Create an empty list to store guessed letters
  // Set the game state to "in progress"

  // Main game loop
  // While the game is in progress:
  //     Display the hangman ASCII art corresponding to the number of incorrect guesses
  //     Display the current state of the word with underscores for unguessed letters and the correctly guessed letters
  //     Display the letters that have already been guessed
  //     Prompt the player to guess a letter
  //     Validate the input:
  //         If the input is not a single letter or has already been guessed, display an error message and ask for input again
  //     If the guessed letter is in the word:
  //         Update the word display to reveal the guessed letter(s)
  //     Else:
  //         Decrement the number of remaining attempts
  //         If the remaining attempts reach 0:
  //             Set the game state to "lost" and break out of the loop
  //     If all letters in the word have been guessed:
  //         Set the game state to "won" and break out of the loop

  // Display the game outcome
  // If the game state is "won":
  //     Display a congratulatory message
  // Else:
  //     Display a message indicating the correct word and that the player lost

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
