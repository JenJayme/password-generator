// PASSWORD GENERATOR

//event listener for generate button
$('#generate').click(generatePassword);

//simple function to confirm button works
function buttonCheck () {
  alert("Button check alert!");
  console.log("Button check alert working here.")
}

function generatePassword () {
    console.log("OK let's generate your password. First, a few questions...");

      //variable to hold user's chosen length
      var chosenLength = chosenLength = prompt ("How many characters would you like your password to have?  Please choose a number between 8 and 128.");

      //pool of types to include
      var includedTypes = [];
      var characterPool = [];

      //pool of characters from which to choose after user specifies their desired types
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    //function to push selected character types into characterPool array

    var hasLowercase, hasUppercase, hasNumbers, hasSpecial;

      if (confirm ("Would you like to include LOWERCASE LETTERS?") == true) { 
        hasLowercase = true;
        includedTypes.push("Lowercase");
        characterPool.push(...lowercase);
      }

      if (confirm ("Would you like to include UPPERCASE LETTERS?") == true) {
        hasUppercase = true; 
        includedTypes.push("Uppercase");
        characterPool.push(...uppercase);
      }

      if (confirm ("Would you like to include NUMBERS?") == true) {
        hasNumbers = true;
        includedTypes.push("Numbers");
        characterPool.concat(numbers);
      }

      if (confirm ("Would you like to include SPECIAL CHARACTERS?") == true) { 
        hasSpecial = true;
        includedTypes.push("Special");
        characterPool.concat(specialChar);
      }

      //error message if a number is not between 8-128
      if (chosenLength <8 || chosenLength > 128) { alert ("Oops! That's not a number between 8 and 128. Please choose again.") }

      // console.log("characterPool =", characterPool);
      console.log("Got it! We'll generate a new password with the following types of characters: ", includedTypes);

      //variable to temporarily hold next character before concat  
      var randomItem;

      //variable with empty string to hold new password
      var newPassword = "";

      //use for-loop and concat function to push characters into new string 
      for (var i = 0; i < chosenLength; i++) {
      //function to randomly choose a character and return to variable randomItem
      randomItem = characterPool[Math.floor(Math.random() * characterPool.length)];
      console.log("Random item =", randomItem);
      newPassword.concat(randomItem);
      newPassword += randomItem;
      console.log("New password", newPassword);
    }

    // return password to the front end  
    $('#password').append(newPassword)
    return newPassword;

    //==========================================================================

    // switch(types) {
    //     case types.includes("lowercase"):
    //     characterPool.push(...lowercase);
    //     console.log("with lowercase", characterPool)
    //     break;

    //     case types.includes("uppercase"):
    //         characterPool.push(uppercase);
    //         console.log("with uppercase", characterPool)
    //     break;

    //     case types.includes("numbers"):
    //         characterPool.push(numbers);
    //         console.log("with numbers", characterPool)
    //     break;

    //     case types.includes("uppercase"):
    //         characterPool.push(specialChar);
    //         console.log("with special", characterPool)
    //     break;

    //     default:
    //         console.log("Running default in switch function.");
    //         console.log("Character Pool default", characterPool)
    //     return types;
    // }

    //   console.log("Types after switch function", types);
    //   console.log("Character pool at end", characterPool)

    //==========================================================================
    
}

// $('#questionsModal').modal('show')
// $( document ).ready(function() {
// })

