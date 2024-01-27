let computerChoice;
let playerChoice;

function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    if (i==2){
        i = 'rock';
    }
    else if (i==1){
        i = 'paper'; 
    }
    else {
        i = 'scissors';
    }
    computerChoice = i
};

function getPlayerChoice(){
    s = prompt('rock,paper or scissors?').toLowerCase();
    if (s != 'rock' && s != 'paper' && s != 'scissors'){
        alert('what u doin');
        getPlayerChoice()
    } else {alert(`you chose ${s}`)
    playerChoice = s;
    return playerChoice}}

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

function playRound(){
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
playRound()};

playRound();