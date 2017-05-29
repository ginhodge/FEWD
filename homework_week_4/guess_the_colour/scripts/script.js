alert("Guess the Colour");

var age = parseInt(prompt("But first, how old are you?"));

// if (age > 18) {
//   var result = confirm("Great, let's play.");
// }

while (age < 18) {
  alert("Sorry you're young to play");
  var age = parseInt(prompt("How old are you?"));
}

var colour = prompt("Guess the colour");

while (colour != "red") {
  var result = alert("try again")
  var colour = prompt("Guess the colour");
}

alert("You're a winner!");
