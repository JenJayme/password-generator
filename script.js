// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Sets of the possible characters in each type. It seems this can be done either by array or string. 
var charLCase = "abcdefghijklmnopqrstuvwxyz";
var charUCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumeric = "0123456789";
var charSpecial = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

//Buckets to hold the user's answers.
var userChoiceNum = prompt ("How many characters would you like your password to have?  Please choose a number between 8 and 128.");
var includedTypes = []; //Empty array. We'll push types into this based on user answers to create a password recipe.  

//String of possible characters, only types chosen by the user. Initially empty.
var charPool = "";

//Bucket to hold the new password.
var newPassword = "";

//Boolean for new Password validation.
var isValid;

console.log(charLCase + charUCase + charNumeric + charSpecial);
console.log(userChoiceNum + includedTypes + charPool + newPassword + isValid);


