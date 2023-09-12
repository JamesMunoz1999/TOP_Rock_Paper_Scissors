function getComputerChoice () {
    let random = Math.random()
    if (random >= 0 && random < 0.33) {
        return "rock"
    } else if (random >= 0.33 && random < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}



// console.log(getComputerChoice())

function playRound () {
    let player = this.value
    let computer = getComputerChoice()
    let h1Result = document.querySelector('h1')

    console.log(player)
    console.log(computer)
    if (player === "rock" && computer === "rock") {
        return "You Tied!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Tied!"
    } else if (player === "rock" && computer === "scissors") {
        return "You Win!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Won!"
    } else if (player === "rock" && computer === "paper") {
        return "You Lose!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Lost!"
    }

    if (player === "paper" && computer === "paper") {
        return "You Tied!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Tied!"
    } else if (player === "paper" && computer === "rock") {
        return "You Win!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Won!"
    } else if (player === "paper" && computer === "scissors") {
        return "You Lose!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Lost!"
    }

    if (player === "scissors" && computer === "scissors") {
        return "You Tied!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Tied!"
    } else if (player === "scissors" && computer === "paper") {
        return "You Win!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Won!"
    } else if (player === "scissors" && computer === "rock") {
        return "You Lose!",
        h1Result.textContent = "Result: ",
        h1Result.textContent += "You Lost!"
    }
   
}

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener('click', playRound)
paperButton.addEventListener('click', playRound)
scissorsButton.addEventListener('click', playRound)

// console.log(playRound("rock"))

// const playerSelection = "rock"
// const computerSelection = getComputerChoice()

// console.log (playRound(playerSelection, computerSelection))

// function game() {
//     let playerWins = 0
//     let compWins = 0

//     for (let i = 1; i <= 5; i++) {
//         let comp = getComputerChoice()
//         let player = prompt("Enter your selection: rock, paper, or scissors.")
//         let outcome = playRound(player, comp)

//         console.log (outcome)

//         if (outcome === "You Win!") {
//             playerWins += 1
//         } else if (outcome === "You Lose!") {
//             compWins += 1
//         }

//         if (i === 5 && playerWins > compWins) {
//             console.log("Player wins the best of 5!")
//         } else if (i === 5 && compWins > playerWins) {
//             console.log("Computer wins the best of 5!")
//         } else if (i === 5 && playerWins == compWins) {
//             console.log("Player and Computer tied the best of 5!")
//         }
//     }
// }

// game()