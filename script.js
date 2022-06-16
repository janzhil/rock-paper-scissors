let computerChoice;
let playerScore = 0;
let computerScore = 0;
let tieRounds = 0;

/* generates a random number between 1-3, then compares it to get a computers choice */

function computerPlay(){
    const randomNumber = Math.floor(Math.random()* 3) + 1;
    if(randomNumber == 1){
        return computerChoice = "rock";
    } else if(randomNumber == 2){
        return computerChoice = "paper";
    }else{
        return computerChoice = "scissors";
    }
    
}

/* asks user for input and compares its choice with computer generated choice to declare a winner of the round, adds points to score counters for playGame function  */

function playRound(){

    
    playerSelection = prompt("Rock, Paper or Scissors?","").toLowerCase();
    computerChoice = computerPlay(); 

    if(playerSelection == "rock" && computerChoice == "scissors"){
        alert("Player wins!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        playerScore += 1;
        return playerScore;
    } else if(playerSelection == "rock" && computerChoice == "rock"){
        alert("It's a tie!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        tieRounds += 1;
        return tieRounds;
    }else if(playerSelection == "scissors" && computerChoice == "paper"){
        alert("Player wins!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        playerScore += 1;
        return playerScore;
    }else if(playerSelection == "scissors" && computerChoice == "scissors"){
        alert("It's a tie!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        tieRounds += 1;
        return tieRounds;
    }else if(playerSelection == "paper" && computerChoice == "rock"){
        alert("Player wins!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        playerScore += 1;
        return playerScore;
    }else if(playerSelection == "paper" && computerChoice == "paper"){
        alert("It's a tie!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        tieRounds += 1;
        return tieRounds;
    } else{
        alert("Computer wins!");
        console.log("Computer choice: " + computerChoice + ", Player choice: " + playerSelection);
        computerScore +=1
        return computerScore;
    }
}

/* loops the game 5 times and compares the scores to declare a winner of the game and resets scores*/
function playGame(){   
    for( let i = 0; i < 5; i++) {
        playRound();
        console.log("Player score : " + playerScore, ", Computer score: " + computerScore, ", Ties: " + tieRounds);
    }
    if (playerScore > computerScore){
        alert("Player wins the game!");
        playerScore = 0;
        computerScore = 0;
        tieRounds = 0;
    }else if( playerScore < computerScore){
        alert("Computer wins the game!");
        playerScore = 0;
        computerScore = 0;
        tieRounds = 0;
    }else{
        alert("It's a tie!");
        playerScore = 0;
        computerScore = 0;
        tieRounds = 0;
    }
}