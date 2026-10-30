console.log("Hello World");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const signButton = document.getElementById("signButton");

signButton.addEventListener("click", () => {
  const sign = prompt("choose between rock, paper or scissors");
  const humanChoice = getHumanChoice(sign);
  if (humanChoice === null) return;
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  console.log('you:' + humanChoice);
  console.log('computer:' + computerChoice);
  console.log(result);
  
})

function getHumanChoice(sign) {
    switch (sign) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            return null;
    }
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "scissors":
                    return "You win!";
                case "paper":
                    return "You lose!";
                case "rock":
                    return "It's a tie!";
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    return "You win!";
                case "scissors":
                    return "You lose!";
                case "paper":
                    return "It's a tie!";
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "paper":
                    return "You win!";
                case "rock":
                    return "You lose!";
                case "scissors":
                    return "It's a tie!";
            }
            break;
    }
}
