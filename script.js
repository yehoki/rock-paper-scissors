function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(choice) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Scissors';
            break;
        default:
            computerChoice = 'Paper';
            break;
    }
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    let choices = [playerSelection.toLowerCase(), computerSelection.toLowerCase()];

    if (choices[0] === choices[1]){
        return `It's a draw! You both picked ${computerSelection}.`
    } 
    else if (choices[0] === 'rock' && choices[1] === 'scissors'){
        return `You win! Rock beats paper!`
    }
    else if (choices[0] === 'rock' && choices[1] === 'paper') {
        return 'You lose! Paper beats rock!'
    }
    else if (choices[0] === 'paper' && choices[1] === 'scissors') {
        return `You lose! Scissors beat paper!`
    }
    else if (choices[0] === 'paper' && choices[1] === 'rock') {
        return `You win! Paper beats rock!`
    }
    else if (choices[0] === 'scissors' && choices[1] === 'paper') {
        return `You win! Scissors beat paper!`
    }
    else if (choices[0] === 'scissors' && choices[1] === 'rock') {
        return `You lose! Rock beats scissors!`
    }
}

function game() {
    let games = 0;
    let userChoice;
    let computerScore = 0;
    let userScore = 0;
    let decision;
    while (games < 5) {
        userChoice = prompt('Choose "rock", "paper" or "scissors".')
        decision = playRound(userChoice, getComputerChoice());
        if (decision.includes('win')){
            userScore++;
        }
        else if (decision.includes('lose')){
            computerScore++;
        }
        games++;
    }
    if (userScore > computerScore){
        console.log(`You win ${userScore} to ${computerScore}!`)
    }
    else {
        console.log(`You lost ${userScore} to ${computerScore}!`)
    }
}

game();