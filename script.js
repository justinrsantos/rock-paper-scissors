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
    alert("Computer chose: " + computerSelection + "!");
    if (playerSelection=="rock" && computerSelection=="paper"){
        alert("You lose! Paper beats Rock!");
        return "lose";
    }
    else if (playerSelection=="rock" && computerSelection=="scissors"){
        alert("You win! Rock beats Scissors!");
        return "win";
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        alert("You win! Paper beats Rock!");
        return "win";
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        alert("You lose! Scissors beats Paper!");
        return "lose";
    } 
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        alert("You lose! Rock beats Scissors!");
        return "lose";
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        alert("You win! Scissors beats Paper!");
        return "win";
    }   
    else {
        alert("Tie! Both of you picked " + computerSelection + "!");
        return "tie";
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        result = playRound(getPlayerChoice(),getComputerChoice());
        if (result == "win"){
            playerScore++;
        }
        else if (result=="lose"){
            computerScore++;
        }
        else{
            i--;
        }
        alert("Player score: " + playerScore + ". Computer score: " + computerScore);
        if (playerScore == 3){
            alert ("You win the best of 5!");
            break;
        }
        else if (computerScore == 3){
            alert ("The computer wins the best of 5!");
            break;
        }
        
    }
}

alert("We'll be playing a game of rock/paper/scissors!")

playGame();
