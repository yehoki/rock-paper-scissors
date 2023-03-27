let userScore = 0;
let computerScore = 0;

const computerScoreDisplay = document.querySelector('#computer-score');
computerScoreDisplay.textContent = computerScore;

const userScoreDisplay = document.querySelector('#user-score');
userScoreDisplay.textContent = userScore;


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice;
}

// Helper function
function convertInputToInt(choice) {
  choice = choice.toLowerCase();
  let intInput;
  switch (choice) {
    case "rock":
      intInput = 0;
      break;
    case "paper":
      intInput = 1;
      break;
    case "scissors":
      intInput = 2;
      break;
    default:
      return "Incorrect input";
  }
  return intInput;
}


// Decide the winner of each game, and check if game is finished
function decideWinner(resultStatement) {
  const decision = document.querySelector("#decision");
  if (!document.querySelector("#message")) {
    const statement = document.createElement("h2");
    statement.setAttribute("id", "message");
    statement.textContent = resultStatement;
    decision.appendChild(statement);
  } else {
    document.querySelector("#message").textContent = resultStatement;
  }
  if (resultStatement.includes("win")) {
    userScore++;
    document.querySelector('#user-score').textContent = userScore;
  } else if (resultStatement.includes("lose")) {
    computerScore++;
    document.querySelector('#computer-score').textContent = computerScore;
  }

  finishGame();
}

function convertIntToChoice(number) {
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}


// Checks if game is over to produce message
function finishGame(){
    if (userScore === 5){
        document.querySelector('#decision').textContent = `The game is finished, you win ${userScore} to ${computerScore}!`
    }
    else if( computerScore === 5){
        document.querySelector('#decision').textContent = `The game is finished, you lost ${userScore} to ${computerScore}!`
    }

}

// Decides the outcome of each game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Incorrect input") {
    return "Invalid input from player";
  }

  if (playerSelection === computerSelection) {
    decideWinner(
      `It's a draw! You both picked ${convertIntToChoice(computerSelection)}.`
    );
  } else if (playerSelection === 0 && computerSelection === 1) {
    decideWinner(`You lose! Paper beats rock!`);
  } else if (playerSelection === 0 && computerSelection === 2) {
    decideWinner(`You win! Rock beats scissors!`);
  } else if (playerSelection === 1 && computerSelection === 0) {
    decideWinner(`You win! Paper beats rock!`);
  } else if (playerSelection === 1 && computerSelection === 2) {
    decideWinner(`You lose! Scissors beat paper!`);
  } else if (playerSelection === 2 && computerSelection === 0) {
    decideWinner(`You lose! Rock beats scissors!`);
  } else if (playerSelection === 2 && computerSelection === 1) {
    decideWinner(`You win! Scissors beat paper!`);
  }


}

// Button event listeners
const btns = [...document.querySelectorAll(".option")];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(convertInputToInt(btn.id), getComputerChoice());
  });
});




/*
function game() {
    let games = 0;
    let userChoice;
    let computerScore = 0;
    let userScore = 0;
    let decision;
    while (games < 10) {
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
*/
