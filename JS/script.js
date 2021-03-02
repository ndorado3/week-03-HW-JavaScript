
//This code works. displays the message
    // function windowAlerts() {
    //   confirm("How many characters would you like your password to contain?")}


function windowAlerts() {
  var integer;
  var answer = prompt("How many characters would you like your password to contain?");
  if (answer == null || integer == "") {
    integer = "ok";
  } 

document.querySelector("#generate").innerHTML = integer;
 }





// Assignment Code
   // var generateBtn = document.querySelector("#generate");


// Write password to the #password input
    // function writePassword() {
    //   var password = generatePassword();
    //   var passwordText = document.querySelector("#password");

   //   passwordText.value = password;

    // }

// Add event listener to generate button
       // generateBtn.addEventListener("click", writePassword);

