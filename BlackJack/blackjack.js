let player={
  name: "Narasimha",
  chips:225
}
let cards= []
let result = 0
let blackJack= false
let Alive = false
let message=""
let messageEl = document.getElementById("message-el");
let sumEl= document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
console.log(player.name);

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()* 13) + 1
  if (randomNumber === 1){
    return 11
  }else if(randomNumber=== 11 || randomNumber=== 12 || randomNumber=== 13){
    return 10
  }else{
    return randomNumber
  }
    
}

function startGame(){
  Alive =true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards= [firstCard,secondCard]
  result = firstCard + secondCard

  renderGame()
}
function renderGame(){
  cardsEl.textContent = "Cards: " 
  for(let i = 0; i < cards.length;  i++){
    cardsEl.textContent += cards[i] +" "

  }
  sumEl.textContent ="Sum: " + result
  if(result < 21){
    message = "Do you want to draw a new card? 🙂"
 
 }else if(result === 21){
   message = "Wohoo! You've got Blackjack! 🥳"
   blackJack = true
 }else{
   message = "You're out of the game! 😭"
   Alive = false
 }
 
 messageEl.textContent = message
 
 console.log(message)

}
function newCard(){
  console.log("Drawing a new a card from the deck")
  if(Alive === true && blackJack === false){
    let card = getRandomCard()
    result += card
    cards.push(card)
    renderGame()
  }
  
}
//math.round()-> 0.000  -> 0.999
//math.floor()->