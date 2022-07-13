let playerScore = 0;
let computerScore = 0;

function computerPlay() 
{
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)]; 
}

function correctCap(text) 
{
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) 
    {
        return `Tie! ${correctCap(playerSelection)} is equal to ${correctCap(computerSelection)}` && `Player Score is ${playerScore} and Computer Score is ${computerScore}`; 
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper")
    {
        computerScore += 1;
        return `You Lose! ${correctCap(computerSelection)} beats ${correctCap(playerSelection)}!` && `Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") 
    {
        computerScore += 1;
        return `You Lose! ${correctCap(computerSelection)} beats ${correctCap(playerSelection)}!` && `Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock")
    {
        computerScore += 1;
        return `You Lose! ${correctCap(computerSelection)} beats ${correctCap(playerSelection)}!` && `Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
    else 
    {
        playerScore += 1;
        return `You win! ${correctCap(playerSelection)} beats ${correctCap(computerSelection)}!` && `Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
}

function game() 
{
    if (playerScore == 5 || computerScore == 5)
    {
        if (computerScore == playerScore) 
        {
            console.log("You tied with the computer");
        }
        else if (computerScore > playerScore) 
        {
            console.log("You lost to the computer");
        }
        else 
        {
            console.log("You beat the computer");
        }
    }
    else 
    {
        let playerSelection = prompt("Rock, paper, scissors: ");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        game();
    }
}

game();