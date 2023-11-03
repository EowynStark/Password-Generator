// Assignment code here

// prompt for length of password (no less than 8 characters and no more than 128)
// prompt for character types (uppercase, lowercase, numeric, special characters)
// on an answer for each prompt answers are validated and at least one character chosen
// when all prompts are answered then a password is generated
// generated password is either shown by alert or written onto the page
var uppercase = ['A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z']
var lowercase = ['a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z']
var numeric = ['0, 1, 2, 3, 4, 5, 6, 7, 8, 9,']
var specialCharacter = ['!, @, #, $, %, &, *, +, ?']
function generatePassword(){
    window.alert("Passwords should be no less than 8 characters long and no more than 128. Passwords should include complex characters such as uppercase, lowercase, numeric, and/or at least one special character.");
    var userChoice1= window.prompt("Choose a numeric value between 0 and 9 ");
}

    
    // add code to collect user's choice
    // add code to create final value

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword, writePassword);