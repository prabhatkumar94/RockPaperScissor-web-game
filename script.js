let choices = document.querySelectorAll(".choice")

let you = document.querySelector(".you-div")
let computer = document.querySelector(".computer-div")
let result = document.querySelector(".result")

let winSound = new Audio("win.mp3")
let loseSound = new Audio("lose.mp3")
let drawSound = new Audio("draw.mp3")

let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("computer-score");
let userScore = 0;
let compScore = 0;


choices.forEach((choice) => {
    choice.addEventListener('click', () => {

        result.innerText = ""


        let userChoice = choice.getAttribute("id")
        let options = ["stone", "paper", "scissor"]
        let compindex = Math.floor(Math.random() * 3)
        let computerChoice = options[compindex]

        startShake();
        setTimeout(() => { // set timout for delay because of hand moving after that game will played
            stopShake();

            playGame(userChoice, computerChoice)

        }, 3000)



    })
})

function startShake() {
    you.style = "  animation: shake 1s linear 3; "
    computer.style = "  animation: shake 1s linear 3; "
}


function stopShake() {
    you.style.animation = "none";
    computer.style.animation = "none";
}

function resetGame() {
    you.innerText = "👊";
    computer.innerText = "👊";
    result.innerText = "";
    result.style = "box-shadow: none; ";
    // winSound.ended()
    // loseSound.pause()
    // drawSound.pause()


}
function resetGame1() {
    you.innerText = "👊";
    computer.innerText = "👊";
    result.innerText = "Play Again";
    result.style = "box-shadow: inset 2px 2px 20px rgb(171, 156, 156), -2px -2px 20px rgb(6, 6, 5);";

    userScore = 0;
    compScore = 0;

    userScoreSpan.innerText = userScore;
    compScoreSpan.innerText = compScore;

}



function playGame(userChoice, computerChoice) {
    //user choice emoji
    if (userChoice === "stone") {
        you.innerText = "👊"
    }
    else if (userChoice === "paper") {
        you.innerText = "🖐️"
    }
    else {
        you.innerText = "✌️"
    }

    // computer auto generated emoji
    if (computerChoice === "stone") {
        computer.innerText = "👊"
    }
    else if (computerChoice === "paper") {
        computer.innerText = "🖐️"
    }
    else {
        computer.innerText = "✌️"
    }
    // console.log("user " + userChoice);
    // console.log("computer " + computerChoice);

    if (userChoice === computerChoice) {
        drawSound.play()
        //console.log("Draw");
        result.innerText = "Draw!"
        result.style = "box-shadow:inset 2px 2px 20px rgb(25, 225, 251),inset -2px -2px 20px rgb(89, 160, 215); color:white  "

    }
    else if (userChoice === "stone" && computerChoice === "scissor" || userChoice === "paper" && computerChoice === "stone" || userChoice === "scissor" && computerChoice === "paper") {

        winSound.play()
        // console.log("You Win");
        result.innerText = "You Win!";
        result.style = "box-shadow: inset 2px 2px 20px rgb(134, 251, 25), inset -2px -2px 20px rgb(158, 215, 89); color: white;";
        userScore++;
        userScoreSpan.innerText = userScore;


    }
    else {

        loseSound.play()

        // console.log("You Loss!");
        result.innerText = "You Loss!"
        result.style = "box-shadow:inset 2px 2px 20px rgb(252, 3, 3), inset -2px -2px 20px rgb(253, 78, 72); color:white "
        compScore++;
        compScoreSpan.innerText = compScore;
    }
}


