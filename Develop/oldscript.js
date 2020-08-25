// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//DEFINE KEY VARIABLES***********************************************

//Sets of the possible characters in each type. It seems this can be done either by array or string. 
  var charLCase = "abcdefghijklmnopqrstuvwxyz";
  var charUCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNumeric = "0123456789";
  var charSpecial = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//Buckets to hold the user's answers.
  var userChoiceNum = prompt ("How many characters would you like your password to have?  Please choose a number between 8 and 128.");
  var includedTypes = []; //Empty array. We'll push types into this based on user answers to create a password recipe.  

//String of possible characters, only types chosen by the user. Initially empty.
  var charPool = "";

//Bucket to hold the new password.
  var newPassword = "";

//Boolean for new Password validation.
  var isValid;

//DEFINE FUNCTIONS***************************************************
//Ask user to choose types and create the character pool by concatenating from the strings defined above. Log to console. Use a while loop to rerun the prompts while the includedTypes is >1, to ensure user chooses at least one character type.

function generatePassword() {

  confirm ("Would you like to include UPPERCASE LETTERS?")); if true {
    includedTypes.push("UpCase");
    charPool.concat(charUCase);
  } 

  while (includedTypes.length < 1) {
  
  if (confirm ("Would you like to include LOWERCASE LETTERS?")) {
    includedTypes.push("LowCase");
    charPool.concat(charLCase); 
  } 
  
  if (confirm ("Would you like to include NUMBERS?")) {
    includedTypes.push("Numbers");
    charPool.concat(charNumeric);
  } 
  
  if (confirm ("Would you like to include SPECIAL CHARACTERS?")) {
    includedTypes.push("Special");-+
    charPool.concat(charSpecial);
  }

  if (userChoiceNum <8 || >128)) alert ("Oops! That's not a number between 8 and 128. Please choose again.")
  }
}

function gotIt() {
  alert ("Got it! You'd like to create a password that is " + userChoiceNum + "characters long, and include the following types of characters: " + includedTypes + ". Here it comes!");
  console.log ("Length " + userChoiceNum + " | Types: " + includedTypes);
}

// Use math.random to choose random characters from the pool and return them to the passWord field.
function selectRandom {
  for (var i=0; i<userChoiceNum.length; i++) {
    var rnum = Math.floor(Math.random() * charPool.length);
    newPassword += charPool.substring(rnum,rnum+1);
    console.log("rnum: "+ rnum + " | password: "+ passWord)
  }
}
//Validate new password meets criteria
function validate() {
if (newPassword.length >=8 && <=128) isValid="True") 
else isValid="False"; alert ("We were unable to validate this password. Try again."); go();
}

//not sure if I need this but don't want to lose it.  commented out. 
//function 
// passWord.push(String(charPool[i]));
//var generateBtn = document.querySelector("#generate"); <--do I need this?

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//CALL FUNCTIONS

generatePassword();
gotIt();
selectRandom();
validate();
writePassword()
