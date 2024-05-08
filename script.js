
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0)
        return ("rock");
    else if(num == 1)
        return ("paper");
    else
        return ("scissors");

}

function getHumanChoice(){
    let hmnchoice = prompt("please input your choice(rock,paper or scissors): ");
    return hmnchoice;
}

let humanScore = 0, compuerScore = 0, equal = 0;

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();

   if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("you win");
        humanScore++;
   }
   else if(humanChoice == "rock" && computerChoice == "paper"){
    console.log("you lose, paper beats rocks");
        compuerScore++;
   }
   else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("you lose, rock beats scissors");
        compuerScore++;
   }
   else if(humanChoice == "scissors" && computerChoice == "paper"){
    console.log("you win");
    humanScore++;

}
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("you win");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("you lose, scissors beats paper");
        compuerScore++;
   }
    
   else{
    console.log("same input as computer");
    equal++;
   }
    




}



function playGame(){
    for (i = 0; i <5;i++){
    const computerSelection =  getComputerChoice();
    const humanselection = getHumanChoice();

    playRound(humanselection,computerSelection);
    }
    console.log("Final result after playing 5 rounds: ")
    console.log("you won " + humanScore + " times.");
    console.log("the computer won " + compuerScore + " times.");
    if(equal != 0){
        console.log("you are draw " + equal +" times.");
    }
}
playGame();