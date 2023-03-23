//Code from "What's dev" as specified in ReadMe

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// CONVERT LETTER TO WORD
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


// FUNCTIONS FOR MESSAGE ON WIN, LOST OR DRAW
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('result-winner');
    setTimeout(() => userChoice_div.classList.remove('result-winner'), 2000);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
    userChoice_div.classList.add('result-loser');
    setTimeout(() => userChoice_div.classList.remove('result-loser'), 2000);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`; 
}

//RUNNING THE FUNCTIONS
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp": 
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr": 
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss": 
            draw(userChoice, computerChoice);
            break;
    }
}

// CLICKING THE BUTTONS
function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();
