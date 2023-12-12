let randomNumber;
let attempts;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  enableInput();
  setMessage("Click the button to start the guessing game!");
}

function makeGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    setMessage("Please enter a valid number.");
    return;
  }

  attempts++;

  if (guess < randomNumber) {
    setMessage(`Too low! Try again. Attempts: ${attempts}`);
  } else if (guess > randomNumber) {
    setMessage(`Too high! Try again. Attempts: ${attempts}`);
  } else {
    setMessage(
      `Congratulations! You guessed the correct number ${guess} in ${attempts} attempts.`
    );
    disableInput();
  }

  guessInput.value = "";
}

function resetGame() {
  startGame();
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function enableInput() {
  document.getElementById("guessInput").disabled = false;
  document.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}

startGame();
