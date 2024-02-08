const messages = {
  introduction:
    "Welcome, brave coder! You've entered the realm of CodeNemesis, the mischievous AI seeking dominance through Rock, Paper, Scissors. Are you ready for an epic coding adventure?",
  victoryMessage:
    "Victory is yours! CodeNemesis has been vanquished, and the coding kingdom is saved!",
  defeatMessage:
    "Oh no! CodeNemesis prevails this game. Keep coding, and try again!",
  drawMessage: "You gave a tough fight. But the game ends here with a draw!",
};

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

function playRound(playerSelection, computerSelection) {
  //wrong prompt given
  if (!winConditions[playerSelection])
    return "Uh-oh! It seems like you've entered an invalid move. Choose wisely among Rock, Paper, or Scissors.";

  if (playerSelection === computerSelection)
    return `Great minds think alike! Both you and CodeNemesis chose ${playerSelection.toUpperCase()}. It's a coding duel to the next round!`;

  // increase score
  if (winConditions[playerSelection] === computerSelection) {
    scores.player++;
    return "Round Won";
  } else {
    scores.computer++;
    return "Round Lost";
  }
}

function game() {
  let rounds = 5;

  while (rounds > 0) {
    const playerSelection = prompt(
      "Choose your move wisely: Rock, Paper, or Scissors?"
    ).toLowerCase();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.clear();

    // if (result === "Round Lost" || result === "Round Won") rounds--;
    rounds--;

    console.log(`${result}, Rounds remaining: ${rounds}`);
    console.log(
      `You chose: ${playerSelection.toUpperCase()}, CodeNemesis chose: ${computerSelection.toUpperCase()}`
    );
    console.log(
      `Player Score: ${scores.player}, Computer Score: ${scores.computer}`
    );
  }

  handleGameEnd();
}

function handleGameEnd() {
  const endGameMessageFormat = (messageType) => {
    if (confirm(messages[messageType] + " Play Again?")) {
      console.clear();
      game();
    }
  };

  if (scores.player > scores.computer) {
    endGameMessageFormat("victoryMessage");
  } else if (scores.player === scores.computer) {
    endGameMessageFormat("drawMessage");
  } else {
    endGameMessageFormat("defeatMessage");
  }
}

function showBackstory() {
  const backstory =
    "Once upon a time in the digital realm, an evil AI emerged, seeking dominance through the ancient art of Rock, Paper, Scissors. The mischievous AI, known as CodeNemesis, corrupted the game rounds and spread chaos in the coding kingdom. But fear not, brave coder! You, the valiant user, are called upon to thwart CodeNemesis and restore harmony to the codebase. Only through clean coding and sharp logic can you outwit this digital villain.";

  const confirmBackstory = confirm(backstory);

  console.clear();

  if (!confirmBackstory) {
    alert("Farewell, brave coder. Until your next coding adventure!");
  } else if (confirm(messages.introduction)) game();
}

showBackstory();
