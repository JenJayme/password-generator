// PASSWORD GENERATOR

$('#generate').click(buttonCheck);
$('#charpool').click(generatePassword);

//simple function to confirm button works
function buttonCheck () {
  alert("Button check alert!");
  console.log("Button check alert working here.")
}

// return password to the front end
function writePassword() {
    console.log("Engaging writePassword function...");
    var password = generatePassword();
    var passwordText = document.getElementById("#password");

    passwordText.value = password;

};


function generatePassword () {
    console.log("Engaging writePassword function...")
    //strings or arrays from which to pull characters

    //variable with empty string to hold new password
    var newPassword = "";

    //variable to hold user's chosen length
    var chosenLength = 8;

    //function to push selected character types into characterPool array
  function createCharacterPool () {

    alert("Creating character pool...");

    var lowercase = "abcdefghijklmnopqrstuv";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    // var specialArr = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "/", ",", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]  ]

    //pool of types to include
    var types = ["lowercase", "numbers"];

    //pool of characters from which to choose after user specifies their desired types
    var characterPool = [];

    //variable to hold user's chosen length
    var chosenLength = 8;


    switch(types) {
        case includes("lowercase"):
        characterPool.push(lowercase);
        console.log("with lowercase", characterPool)
        break;

        case includes("uppercase"):
            characterPool.push(uppercase);
            console.log("with uppercase", characterPool)
        break;

        case includes("numbers"):
            characterPool.push(numbers);
            console.log("with numbers", characterPool)
        break;

        case includes("uppercase"):
            characterPool.push(specialChar);
            console.log("with special", characterPool)
        break;

        default:
            console.log("Other type found", types[0]);
            console.log("Character Pool default", characterPool)
        return types;
    }

      console.log("Character pool at end", characterPool)
  }

  function generateRandomItem () {
        //variable to temporarily hold next character before concat  
        var randomItem;

        //function to randomly choose a character and return to variable randomItem
        randomItem = lowercase[Math.floor(math.random()*lowercase.length)]

        //use for loop and concat function to push characters into new string 
        for (var i = 0; i < chosenLength; i++) {
            newPassword.concat()
        }
  }

  createCharacterPool();

}

// $('#questionsModal').modal('show')


// $( document ).ready(function() {


// })

