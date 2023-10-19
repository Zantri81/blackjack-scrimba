let firstCard = 6
let secondCard = 11
let cards = [firstCard, secondCard]      //array is an ordered list of items
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")    //need to be more specific (CSS selector so need to be careful if it's an ID or class) (we'll see this later it's an exmemple)
let cardsEL =document.getElementById("cards-el")


function startGame() {
    renderGame()
}

function renderGame() {
    cardsEL.textContent += cards[0] + " " + cards[1]    // numeroted array 0,1,2,3 etc
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

function newCard() {
    console.log("Drawing a new card from the deck!")
    let drawCard = 4
    sum += drawCard
    renderGame()
}