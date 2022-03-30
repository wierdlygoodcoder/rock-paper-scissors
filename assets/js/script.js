let playerScore = 0;
let computerScore = 0;
let userscore_div = document.getElementById("playerscore");
let computerScore_div = document.getElementById("computerscore");
let scoreBoard_div = document.querySelector(".scoreboard");
let result_div = document.querySelector(".result");
let paper_div = document.getElementById("paper");
let rock_div = document.getElementById("rock");
let scissors_div = document.getElementById("scissors");

function computerChoice(){
    let choices =['paper','rock','scissors'];
    let randomnum = Math.floor(Math.random()*3);
    return choices [randomnum];
}

function win(){
    playerScore++;
    userscore_div .innerHTML = playerScore;
    computerScore_div .innerHTML = computerScore
}

function draw(){
    console.log("Draw")
}

function lose(){
    console.log("lose")
}


function game(userChoice){
    let compChosse =computerChoice();
    switch (userChoice + compChosse){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win()
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose()
         break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw()
    }
}

function main(){
rock_div.addEventListener('click', function(){
    game("rock")
  
})

paper_div.addEventListener('click', function(){
    game("paper")
   
})

scissors_div.addEventListener('click', function(){
    game("scissors")
    
})
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