// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//Need onclick event handler function that prompts with questions div

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


function writePassword () {
    //strings or arrays from which to pull characters
    var lowercase = "abcdefghijklmnopqrstuv";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    // var specialArr = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "/", ",", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]  ]

    //pool of characters from which to choose after user specifies their desired types
    var characterPool = [];

    //pool of types to include
    var types = [];

    //variable with empty string to hold new password
    var newPassword = "";

    //variable to hold user's chosen length
    var chosenLength;

    //function to push selected character types into characterPool array
    function createCharacterPool () {

        switch(types) {
            case includes("lowercase"):
              characterPool.push(lowercase);
              break;

            case includes("uppercase"):
                characterPool.push(uppercase);
              break;

              case includes("numbers"):
                characterPool.push(numbers);
              break;

              case includes("uppercase"):
                characterPool.push(specialChar);
              break;

            default:
                console.log("Other type found", types[0])
              return types;
          }
    }



    //variable to temporarily hold next character before concat  
    var randomItem;

    //function to randomly choose a character and return to variable randomItem
    randomItem = lowercase[Math.floor(math.random()*lowercase.length)]

    //use for loop and concat function to push characters into new string 
    for (var i = 0; i < chosenLength; i++) {
        newPassword.concat()
    }
    
    // $('#questionsModal').modal('show')
    $('#modalSaveBtn').on("click" {
        Lowercase: "",
        Uppercase: "",
        Numbers: "",
        SpecialCharacters: ""
    }, function () {
        event.preventDefault();
        console.log("Hello! Engaged write password function...")
    })
}
