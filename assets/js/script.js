
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters variables 
// .split() converts a string into an array 
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()<>?./+=<>~`"; 
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numbers + specialChars + upperChars + lowerChars;
  var enterLength;
 
  
// Begins the function to generate password
function generatePassword() {
  var acceptedChars = "";
  var chooseNumbers;
  var chooseSpecialChars;
  var chooseLowerCase;
  var chooseSpecialChars;
  var finalPassword = "";
  
  
  //Asks the length of the password to the user
  enterLength = parseInt(prompt("How many characters would you like your password to contain? Please choose between 8 and 128"));
  // parseInt fucntion converts a string into a number
  //if statements for user validation
  if (isNaN(enterLength)) {
    alert("You must enter a number.")
    return;
  }
  if (enterLength < 8 || enterLength > 128) {
    enterLength = parseInt(prompt("You must choose between 8 and 128"));
  } else if (enterLength >= 8 || enterLength <= 128) {
    // confirm user choices
    chooseNumbers = confirm("Click OK if you would like to include numbers?");
  }
    if (chooseNumbers === true) {
      acceptedChars = acceptedChars + numbers;
    }
    chooseSpecialChars = confirm("Click OK if you would like to include special characters?");
    if (chooseSpecialChars === true) {
      acceptedChars = acceptedChars + specialChars;
    }
    chooseLowerCase = confirm("Click OK if you would like to include lower case letters?")
    if (chooseLowerCase === true) {
      acceptedChars = acceptedChars + lowerChars;
    }
    chooseUpperCase = confirm("Click OK if you would like to include upper case letters?")
    if (chooseUpperCase === true) {
      acceptedChars = acceptedChars + upperChars;
    }

    //If the user gives 4 negatives responses
    if (!chooseNumbers && !chooseSpecialChars && !chooseLowerCase && !chooseUpperCase) {
      alert("You must choose a criteria!");
      return;  
    }
     
 // The for loop will begin ramdon selection of variables
 for (var i = 0; i < enterLength; i++){
    finalPassword = finalPassword + acceptedChars[Math.floor(Math.random() * acceptedChars.length)];
    console.log(finalPassword)
  }
    return finalPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
