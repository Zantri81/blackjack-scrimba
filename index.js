let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

if (sum <21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21 ) {                           //something follow = else if
    console.log("Wohoo! You've got Blackjack!")
} else (sum > 21) {                                 //nothing after = else
    console.log("You're out of the game!")
}