let computerChoice;
let playerScore = 0;
let computerScore = 0;
let tieRounds = 0;

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



function playRound(){
    playerSelection = prompt("Rock, Paper or Scissors?","").toLowerCase();
    computerChoice = computerPlay(); 

    if(playerSelection == "rock" && computerChoice == "scissors"){
        alert("Player wins!");
        console.log(computerChoice);
        console.log(playerSelection);
        playerScore += 1;
        return playerScore;
    } else if(playerSelection == "rock" && computerChoice == "rock"){
        alert("It's a tie!");
        console.log(computerChoice);
        console.log(playerSelection);
        tieRounds += 1;
        return tieRounds;
    }else if(playerSelection == "scissors" && computerChoice == "paper"){
        alert("Player wins!");
        console.log(computerChoice);
        console.log(playerSelection);
        playerScore += 1;
        return playerScore;
    }else if(playerSelection == "scissors" && computerChoice == "scissors"){
        alert("It's a tie!");
        console.log(computerChoice);
        console.log(playerSelection);
        tieRounds += 1;
        return tieRounds;
    }else if(playerSelection == "paper" && computerChoice == "rock"){
        alert("Player wins!");
        console.log(computerChoice);
        console.log(playerSelection);
        playerScore += 1;
        return playerScore;
    }else if(playerSelection == "paper" && computerChoice == "paper"){
        alert("It's a tie!");
        console.log(computerChoice);
        console.log(playerSelection);
        tieRounds += 1;
        return tieRounds;
    } else{
        alert("Computer wins!");
        console.log(computerChoice);
        console.log(playerSelection);
        computerScore +=1
        return computerScore;
    }
}


function playGame(){   
    for( let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore){
        alert("Player wins the game!");
    }else if( playerScore < computerScore){
        alert("Computer wins the game!")
    }else{
        alert("It's a tie!")
    }
}