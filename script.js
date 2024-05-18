// function welcome(){
//     alert("welocme to the Rock,paper and Scissors console game. inorder to see the results for each round, please inspect this page and open the console panel. ");
// }
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0)
        return ("rock");
    else if(num == 1)
        return ("paper");
    else
        return ("scissors");

}
const container = document.querySelector("#results");


let humanScore = 0, compuerScore = 0, equal = 0, RoundWinner;
function playRound(humanChoice, computerChoice) {
    let RoundWinner = "";
  
    if (humanChoice == "rock" && computerChoice == "scissors") {
        RoundWinner = "You win! Rock beats Scissors.";
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        RoundWinner = "You lose! Paper beats Rock.";
        compuerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        RoundWinner = "You lose! Rock beats Scissors.";
        compuerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        RoundWinner = "You win! Scissors beats Paper.";
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        RoundWinner = "You win! Paper beats Rock.";
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        RoundWinner = "You lose! Scissors beats Paper.";
        compuerScore++;
    } else {
        RoundWinner = "It's a tie!";
        equal++;
    }
   
    console.log(RoundWinner);
    
    const content = document.createElement("div");
    content.textContent = RoundWinner;
    container.appendChild(content);
    
    if(humanScore == 5 || compuerScore == 5){
        const final = document.createElement("div");
        
        if (humanScore == 5) {
            final.textContent = "Final result: You win!";
        } else if (compuerScore == 5) {
            final.textContent = "Final result: Computer wins!";
        }
        container.appendChild(final);
    }
}




// function playGame(){
    
    

    
//     console.log("Final result after playing 5 rounds: ")
//     console.log("you won " + humanScore + " times.");
//     console.log("the computer won " + compuerScore + " times.");
//     if(equal != 0){
//         console.log("you are draw " + equal +" times.");
//     }
// }


// const paper = document.querySelector("#paper");
// paper.addEventListener("click", playRound);

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click",playRound);

// const Rock = document.querySelector("#Rock");
// Rock.addEventListener("click",playRound);
let selection ;

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
button.addEventListener("click",function(){
    selection = button.id;
    const computerSelection =  getComputerChoice();
    
    playRound(selection,computerSelection);
});
});
