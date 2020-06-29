let userScore=0;
let computerScore=0;
let round=0;
let i;







function playRound(){
    let userChosen    =
    userPlay();
    let computerChosen =
    computerPlay();    
    
console.log(r(computerChosen, userChosen));
}


function checkScore(){
    switch (result) {
case 'You won!':
    userScore++;
    round++;   
break;

case 'Computer won!':
    computerScore++;
    round++;   
break;

case 'It\'s a Tie!':
    round++; 
break;
}

console.log("Round " + round); 
console.log("User score " + userScore); 
console.log("Computer " + computerScore);
}


function finalScore() {
if (userScore == computerScore){
    console.log("Final result: It's a draw!");
}
else if (computerScore > userScore) {
    console.log("Final result: Computer wins! Muhahaha!");
}
else if (userScore > computerScore){
    console.log("Final result: You win! Well done!");
}
}


function game() {
playRound ();
checkScore();
}

for (i=0; i<5; i++) {    
game();
}

finalScore();

