// Assignment code here
// generate a password on a click
// series of prompts for password criteria
// prompt for length of password (no less than 8 characters and no more than 128)
// prompt for character types (uppercase, lowercase, numeric, special characters)
// on an answer for each prompt answers are validated and at least one character chosen
// when all prompts are answered then a password is generated
// generated password is either shown by alert or written onto the page 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);