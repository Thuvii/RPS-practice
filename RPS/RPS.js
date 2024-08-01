
var userPoint = 0;
var cpuPoint = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max + 1)
}
function Rps(human, Cpu){
    if(human == Cpu){
        console.log("it a tied");
        userPoint++;
        cpuPoint++;
    }else if((human == 1 && Cpu == 2) || (human == 2 && Cpu == 3) || (human == 3 && Cpu == 1)){
        console.log('You lose, Cpu Win');
        cpuPoint++;
    }else if((human == 1 && Cpu == 3) || (human == 2 && Cpu == 1) || (human == 3 && Cpu == 2)){
        console.log('You win, Cpu lose');
        userPoint++;
    }
}
function welcomeMessage(){
    console.clear();
    console.log('Welcome to Rock Paper Scissor game');
    console.log('Press 1 to choose \'Rock\'');
    console.log('Press 2 to choose \'Paper\'');
    console.log('Press 3 to choose \'Scissor\'');
    console.log('-------------------------------');
    console.log('Or press 0 to Exit');
}

function resultMessage(a,b){
    console.log(`Score: You ${a} - ${b} Cpu`);
}

var values = [1,2,3];
function getUserInput(n,text){
    while(true){
        var user = parseInt(prompt(text));
        if(!n.includes(user)){
            console.log("Not a valid input, try again!")
        }else{
            break;
        }
    }
    return user
}

function roundCount(){
    while(true){
        var round = parseInt(prompt("How many round you want to play? Enter a number: "));
        if(round <= 0 || isNaN(round)){
            console.log("Not a valid input, try again!")
        }else{
            break;
        }
    }
    return round
}



function playGame(){
    var userInputValue = [1,2];
    var userInput = roundCount();
    welcomeMessage();
    for(var i = 1; i <= userInput; i++){
        Rps(getUserInput(values,"enter your choice: "), getRandomInt(3));
        if( i == userInput){
            var ques = getUserInput(userInputValue,"Play again?(1 for yes, 2 for no): ");
            if(ques == 1){
                resultMessage(userPoint,cpuPoint);
                i = 0;
                userInput = roundCount();
                userPoint = 0;
                cpuPoint = 0;
            }else if(ques == 2){
                break;
            }
        }
    }
    if(userPoint > cpuPoint){
        resultMessage(userPoint,cpuPoint);
        console.log('You WIN');
    }else if(cpuPoint > userPoint){
        resultMessage(userPoint,cpuPoint);
        console.log('You LOSE');
    }else{
        resultMessage(userPoint,cpuPoint);
        console.log('It a TIED');
    }
}


playGame();






