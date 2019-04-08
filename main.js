const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
      match.classList.remove('fadeOut');
    });
  }

  // play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });
    // computer options
    const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach(option => {
      option.addEventListener('click', function () {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // 2 seconds before starting the animation
        setTimeout(() => {
          // call compare hands function
          compareHands(this.textContent, computerChoice);
          // update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // animate the images (hands)
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

        // select the default rock image first
        playerHand.src = './assets/rock.png';
        computerHand.src = './assets/rock.png';
      });
    });
  }

  // update Score
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }
  // winner / loser
  const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector('.winner');
    // checking for a draw
    if (playerChoice === computerChoice) {
      winner.textContent = 'it is a Draw';
      return;
    }
    // check for rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'You Wins';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      }
    }

    // check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Wins';
        pScore++;
        updateScore();
        return;
      }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Wins';
        pScore++;
        updateScore();
        return;
      }
    }
  }

  // call the inner functions
  startGame();
  playMatch();
}

// start the main function
game();