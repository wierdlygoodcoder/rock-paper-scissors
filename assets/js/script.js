let playerScore = 0;
let computerScore = 0;
let userscoreDiv = document.getElementById("playerscore");
let computerScoreDiv = document.getElementById("computerscore");
let resultP = document.querySelector(".results > p");
let paperSpan = document.getElementById("paper");
let rockSpan = document.getElementById("rock");
let scissorsSpan = document.getElementById("scissors");
let lizardSpan = document.getElementById("lizard");
let spockSpan = document.getElementById("spock");
let playerHand = document.getElementById('player-hand');
let computerHand = document.getElementById('computer-hand');
let gameOver = 5;
let modalBtn = document.querySelector(".rules-btn");
let modalBg = document.querySelector(".rules-bg");
let modalClose = document.querySelector(".close");

function computerChoice() {
    let choices = ['paper', 'rock', 'scissors', 'lizard', 'spock'];
    let randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function changeImage(imgName, target) {
    target.src = `assets/images/${imgName}.png`;
}

function convertToCapitals(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "lizard") return "Lizard";
    if (word === "spock") return "Spock";
    return "Scissors";
}


function win(userChoice, compChosse) {
    playerScore++;
    userscoreDiv.innerHTML = playerScore;
    computerScoreDiv.innerHTML = computerScore;
    resultP.innerHTML = `${convertToCapitals(userChoice)} Smashes ${convertToCapitals(compChosse)}. WINNER!!!`;
    if (playerScore === gameOver) {
        gameOverFunction('player');
    }
}

function draw(userChoice, compChosse) {
    resultP.innerHTML = `${convertToCapitals(userChoice)} equals ${convertToCapitals(compChosse)}. YOU DRAW`;
}

function lose(userChoice, compChosse) {
    computerScore++;
    computerScoreDiv.innerHTML = computerScore;
    resultP.innerHTML = `${convertToCapitals(userChoice)} loses to ${convertToCapitals(compChosse)}. LOSER :(`;
    if (computerScore === gameOver) {
        gameOverFunction('computer');
    }
}

function gameOverFunction(winner) {
    alert(`Well done. ${winner}! Click OK/Close to restart the game.`);
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function game(userChoice) {
    let compChosse = computerChoice();
    changeImage(userChoice, playerHand);
    changeImage(compChosse, computerHand);
    switch (userChoice + compChosse) {
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockscissors":
        case "spockrock":
            win(userChoice, compChosse);
            break;
        case "rockpaper":
        case "rockspock":
        case "paperscissors":
        case "paperlizard":
        case "scissorsrock":
        case "scissorsspock":
        case "lizardscissors":
        case "lizardrock":
        case "spockpaper":
        case "spocklizard":
            lose(userChoice, compChosse);
            break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, compChosse);
    }
}

function main() {
    rockSpan.addEventListener('click', function () {
        game("rock");
    });

    paperSpan.addEventListener('click', function () {
        game("paper");
    });

    scissorsSpan.addEventListener('click', function () {
        game("scissors");
    });

    spockSpan.addEventListener('click', function () {
        game("spock");
    });

    lizardSpan.addEventListener('click', function () {
        game("lizard");
    });
}

main();


let intro = document.getElementById('intro');
document.getElementById('play').addEventListener('click', function () {
    intro.classList.toggle('fade');
});

let match = document.getElementById('match');
document.getElementById('play').addEventListener('click', function () {
    match.classList.toggle('fadeIn');
});

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
});