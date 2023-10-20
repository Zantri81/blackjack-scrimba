let cards = []      //array is an ordered list of items
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")    //need to be more specific (CSS selector so need to be careful if it's an ID or class) (we'll see this later it's an exmemple)
let cardsEL =document.getElementById("cards-el")

let player = {              // it's an object no need to "let" in the bracet
    Name: "Billy",
    Chips: 200
}
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": €" + player.chips  // when in an objet we do this


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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if ( isAlive === true && hasBlackJack === false) {           // && is and || is or
    let drawCard = getRandomCard()
    sum += drawCard
    cards.push(drawCard)
    renderGame()
}}