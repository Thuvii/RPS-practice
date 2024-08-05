
var userPoint = 0;
var cpuPoint = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max + 1)
}
function Rps(human, Cpu){
    if(human == Cpu){
    }else if((human == 1 && Cpu == 2) || (human == 2 && Cpu == 3) || (human == 3 && Cpu == 1)){
        cpuPoint++;
    }else if((human == 1 && Cpu == 3) || (human == 2 && Cpu == 1) || (human == 3 && Cpu == 2)){
        userPoint++;
    }

    document.querySelector("#playerP").innerText = `player point: ${userPoint}`;
    document.querySelector("#cpuP").innerText = `player point: ${cpuPoint}`;
}
function resultMessage(a,b){
    document.querySelector('#annouce').innerText = `Score: You ${a} - ${b} Cpu`;
    if(userPoint > cpuPoint){
        const newDiv = document.createElement('div');
        
    }else if(cpuPoint > userPoint){
        console.log('You LOSE');
    }else{  
        console.log('It a TIED');
    }
}
function playGame(playerInput){

    Rps(playerInput, getRandomInt(3));
    if(userPoint == 5 || cpuPoint == 5){
        resultMessage(userPoint,cpuPoint);
        buttonToggle(false);
    }
        
}
function resetGame() {
    userPoint = 0;
    cpuPoint = 0;
    document.getElementById('playerP').innerText = userPoint;
    document.getElementById('cpuP').innerText = cpuPoint;
    document.getElementById('annouce').innerText = "";
    buttonToggle(true);
}

function buttonToggle(show){
    const gameButton = document.querySelectorAll('#btn-container button');
    const playAgainButton = document.getElementById('resetGame');
    if(show){
        gameButton.forEach(button => button.style.display = 'block');
        playAgainButton.style.display = 'none';
    }else{
        gameButton.forEach(button => button.style.display = 'none');
        playAgainButton.style.display = 'block';
    }
}









