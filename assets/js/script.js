let playerScore = 0;
let computerScore = 0;
let userscore_div = document.getElementById("playerscore");
let computerScore_div = document.getElementById("computerscore");
let scoreBoard_div = document.querySelector(".scoreboard");
let result_p = document.querySelector(".results > p");
let paper_div = document.getElementById("paper");
let rock_div = document.getElementById("rock");
let scissors_div = document.getElementById("scissors");

function computerChoice(){
    let choices =['paper','rock','scissors'];
    let randomnum = Math.floor(Math.random()*choices.length);
    document.getElementById()
    return choices[randomnum];
}

function convertToCapitals(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
}


function win(userChoice,compChosse) {
    playerScore++;
    userscore_div .innerHTML = playerScore;
    computerScore_div .innerHTML = computerScore;
    result_p.innerHTML = `${convertToCapitals(userChoice)} Smashes ${convertToCapitals(compChosse)}. WINNER!!!`;
}

function draw(userChoice,compChosse){
    result_p.innerHTML = `${convertToCapitals(userChoice)} equals ${convertToCapitals(compChosse)}. YOU DRAW`
}

function lose(userChoice,compChosse){
    computerScore++;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML =`${convertToCapitals(userChoice)} obliterates ${convertToCapitals(compChosse)}. LOSER :(`
}


function game(userChoice){
    let compChosse = computerChoice();
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
rock_div.addEventListener('click', function(){
    game("rock");
  
});

paper_div.addEventListener('click', function(){
    game("paper");
   
});

scissors_div.addEventListener('click', function(){
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

function changeImage() {
    let image = document.getElementById('player-hand');
    if(image.src.match("paper")){
        image.src = "rock.png";
    }else{
        image.src = "assets/images/paper.png"
    
    }
    
}