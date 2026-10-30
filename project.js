console.log("Hello World");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
console.log(getComputerChoice());

const signButton = document.getElementById("signButton");

signButton.addEventListener("click", () => {
  const sign = prompt("choose between rock, paper or scissors");
  const humanChoice = getHumanChoice(sign);
  console.log(humanChoice);
  
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
