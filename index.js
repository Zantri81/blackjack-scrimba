let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]      //array is an ordered list of items
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")    //need to be more specific (CSS selector so need to be careful if it's an ID or class) (we'll see this later it's an exmemple)
let cardsEL =document.getElementById("cards-el")

function getRandomCard() {  // fonction became 5 with return
    let randomCard = Math.floor( Math.random() * 13 ) + 1       //math floor delete decimal         math random is between 0.000 etc and 0.999 etc
    if ( randomCard > 10) { 
        return 10
    } else if ( randomCard === 1) { 
        return 11
    } else {
        return randomCard
}}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "Cards: "    // numeroted array 0,1,2,3 etc

for (let i = 0; i < cards.length; i++) {  //for is repeat until...
    cardsEL.textContent += cards[i] + " "
}

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
    let drawCard = getRandomCard()
    sum += drawCard
    cards.push(drawCard)
    renderGame()
}