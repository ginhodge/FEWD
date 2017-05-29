// Gerry I am aware it is not working but I have no clue


var user = (prompt("Choose either rock, paper or scissors"));

var computer = ["rock" , "paper" , "scissors"];

var randomvalue = computer[Math.floor(Math.random() * computer.length)];

if ((user = "rock") && (randomvalue = "scissors")) {
  alert("You Win");
}

else if ((user = "paper") && (randomvalue = "rock")) {
  alert("You Win");

}
else if ((user = "scissors") && (randomvalue = "paper")) {
  alert("You Win");

}

else (alert("you lose"));


// else if ((user = "scissors") && (randomvalue = "rock")) {
//   alert("You lose");
// }

// else if ((user = "rock") && (randomvalue = "paper")) {
//   alert("You lose");

// }
// else if ((user = "paper") && (randomvalue = "scissors")) {
//   alert("You lose");
// }

// else if ((user === result)) {
//   alert("It's a Draw");
// }




