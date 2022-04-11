//Variables for the generation
var confirmLc;
var confirmUc;
var confirmS;
var confirmN;
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
    confirmLc = confirm("Password Criteria 1/4 : Lower Case?");
    confirmUc = confirm("Password Criteria 2/4 : Upper Case?");
    confirmS = confirm("Password Criteria 3/4 : Special Characters?");
    confirmN = confirm("Password Criteria 4/4 : Numbers?");
  //For some reason wording is important instead of !() it has to be === false or certain sequences make it loop
  } while (confirmLc === false && confirmUc === false && confirmN === false && confirmS === false);

//Pulls the true data and puts it in the concat array.
   var insert = []

  if (confirmLc === true) {
      insert = insert.concat(lowerCase);
  }
  if (confirmUc === true) {
      insert = insert.concat(upperCase);
  }
  if (confirmS === true) {
    insert = insert.concat(special);
  }
  if (confirmN === true) {
    insert = insert.concat(numbers);
  }
  
  console.log(insert);
  
  password = "";
//Randomizes the concat array for the length of password
  for (let i = 0; i < pLength; i++) {
   password = password + insert[Math.floor(Math.random() * insert.length)];
  }
   return password;
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
