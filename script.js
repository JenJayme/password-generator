// Assignment Code

//DEFINE VARIABLES

//Need sets of the possible characters in each type. It seems this can be done either by array or string. 
var charLCase = "abcdefghijklmnopqrstuvwxyz";
var charUCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumeric = '0123456789';
var charSpecial = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//Need buckets to hold the user's answers.
var userChoiceLength;
var includedTypes = []; //Initialized as an empty array. We'll push types into this array based on user answers to create a password recipe.  

//Need an array that is a pool of possible characters based on user choices. Again, this could be done by array or string.
var charPool ();

//Need a bucket to hold the new password.
var passWord

//DEFINE FUNCTIONS
//Prompt the user to specify a length between 8-129 characters.  This will determine the number of characters chosen in the math.random function later. 
var userChoiceLength = prompt ("How many characters would you like your password to have?  Please choose a number between 8 and 128.");

//Ask user to choose types and create the character pool by concatenating from the strings defined above.  


function chooseCharSet {

  if confirm ("Would you like to include UPPERCASE LETTERS?") {
    includedTypes.push("UpCase");
    charPool.concat(charUCase);
  } 
  
  if confirm ("Would you like to include LOWERCASE LETTERS?") {
    includedTypes.push("LowCase");
    charPool.concat(charLCase); 
  } 
  
  if confirm ("Would you like to include NUMBERS?") {
    includedTypes.push("Numbers");
    charPool.concat(charNumeric);
  } 
  
  if confirm ("Would you like to include SPECIAL CHARACTERS?") {
    includedTypes.push("Special")
    charPool.concat(charSpecial);
  }

  console.log(userChoiceLength, includedTypes);
}

function createPassword {
  [Math.floor(math.random)
}

// Generate a password with a character count that equals the length the user requested
  
function generate {
// Use a for loop
  for (var i = 0; i < userChoiceLength.length; i++) {
  passWord = passWord + randomChar(charPool);
}

var generateBtn = document.querySelector("#generate");



// Write password to the #password input

onclick

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//Work done when I didn't realize we had a started index.html and script.js. Ugh.
//______________________________________________________________________

//DEFINE VARIABLES
var passWord
var charTypes = [lowercase, uppercase, numeric, special]


//DEFINE FUNCTIONS

IF userChoiceNum >=8 && <=128, userChoiceNum appends to characterPool array, ELSE alert "Oops! That's not a number between 8 and 128. Please choose again." 

//for-loop 
for(var i=0; i < l; i++ )
{  
text += charPool.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));
//prompt user to choose character types
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


