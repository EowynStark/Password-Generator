// creates an object containing password options
var passwordOptions = {
    uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specialCharacter: ['!', '@', '#', '$', '%', '&', '*', '+', '?']
};
// creates function to give parameters for password generation
function generatePassword(){
    window.alert("Passwords should be no less than 8 characters long and no more than 128. Passwords should include complex characters such as uppercase, lowercase, numeric, and/or at least one special character.");
    var userChoice1= window.alert("Ready to generate a password?");
    writePassword();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var userChoice2 = window.prompt("Choose the length of your password. Pick a number between 8 and 15");
    var passwordText = document.querySelector("#password");
    if (userChoice2 === "8"){
        var password = passwordOptions.uppercase[0] +passwordOptions.uppercase[3] + passwordOptions.lowercase[1] + passwordOptions.lowercase[4] + passwordOptions.numeric[2] + passwordOptions.numeric[6] + passwordOptions.specialCharacter[3]+ passwordOptions.specialCharacter[7];
    }else if (userChoice2 === "9"){
        var password = passwordOptions.uppercase[1] + passwordOptions.uppercase[4] + passwordOptions.lowercase[2]+ passwordOptions.lowercase[5] + passwordOptions.numeric[3] + passwordOptions.numeric[8] + passwordOptions.specialCharacter[0] + passwordOptions.specialCharacter[5] + passwordOptions.lowercase[4];
    }else if (userChoice2 === "10"){
        var password = passwordOptions.lowercase[10] + passwordOptions.lowercase[20] + passwordOptions.uppercase[13] + passwordOptions.uppercase[16] + passwordOptions.numeric[5] + passwordOptions.numeric[0] + passwordOptions.uppercase[2] + passwordOptions.uppercase[14] + passwordOptions.specialCharacter[0] + passwordOptions.specialCharacter[6];
    }else if (userChoice2 === "11"){
        var password = passwordOptions.numeric[8] + passwordOptions.lowercase[25] + passwordOptions.lowercase[19] + passwordOptions.specialCharacter[8] + passwordOptions.specialCharacter[1] + passwordOptions.uppercase[2]+ passwordOptions.uppercase[22] + passwordOptions.lowercase[0] + passwordOptions.lowercase[15] + passwordOptions.uppercase[5] + passwordOptions.uppercase[9];
    }else if (userChoice2 === "12"){
        var password = passwordOptions.specialCharacter[2] + passwordOptions.lowercase[2] + passwordOptions.lowercase[12] + passwordOptions.lowercase[24] + passwordOptions.numeric[2] + passwordOptions.uppercase[3] + passwordOptions.uppercase[6] + passwordOptions.uppercase[9] + passwordOptions.lowercase[5] + passwordOptions.lowercase[10] + passwordOptions.lowercase[15] + passwordOptions.specialCharacter[7];
    }else if (userChoice2 === "13"){
        var password = passwordOptions.lowercase[19] + passwordOptions.lowercase[2] + passwordOptions.lowercase[12] + passwordOptions.numeric[0, 3, 2] + passwordOptions.lowercase[20, 15, 0] + passwordOptions.uppercase[0, 18, 3] + passwordOptions.specialCharacter[5];
    }else if (userChoice2 === "14"){
        var password = passwordOptions.specialCharacter[5] + passwordOptions.lowercase[16, 19] + passwordOptions.numeric[7, 2] + passwordOptions.uppercase[16, 19] + passwordOptions.lowercase[5, 0] + passwordOptions.uppercase[0, 3, 9, 12]
    }else (userChoice2 === "15")
        var password = passwordOptions.numeric[0] + passwordOptions.lowercase[15, 1, 7] + passwordOptions.specialCharacter[2] + passwordOptions.lowercase[22, 2, 5] + passwordOptions.uppercase[3, 22, 12] + passwordOptions.specialCharacter[6] + passwordOptions.uppercase[0, 18, 20];
    passwordText.value = password;
    };

  

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);