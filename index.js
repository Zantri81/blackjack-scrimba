let firstCard = 6
let secondCard = 11
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")    //need to be more specific (CSS selector so need to be careful if it's an ID or class) (we'll see this later it's an exmemple)
let cardsEL =document.getElementById("cards-el")

function startGame() {
    cardsEL.textContent += firstCard + " " + secondCard
    sumEL.textContent += sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21 ) {                           //something follow = else if
    message = "Impressive. You've got Blackjack!"
    hasBlackJack = true
} else {                                            //nothing after = else no this : ()
    message = "You're out of the game!"
    isAlive = false
    }
    messageEL.textContent = message
}