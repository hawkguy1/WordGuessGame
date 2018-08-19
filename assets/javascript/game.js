// ----- WORD BANK ----- //
var wordBank= ["Scorpion", "Cactus", "Dust", "Haboob", "Heat", "Canal", "Coyote", "Lizard", "Canyon", "Javelina", "Dry", "Sonora", "Sahara", "Mojave", "Kalahari"];
// ----- CHOOSE RANDOM WORD ----- //
var randomWord= Math.floor(Math.random () * wordBank.length);
var chosenWord= wordBank[randomWord];
// ----- CONVERT RANDOM WORD TO "_ " ----- //
var myLength= chosenWord.length;
var display= [myLength];
var output= "";

var setup = function () {
  for (var i= 0; i< chosenWord.length; i++) {
    display[i] = "_ ";
    output = output + display[i];
  }
  document.getElementById("word").innerHTML = output;
  output = "";

}
window.onload = function() {
  setup();
}
// ----- USER KEYSTROKES ----- //
document.onkeyup = function(event) {
  var userguess = event.key;
  if (chosenWord[i] === event.key) {
    event.key[i]
  }
}
  

}

// ----- ATTEMPTS ----- //

// ----- REPLACE UNDERSCORES ----- //

// ----- ADD TO USED LETTER BANK ----- //



