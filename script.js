let player_score = 0;
let computer_score = 0;

var rock = "rock";
var paper = "paper";
var scissor = "scissor";
var tieCount = 0;
var matchNumber = 0;


// ********** Here we do the rock paper scissor with js

// determine what the user chose on click with JS. Then goes to respective function
document.getElementById("rock").onclick = userChoseRock;
document.getElementById("paper").onclick = userChosePaper;
document.getElementById("scissor").onclick = userChoseScissor;

// function for user chosing rock. Note: there are no input field. Just default function
function userChoseRock() 
{
    // determine what the computer choses. Call computerPlay() function defined earlier
    var computerChoice = computerPlay();
    var playerChoice = "rock";
    // check whether player or computer won.
    whoWon(playerChoice, computerChoice);
}

// function if user choses paper
function userChosePaper()
{
    // determine what the computer choses.
    var computerChoice = computerPlay(); 
    var playerChoice = "paper";
    // check whether player or computer won.
    whoWon(playerChoice, computerChoice); 
}


// function if user chooses Scissor
function userChoseScissor()
{
    // determine what the computer does randomly
    var computerChoice = computerPlay();
    var playerChoice = "scissor";
    // check whether player or computer won.
    whoWon(playerChoice, computerChoice);    
}

// function to determine who wins. 
// 1st input is player
// 2nd input is the computer option
function whoWon(playerChoice, computerChoice) 
{
    addMatchCounter();
    // If player Choice matches the CPU choice then it is a draw. There is no winner.
    if (playerChoice == computerChoice) 
    {
        document.getElementById("phrase_1").innerHTML = "You and Computer Chose Same Thing. This is a Tie!";
        addTie();
    } 

    // Player choses Rock. CPU choses paper. You Lose.
    else if(playerChoice == "rock" && computerChoice == "paper")
    {
        // using the DOM manipulation to edit the HTML text to display the text to win.
        document.getElementById("phrase_1").innerHTML = "You lost. Rock LOSES to Paper!";
        CPUaddPoint();
    }
    else if(playerChoice == "rock" && computerChoice == "scissor")
    {
        document.getElementById("phrase_1").innerHTML = "You won. Rock WINS against Scissor.";
        PlayerAddPoint();
    }
    
    // player choses Paper
    else if(playerChoice == "paper" && computerChoice == "rock")
    {
        document.getElementById("phrase_1").innerHTML = "You win. Paper WINS to Rock.";
        PlayerAddPoint();
    }
    else if(playerChoice == "paper" && computerChoice == "scissor")
    {
        document.getElementById("phrase_1").innerHTML = "You Lose. Paper LOSES to Scissor.";
        CPUaddPoint();
    }

    // player choses Scissor
    else if(playerChoice == "scissor" && computerChoice == "rock")
    {
        document.getElementById("phrase_1").innerHTML = "You lose. Scissor LOSES to Rock.";
        CPUaddPoint();
    }
    else if(playerChoice == "scissor" && computerChoice == "paper")
    {
        document.getElementById("phrase_1").innerHTML = "You Win. Scissor WINS against Paper.";
        PlayerAddPoint();
    }
    else 
    {
        console.log("blank here");
    }


}

// If the CPU wins, then add one point.
function CPUaddPoint()
{
    // add score point to the computer score.
    // Manipulate the DOM to edit the HTML to print out the score. 
    computer_score += 1;
    document.getElementsByTagName("span")[1].innerHTML = computer_score;
}

// If the Player wins, then add one point.
function PlayerAddPoint() 
{
    player_score += 1;
    // Manipulate the DOM to edit the HTML to print out the score.
    document.getElementsByTagName("span")[0].innerHTML = player_score;
}

// Keep track which iteration match we are on
function addMatchCounter()
{
    matchNumber += 1;
    document.getElementsByTagName("span")[3].innerHTML = matchNumber;
}

function addTie()
{
    tieCount += 1;
    document.getElementsByTagName("span")[2].innerHTML = tieCount;
}





// **********  Code above for JS Assignment ************* //




// ******** Code Below For 1st Rock Paper Scissor  Assignment  ******** //

// this is going to randomly return a computer choice for R - rock, P - paper, S - scissor
// Calling this function will return a string randomly chosen from array of 3 choices. 
function computerPlay() {
    var choices = [
        "rock",
        "paper",
        "scissor"
        ];
    return choices[Math.floor(Math.random() * choices.length)]
}

// function to playRound(input1, input2) and then going to return the result of the game.
// input1 is the user
function playRound(input1, input2) {
    // if the user choses rock
    if (input1 == "rock" && input2 == "paper") {
        return "You lose!!";
    }
    else if (input1 == "rock" && input2 == "scissor") {
        return "You win!!";
    }
    else if (input1 == "rock" && input2 == "rock") {
        return "Draw!!";
    }
    //if the user choses paper
    else if (input1 == "paper" && input2 == "paper") {
        return "Draw!!";
    }
    else if (input1 == "paper" && input2 == "rock") {
        return "You win!!";
    }
    else if (input1 == "paper" && input2 == "scissor") {
        return "You lose!!";
    }
    // if the user chooses scissor
    else if (input1 == "scissor" && input2 == "scissor") {
        return "Draw!!";
    }
    else if (input1 == "scissor" && input2 =="rock") {
        return "You lose!!";
    }
    else if (input1 == "scissor" && input2 == "paper") {
        return "You win!!";
    }
}

// use the previous function inside the game() 5x to play the game 5x as specified in assignment. 
function game() {
    // play 5 rounds of playRound(playerSelection, computerSelection)
    for (let i = 1; i < 6; i++) {
        
        // Ask the player for their choice
        let playerSelection = prompt("Please enter your choice: (Rock, Paper, or Scissor"); 
        
        // Make player choice case insensitive by converting everything to lowercase.
        playerSelection = playerSelection.toLowerCase();
        
        // Call function to randomly chose computer option
        let computerSelection = computerPlay();  
        
        // Announce which round we are on.
        console.log("This is round" + i +": ");
        
        // Store result of round in variable
        let round_result = playRound(playerSelection,computerSelection);
        
        // Output it to user the result of round.
        console.log(round_result);		
        
        // Calculate who won then add point to user or computer.
        if (round_result == "You win!!") {
            user_score++;
        }
        else if (round_result == "You lose!!"){
            computer_score++
        }
    }
    // After tallying up scores, announce who won or if it was a draw.
    if (user_score > computer_score) {
        console.log("Congrats you win with: " + user_score + " points");
    }
    else if (user_score < computer_score) {
        console.log(computer_score);
        console.log("Computer wins with: " + computer_score + " points");
    }
    else {
        console.log("We have a draw. Try again!");
    }
}

function playerSelectRock(){
    alert("You Chose Rock");
}

function playerSelectPaper(){
    alert("You Chose Paper");
}

function playerSelectScissor(){
    alert("You Chose Scissor");
}




// document.getElementById("rock").onclick = playerSelectRock;
// document.getElementById("paper").onclick = playerSelectPaper;
// document.getElementById("scissor").onclick = playerSelectScissor;

// for the Javascript implementation, we are going to comment out the game to play when launching
// the html page.
//game();  // call the game() function to play 5 rounds of rock-paper-scissor

