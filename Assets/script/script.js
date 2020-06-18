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



//DEFINE VARIABLES
var passWord
var charTypes = [lowercase, uppercase, numeric, special]
var userChoiceLength
var userChoiceTypes
var charLCase = "abcdefghijklmnopqrstuvwxyz"
var charUCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var charNumeric = '0123456789';
var charSpecial = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var carPool

//Work done when I didn't realize we had a started index.html and script.js. Ugh.

//DEFINE FUNCTIONS
//for-loop 
for(var i=0; i < l; i++ )
{  
text += charPool.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));
//prompt user to choose 3 character types
//prompt user to specify length between 8-129 characters
//validate input
//computer selects at least one character from each type selected
//when all prompts answered, generate password
//alert "Your secure password is:" +" passWord

//CALL FUNCTIONS

//INSTRUCTIONS
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


