//Variables for the generation
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = [",","<",".",">","/","?",";",":","'","[","]","{","}","|","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=",];

//This function prompts the user for the length
//Parsing the number to make sure it returns as it's true integer and not independently.
var passwordLength = function() {
  pLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  pLength = parseInt(pLength);
//checks if the input value is to par with requirements
  if (!pLength || pLength < 8 || pLength > 128) {
    pLength = passwordLength();
  }
  return pLength;
}

function generatePassword() {
  
  pLength = passwordLength();
  
  do {
    lowerCase = confirm("Password Criteria : Lower Case?");
    upperCase = confirm("Password Criteria : Upper Case?");
    special = confirm("Password Criteria : Need Special Characters?");
    numbers = confirm("Password Criteria : numbers?");
  } while (!(special,numbers,lowerCase,upperCase));

  
  password = "";


// return password;
}

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
