
// function windowAlerts() {
//   var integer;
//   var answer = prompt("How many characters would you like your password to contain?");
//   if (answer == null || integer == "") {
//     integer = "ok";
//   } 

// document.querySelector("#generate").innerHTML = integer;
//  }

//Inside here is where I put the questions 
//Store the info in variables 
// funtion generatePassword() {
//   var finalPass = "";

  

//   return finalPass;

// }



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters variables 
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()<>?./+=<>~`"; 
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numbers + specialChars + upperChars + lowerChars;
  var enterLength;
  // var chooseNumbers;
  
  
// Begins the function to generate password
function generatePassword() {
  var userFinalInput = "";
  var acceptedChars = "";
  var chooseNumbers;
  var chooseSpecialChars;
  var chooseLowerCase;
  // var enterLength;
  
  
  //Asks the length of the password to the user
  enterLength= parseInt(prompt("How many characters would you like your password to contain? Please choose between 8 and 128"));
  // parseInt fucntion converts a string into a number
  //if statements for user validation
  if (enterLength < 8 || enterLength > 128) {
    enterLength = parseInt(prompt("You must choose between 8 and 128"));
  } else if (enterLength >= 8 || enterLength <= 128) {
      // confirm user choices
    chooseNumbers = confirm("Click OK if you like to include numbers?");
    




  }
  //   if (chooseNumbers === true) {
  //         acceptedChars = acceptedChars + numbers;
  //  }
//  }
//   chooseSpecialChars = confirm("Click OK if like to include special characters");
//   if (chooseSpecialChars === ture) {
//      acceptedChars = acceptedChars + specialChars;
//   }
  // chooseLowerCase = confirm("Click OK if you like to include lower case letters?")
  // if (chooseLowerCase === true)
  //    acceptedChars = acceptedChars + lowerChars;



  // loop the number of inputNumber/questions
  //each time, use the math.random to target a random index in that string

  // userFinalInput = userFinalInput + //result of random loop
  // return userFinalInput;
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
