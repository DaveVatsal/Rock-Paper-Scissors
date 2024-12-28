let userScore = 0;
let compScore = 0;
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#computer-score");
let choices = document.querySelectorAll(".choice img");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw!! Play Again..!!";
    msg.style.backgroundColor = "#0C1821"
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true) {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++
        comp_score.innerText = compScore;
        msg.innerText = `You lost!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
} 

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice == compChoice) {
        drawGame();
    } 
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //compChoice = "paper","scissors"
            userWin = compChoice === "paper" ? false :true;
        } else if(userChoice === "paper") {
            //compChoice = "rock","scissors"
            userWin = compChoice === "rock" ? false :true;
        } else {
            //compChoice = "rock","paper"
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("class");
        playGame(userChoice)
    });
});