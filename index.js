let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

function startGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21 ) {                           //something follow = else if
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {                                            //nothing after = else no this : ()
    message = "You're out of the game!"
    isAlive = false
    }
console.log(message) 
}