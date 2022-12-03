function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    let computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice(){
    const playerChoice = prompt("Please enter your choice: rock/paper/scissors");
    return playerChoice.toLowerCase();
}

function playRound(playerSelection,computerSelection){
    alert("We'll be playing a game of rock/paper/scissors!")
    if (playerSelection=="rock" && computerSelection=="paper"){
        return alert("You lose!");
    }
    else if (playerSelection=="rock" && computerSelection=="scissors"){
        return alert("You win!");
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        return alert("You win!");
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        return alert("You lose!");
    } 
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        return alert("You lose!");
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        return alert("You win!");
    }   
    else {
        return alert("Tie!");
    }
}

playRound(getPlayerChoice,getComputerChoice);