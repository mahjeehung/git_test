function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    if (i==2){
        return 'rock';
    }
    else if (i==1){
        return 'paper';
    }
    else {
        return 'scissors';
    }}

let computerChoice = function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    if (i==2){
        return 'rock';
    }
    else if (i==1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}();
(function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    if (i==2){
        return 'rock';
    }
    else if (i==1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
let computerChoice = i})();



// let computerChoice = getComputerChoice();
// function repeat(){
//     let results = [];
//     for (let r=0;r<100;r++)
//     {results += getComputerChoice()}
//     return results
// }
function getPlayerChoice(){
    let playerChoice = prompt('rock,paper or scissors?').toLowerCase();
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
        alert('what u doin');
        getPlayerChoice()
    } else {alert(`you chose ${playerChoice}`)
    return playerChoice}}

(function getPlayerChoice(){
let playerChoice = prompt('rock,paper or scissors?').toLowerCase();
if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
    alert('what u doin');
    getPlayerChoice()
} else {alert(`you chose ${playerChoice}`)
return playerChoice}})()

let totalWins = 0;
let totalLosses = 0;
function win(){
    ++totalWins;
    alert(`Congratulations! You have won \: \n \n \n  0 bitches\! \n \n \n \n \n \n Just kidding lol, you won ${totalWins} times~`)
}

function lose(){
    ++totalLosses;
    alert(`Aw, you lost to RNG mate. You chose ${playerChoice}, the com chose ${computerChoice}. Just to rub it in, you have lost ${totalLosses} times already`)
}

function tie(){
    alert(`It's a tie! Go again?`)
}

(function playRound(){
    if (playerChoice == 'rock'){
        if (computerChoice == 'rock'){tie()}
        else if (computerChoice == 'paper'){lose()}
        else if (computerChoice == 'scissors'){win()}
    }
    else if (playerChoice == 'paper'){
        if (computerChoice == 'paper'){tie()}
        else if (computerChoice == 'scissors'){lose()}
        else if (computerChoice == 'rock'){win()}
    }
    else if (playerChoice == 'scissors'){
        if (computerChoice == 'scissors'){tie()}
        else if (computerChoice == 'rock'){lose()}
        else if (computerChoice == 'paper'){win()}
    }
getComputerChoice();
getPlayerChoice();
playRound()})()

//asmr