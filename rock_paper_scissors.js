const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restart = document.getElementById("restart");

const results = document.getElementById("results");
const userResults = document.getElementById("userScoreDisplay");
const computerResults = document.getElementById("computerScoreDisplay");

// Generate computer's rock, paper, or scissors choice
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// play round - player vs. computer
let computerScore = 0;
let userScore = 0;
function playRound(playerSelection, computerSelection) {
  if (computerScore < 5 && userScore < 5) {
    //return "It's a tie!";
    if (playerSelection === computerSelection) {
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
        <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
        <h4>It's a tie!<h4>
        `;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      userScore++;
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
      <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
      <h4>You won!<h4>
      `;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      userScore++;
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
      <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
      <h4>You won!<h4>
      `;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      userScore++;
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
      <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
      <h4>You won!<h4>
      `;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      computerScore++;
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
      <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
      <h4>The computer won!<h4>
      `;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore++;
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
      <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
      <h4>The computer won!<h4>
      `;
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      computerScore++;
      userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
      computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
      results.innerHTML = `
      <h3>Computer chose ${computerSelection} and user chose ${playerSelection}</h3>
      <h4>The computer won!<h4>
      `;
    } else {
      alert("Please enter a valid input!");
    }
  } else if (userScore >= 5) {
    userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
    computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
    results.innerHTML = `
      <h3> The user won with a score of ${userScore} vs. the computer score of ${computerScore}!
      `;
  } else if (computerScore >= 5) {
    userResults.innerHTML = `<h2>User Score: ${userScore}<h2>`;
    computerResults.innerHTML = `<h2>Computer Score: ${computerScore}<h2>`;
    results.innerHTML = `
      <h3> The computer won with a score of ${computerScore} vs. the user score of ${userScore}!
      `;
  }
}

// enable the player to select rock
rock.addEventListener("click", (e) => {
  const playerChoice = e.target.value;
  console.log(playRound(playerChoice, computerPlay()));
});

// enable the player to select paper
paper.addEventListener("click", (e) => {
  const playerChoice = e.target.value;
  console.log(playRound(playerChoice, computerPlay()));
});

// enable the player to select scissors
scissors.addEventListener("click", (e) => {
  const playerChoice = e.target.value;
  console.log(playRound(playerChoice, computerPlay()));
});

// restart the game
restart.addEventListener("click", function () {
  location.reload();
});

// play five rounds of the game.

/*function game (){
            
    let computerSelection = computerPlay();
    let input = prompt("Input rock, paper, or scissors1");
     // Take the player input, make sure it's lowercase
    let playerSelection = input.toLowerCase();
    
    // Round 1
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = computerPlay();

    // Round 2
    input = prompt("Input rock, paper, or scissors2");
    playerSelection = input.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = computerPlay();  

    // Round 3
    input = prompt("Input rock, paper, or scissors3");
    playerSelection = input.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = computerPlay();
    
    // Round 4
    input = prompt("Input rock, paper, or scissors4");
    playerSelection = input.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = computerPlay();
    
    // Round 5
    input = prompt("Input rock, paper, or scissors5");
    playerSelection = input.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = computerPlay();

    }

    game();*/
