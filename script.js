
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


let computerChoice;

function playRound(){
    playerSelection = prompt("").toLowerCase();
    computerChoice = computerPlay(); 
    if(playerSelection == "rock" && computerChoice == "scissors"){
        alert("Player wins this round!");
        console.log(computerChoice);
        console.log(playerSelection);
    } else if(playerSelection == "rock" && computerChoice == "rock"){
        alert("It's a tie!");
        console.log(computerChoice);
        console.log(playerSelection);
    }else if(playerSelection == "scissors" && computerChoice == "paper"){
        alert("Player wins this round!");
        console.log(computerChoice);
        console.log(playerSelection);
    }else if(playerSelection == "scissors" && computerChoice == "scissors"){
        alert("It's a tie!");
        console.log(computerChoice);
        console.log(playerSelection);
    }else if(playerSelection == "paper" && computerChoice == "rock"){
    alert("Player wins this round!");
    console.log(computerChoice);
    console.log(playerSelection);
    }else if(playerSelection == "paper" && computerChoice == "paper"){
    alert("It's a tie!");
    console.log(computerChoice);
    console.log(playerSelection);
    } else{
    alert("Computer wins this round!");
    console.log(computerChoice);
    console.log(playerSelection);
    }
}
