function getComputerChoice () {
    let random = Math.random()
    if (random >= 0 && random < 0.33) {
        return "Rock"
    } else if (random >= 0.33 && random < 0.66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// console.log(getComputerChoice())

function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

    if (player === "rock" && computer === "rock") {
        return "You Tied!"
    } else if (player === "rock" && computer === "scissors") {
        return "You Win!"
    } else if (player === "rock" && computer === "paper") {
        return "You Lose!"
    }

    if (player === "paper" && computer === "paper") {
        return "You Tied!"
    } else if (player === "paper" && computer === "rock") {
        return "You Win!"
    } else if (player === "paper" && computer === "scissors") {
        return "You Lose!"
    }

    if (player === "scissors" && computer === "scissors") {
        return "You Tied!"
    } else if (player === "scissors" && computer === "paper") {
        return "You Win!"
    } else if (player === "scissors" && computer === "rock") {
        return "You Lose!"
    }
   
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()

// console.log (playRound(playerSelection, computerSelection))

function game() {
    let playerWins = 0
    let compWins = 0

    for (let i = 1; i <= 5; i++) {
        let comp = getComputerChoice()
        let player = prompt("Enter your selection: rock, paper, or scissors.")
        let outcome = playRound(player, comp)

        console.log (outcome)

        if (outcome === "You Win!") {
            playerWins += 1
        } else if (outcome === "You Lose!") {
            compWins += 1
        }

        if (i === 5 && playerWins > compWins) {
            console.log("Player wins the best of 5!")
        } else if (i === 5 && compWins > playerWins) {
            console.log("Computer wins the best of 5!")
        } else if (i === 5 && playerWins == compWins) {
            console.log("Player and Computer tied the best of 5!")
        }
    }
}

game()