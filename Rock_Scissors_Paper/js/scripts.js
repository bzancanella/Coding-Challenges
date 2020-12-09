var matchArray = new Array; // Sets up an array for results to be compared in
var player2 = ["rock", "scissors", "paper"]; // Sets up the array of items for the oppenent to chose from
var numGms, G2W; // Initializes the variables for the number of games to play and the number of games to win
var win = 0; // Win counter
var lose = 0; // Lose counter

function startGame() {
    win = 0; // Resets Win counter to 0 for a new game
    lose = 0; // Resets Lose counter to 0 for a new game
    numGms = document.getElementById("numGms").value; 
    G2W = document.getElementById("G2W").value;
    document.getElementById("numGms-display").innerHTML = numGms + " games, " + G2W + " games to win."; // Displays the criteria for winning
    document.getElementById("uWin").innerHTML = win; // Displays current games won
    document.getElementById("uLose").innerHTML = lose; // Displays current games lost
}

/* I attempted to do this with a single function, with the arguments passed to and assigned to 
the array through onclick="pick(rock/scissors/paper)", but I couldn't make it work that way.
If I were to go back and optimize the code that would be the first thing I'd fix */
function pickRock() {
    matchArray[0] = "rock"; // Places your item choice for the match into the matchArray for comparison
    matchArray[1] = player2[Math.floor(Math.random() * player2.length)]; // Randomly select an item from the array, places it in the matchArray for comparison
}

function pickScissors() {
    matchArray[0] = "scissors"; // Places your item choice for the match into the matchArray for comparison
    matchArray[1] = player2[Math.floor(Math.random() * player2.length)]; // Randomly select an item from the array, places it in the matchArray for comparison
}

function pickPaper() {
    matchArray[0] = "paper"; // Places your item choice for the match into the matchArray for comparison
    matchArray[1] = player2[Math.floor(Math.random() * player2.length)]; // Randomly select an item from the array, places it in the matchArray for comparison
}

function youWin() { // Displays both your choice and the opponent's choice in the Results area along with the results
    document.getElementById('gmResults').innerHTML = "You have chosen " + matchArray[0] + ", your oppenent has chosen " + matchArray[1] + ". You win.";
    win += 1; // Increases win counter
    document.getElementById("uWin").innerHTML = win; // Updates win counter in display
    if (win == G2W) { // If you have reached the required win total for the game, it will display a congratulatory popup then disable further games until reset
        alert("Congratulations on defeating a random number generator. You did it! Please reset the game settings in order to continue playing.");
        gameOver();
    }
}

function youLose() { // Displays both your choice and the opponent's choice in the Results area along with the results
    document.getElementById('gmResults').innerHTML = "You have chosen " + matchArray[0] + ", your oppenent has chosen " + matchArray[1] + ". You lose.";
    lose += 1; // Increases lose counter
    document.getElementById("uLose").innerHTML = lose; // Updates lose counter in display
    if (lose == G2W) { // If you have reached the required win total for the game, it will display a concillatory popup then disable further games until reset
        alert("You have been defeated by the almighty random number generator. Don't fell too bad, there is always next time. Keep practicing! Please reset the game settings in order to continue playing.");
        gameOver();
    }
}

function youTie() { // Displays both your choice and the opponent's choice in the Results area along with the results
    document.getElementById('gmResults').innerHTML = "You have chosen " + matchArray[0] + ", your oppenent has chosen " + matchArray[1] + ". This is a tie. Please play again to determine a winner.";
}

function comparison() {
    /* This function parses the matchArray, comparing indexes to determine
    the win conditions. Once the conditions are determined the appropriate 
    Win/Lose/Tie function is called. */
    /* document.getElementById('gmResults').innerHTML = ""; */
    if      (matchArray[0] == "rock" && matchArray[1] == "rock") { youTie(); }
    else if (matchArray[0] == "rock" && matchArray[1] == "paper") { youLose(); }
    else if (matchArray[0] == "rock" && matchArray[1] == "scissors") { youWin(); }
    else if (matchArray[0] == "paper" && matchArray[1] == "rock") { youWin(); }
    else if (matchArray[0] == "paper" && matchArray[1] == "paper") { youTie(); }
    else if (matchArray[0] == "paper" && matchArray[1] == "scissors") { youLose(); }
    else if (matchArray[0] == "scissors" && matchArray[1] == "rock") { youLose(); }
    else if (matchArray[0] == "scissors" && matchArray[1] == "paper") { youWin(); }
    else if (matchArray[0] == "scissors" && matchArray[1] == "scissors") { youTie(); }
}

function gameOver() { // Disables further play until the Game Settings are reset
    document.getElementById("playButton").disabled = true;
}

function resetGame() { // Enables further play after a previous game, and resets game variables
    document.getElementById("playButton").disabled = false;
    numGms = 0;
    G2W = 0;
    win = 0;
    lose = 0;
    matchArray.length = 0;
    document.getElementById("numGms-display").innerHTML = "";
    document.getElementById("numGms").innerHTML = numGms;
    document.getElementById("G2W").innerHTML = G2W;
    document.getElementById("uWin").innerHTML = win;
    document.getElementById("uLose").innerHTML = lose;
}