const introduction =
  "Welcome, brave coder! You've entered the realm of CodeNemesis, the mischievous AI seeking dominance through Rock, Paper, Scissors. Are you ready for an epic coding adventure?";
const victoryMessage =
  "Victory is yours! CodeNemesis has been vanquished, and the coding kingdom is saved!";
const defeatMessage =
  "Oh no! CodeNemesis prevails this game. Keep coding, and try again!";

const choices = ["rock", "paper", "scissors"];
const winConditions = {
  // playerSelection:computerSelection
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

const scores = {
  player: 0,
  computer: 0,
};

function computerPlay() {
  const random = Math.floor(Math.random() * choices.length);

  return choices[random];
}