const messages = {
  introduction:
    "Welcome, brave coder! You've entered the realm of CodeNemesis, the mischievous AI seeking dominance through Rock, Paper, Scissors. Are you ready for an epic coding adventure?",
  victoryMessage:
    "Victory is yours! CodeNemesis has been vanquished, and the coding kingdom is saved!",
  defeatMessage:
    "Oh no! CodeNemesis prevails this game. Keep coding, and try again!",
  drawMessage: "You gave a tough fight. But the game ends here with a draw!",
};

let choices = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * 3);
  const computerChoice = choices[random];
  return computerChoice;
};
let scores = {
  playerScore: 0,
  computerScore: 0,
};
computerPlay();
alert(messages.introduction);
for (let i = 1; i <= 5; i++) {
  const playerSelection = prompt().toLowerCase();

  const gamePlay = (playerSelection, computerSelection) => {
    console.log(computerSelection);
    console.log(playerSelection);

    if (playerSelection === computerSelection) {
      scores.playerScore += 0;
      scores.computerScore += 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      scores.playerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      scores.computerScore += 1;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      scores.computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      scores.playerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      scores.computerScore += 1;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      scores.playerScore += 1;
    }
  };
  console.log(gamePlay(playerSelection, computerPlay()));
}
console.log(scores);
if (scores.playerScore > scores.computerScore) {
  alert(messages.victoryMessage);
} else if (scores.playerScore === scores.computerScore) {
  alert(messages.drawMessage);
} else if (scores.playerScore < scores.computerScore) {
  alert(messages.defeatMessage);
}
console.log(computerPlay());
