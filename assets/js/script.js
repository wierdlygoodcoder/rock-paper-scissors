let playerScore = 0;
let computerScore = 0;
let userscoreDiv = document.getElementById("playerscore");
let computerScoreDiv = document.getElementById("computerscore");
let scoreBoardDiv = document.querySelector(".scoreboard");
let resultP = document.querySelector(".results > p");
let paperSpan = document.getElementById("paper");
let rockSpan = document.getElementById("rock");
let scissorsSpan = document.getElementById("scissors");
let playerHand = document.getElementById('player-hand');
let computerHand = document.getElementById('computer-hand');
let gameOver = 5;


function computerChoice(){
    let choices =['paper','rock','scissors'];
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}

function changeImage(imgName, target) {
    target.src = `assets/images/${imgName}.png`;  
}

function convertToCapitals(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
}


function win(userChoice,compChosse) {
    playerScore++;
    userscoreDiv .innerHTML = playerScore;
    computerScoreDiv .innerHTML = computerScore;
    resultP.innerHTML = `${convertToCapitals(userChoice)} Smashes ${convertToCapitals(compChosse)}. WINNER!!!`;
}

function draw(userChoice,compChosse){
    resultP.innerHTML = `${convertToCapitals(userChoice)} equals ${convertToCapitals(compChosse)}. YOU DRAW`;
}

function lose(userChoice,compChosse){
    computerScore++;
    computerScoreDiv.innerHTML = computerScore;
    resultP.innerHTML =`${convertToCapitals(userChoice)} obliterates ${convertToCapitals(compChosse)}. LOSER :(`;
}


function game(userChoice){
    let compChosse = computerChoice();
    changeImage(userChoice, playerHand);
    changeImage(compChosse, computerHand);
    switch (userChoice + compChosse){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChosse);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChosse);
         break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw(userChoice, compChosse);
    }
}

function main(){
    rockSpan.addEventListener('click', function(){
        game("rock");
    });

    paperSpan.addEventListener('click', function(){
        game("paper");
    });

    scissorsSpan.addEventListener('click', function(){
        game("scissors");
    });
}

main();

let intro = document.getElementById('intro');
document.getElementById('play').addEventListener('click',function(){
    intro.classList.toggle('fade');
});

let match = document.getElementById('match');
document.getElementById('play').addEventListener('click',function(){
    match.classList.toggle('fadeIn');
});