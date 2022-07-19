let playerScore = 0;
let computerScore = 0;

const newline = '\n';

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
        checkWinner();
        return `Tie! ${correctCap(playerSelection)} is equal to ${correctCap(computerSelection)}. Player Score is ${playerScore} and Computer Score is ${computerScore}`; 
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper")
    {
        computerScore += 1;
        checkWinner();
        return `You Lose! ${correctCap(computerSelection)} beats ${correctCap(playerSelection)}! Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") 
    {
        computerScore += 1;
        checkWinner();
        return `You Lose! ${correctCap(computerSelection)} beats ${correctCap(playerSelection)}! Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock")
    {
        computerScore += 1;
        checkWinner();
        return `You Lose! ${correctCap(computerSelection)} beats ${correctCap(playerSelection)}! Player Score is ${playerScore} and Computer Score is ${computerScore}`;
        
    }
    else 
    {
        playerScore += 1;
        checkWinner();
        return `You win! ${correctCap(playerSelection)} beats ${correctCap(computerSelection)}! Player Score is ${playerScore} and Computer Score is ${computerScore}`;
    }
}

function checkWinner() {
    if (playerScore >= 5) 
    {
        alert("You Win!");
        playerScore = 0;
        computerScore = 0;
        score.textContent = "Player Score is 0 and Computer Score is 0";
        return;
    } else if (computerScore >= 5) {
        alert("What an L! You lost!");
        playerScore = 0;
        computerScore = 0;
        score.textContent = "Player Score is 0 and Computer Score is 0";
        return;
    }
}

function clicked(playerSelection) {
    let computerSelection = computerPlay(); 
    if (checkWinner()) {
        return;
    } else {
        score.textContent = playRound(playerSelection, computerSelection);
    }
}

// game();

const score = document.querySelector('.score');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


rock.addEventListener('click', () => clicked("rock"));
paper.addEventListener('click', () => clicked("paper"));
scissors.addEventListener('click', () => clicked("scissors"));

