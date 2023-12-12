let score = 0;
let upgrades = 1;
let upgradePrice = 0;

function earnScore() {
  score += upgrade(0);
  console.log(score);
  updateScore();
}

function upgrade(x) {
  if (x === 1) {
    upgrades++;
    return upgrades;
  } else {
    return upgrades;
  }
}

function upgradePriceCalc() {
  return (1 + upgradePrice) * 5 * 10;
}

function attemptUpgrade() {
  if (score >= upgradePriceCalc()) {
    upgrade(1);
    score -= upgradePriceCalc();
    updateScore();
    upgradePrice++;
    updatePrice();
    updateUpgrade();
  } else {
    alert("Invalid funds");
  }
}

function updateScore() {
  const scoreDisplay = document.getElementById("scoreDisplay");
  if (scoreDisplay) {
    scoreDisplay.textContent = "Score: " + score;
  } else {
    console.error("Score display not found.");
  }
}

function updatePrice() {
  const priceDisplay = document.getElementById("upgrade");
  if (priceDisplay) {
    priceDisplay.textContent = "Upgrade Price: " + upgradePriceCalc();
  } else {
    console.error("Price display not found.");
  }
}

function updateUpgrade() {
  const priceDisplay = document.getElementById("upgradeLevel");
  if (priceDisplay) {
    priceDisplay.textContent = "Upgrades: " + (upgrade(0) - 1);
  } else {
    console.error("Upgrade display not found.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updatePrice();
});

// I know all of this coulda been so much cleaner but it used to store like the score
// and it was very buggy so i had to remove the way it stored and now its longer than it has to be
