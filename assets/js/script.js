let [computerScore, playerScore]=[0,0];
let resultScore = document.getElementById("score");
let choices = {
    'rock': {
        'rock': 'draw',
        'paper':'win',
        'scissor':'lose',
    },
        'paper': {
        'paper': 'draw',
        'scissor':'win',
        'rock':'lose',
    } ,
    'scissor': {
        'scissor': 'draw',
        'rock':'win',
        'paper':'lose',
    }

}
let intro = document.getElementById('intro')
    document.getElementById('play').addEventListener('click',function(){
    intro.classList.toggle('fade');
})

let match = document.getElementById('match')
    document.getElementById('play').addEventListener('click',function(){
    match.classList.toggle('fadeIn');
})