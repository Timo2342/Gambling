document.getElementById("startBlackjack").addEventListener("click", blackjackStart);

let usedCards = [];
function blackjackStart() { 
  let bet;
  let playerACard = 0 * 1;
  let dealerACard = 0 * 1;
  bet = document.getElementById("blackjackBet").value;
  if (gambling(bet)) {
    document.getElementById("dealerCards").innerHTML = "";
            document.getElementById("playerCards").innerHTML = "";
            document.getElementById("blackjackBet").disabled = false;
            document.getElementById("startBlackjack").disabled = false;
            document.getElementById("blackjackHit").disabled = true
            document.getElementById("blackjackStand").disabled = true
            document.getElementById("blackjackHit").removeEventListener("click",blackjackHit)
            document.getElementById("blackjackStand").removeEventListener("click",blackjackStand)
    document.getElementById("blackjackBet").disabled = true;
    document.getElementById("startBlackjack").disabled = true;
    document.getElementById("blackjackHit").disabled = true;
    document.getElementById("blackjackStand").disabled = true;
    let firstDealerCard = document.createElement("img");
    let firstDealerCardNumber = randomCard(true);
    document.getElementById("dealerCards").appendChild(firstDealerCard);
    firstDealerCard.className = "dealerCards";
    firstDealerCard.src = firstDealerCardNumber;
    setTimeout(function () {
      let seconndDealerCard = document.createElement("img");
      let seconndDealerCardNumber = randomCard();
      document.getElementById("dealerCards").appendChild(seconndDealerCard);
      seconndDealerCard.className = "dealerCards";
      seconndDealerCard.src = "../images/cardDeck/back.jpg";
      setTimeout(function () {
        let firstPlayerCard = document.createElement("img");
        let firstPlayerCardNumber = randomCard(true);
        document.getElementById("playerCards").appendChild(firstPlayerCard);
        firstPlayerCard.className = "playerCards";
        firstPlayerCard.src = firstPlayerCardNumber;
        setTimeout(function () {
          let seconndPlayerCard = document.createElement("img");
          let seconndPlayerCardNumber = randomCard();
          document.getElementById("playerCards").appendChild(seconndPlayerCard);
          seconndPlayerCard.className = "playerCards";
          seconndPlayerCard.src = seconndPlayerCardNumber;
          if (getCardCount(firstPlayerCardNumber) === 11) {
            playerACard += 1;
            console.log("A")
          }
          if (getCardCount(firstDealerCardNumber) === 11) {
            dealerACard += 1;
            console.log("A")
          }
          if (getCardCount(seconndPlayerCardNumber) === 11) {
            playerACard += 1;
            console.log("A")
          }
          if (getCardCount(seconndDealerCardNumber) === 11) {
            dealerACard += 1;
            console.log("A")
          }
          console.log(playerACard);
          if (
            getCardCount(firstPlayerCardNumber) +
              getCardCount(seconndPlayerCardNumber) ===
              21 &&
            getCardCount(firstDealerCardNumber) +
              getCardCount(seconndDealerCardNumber) ===
              21
          ) {
            alert("Both have Blackjack");
            gameStop();
            return;
          } else if (
            getCardCount(firstPlayerCardNumber) +
              getCardCount(seconndPlayerCardNumber) ===
            21
          ) {
            gambling(bet, true, 1.5);
            setTimeout(function () {
              alert("You won due to Blackjack");
            }, 100);
            gameStop();
            return;
          } else if (
            getCardCount(firstDealerCardNumber) +
              getCardCount(seconndDealerCardNumber) ===
            21
          ) {
            gambling(bet, false);
            setTimeout(function () {
              alert("You lost due to Blackjack");
              gameStop();
              return;
            }, 100);
          }
          let playerCardNumber =
            getCardCount(firstPlayerCardNumber) +
            getCardCount(seconndPlayerCardNumber);
          document.getElementById("blackjackHit").disabled = false;
          document.getElementById("blackjackStand").disabled = false;
              document
                .getElementById("blackjackHit")
                .addEventListener("click", blackjackHit)
                function blackjackHit() {
                  let anotherPlayerCard = document.createElement("img");
                  let anotherPlayerCardNumber = randomCard();
                  document
                    .getElementById("playerCards")
                    .appendChild(anotherPlayerCard);
                  anotherPlayerCard.className = "playerCards";
                  anotherPlayerCard.src = anotherPlayerCardNumber;
                  playerCardNumber += getCardCount(anotherPlayerCardNumber);
                  console.log(playerCardNumber);
                  console.log(playerACard);
                  if (getCardCount(anotherPlayerCardNumber) === 11) {
                    playerACard += 1;
                    console.log("A")
                  }
                  if (playerACard > 0 && playerCardNumber > 21) {
                      playerCardNumber -= 10;
                      playerACard -= 1;
                  }
                  if (playerCardNumber > 21) {
                    gambling(bet, false);
                    setTimeout(function () {
                      console.log("lost over 21")
                      alert("You lost due to a count over 21");
                    }, 200);
                    gameStop()
                  }
                }
              document
                .getElementById("blackjackStand")
                .addEventListener("click", blackjackStand)
                function blackjackStand() {
                  seconndDealerCard.src = seconndDealerCardNumber;
                  let dealerCardNumber =
                    getCardCount(firstDealerCardNumber) +
                    getCardCount(seconndDealerCardNumber);
                  while (dealerCardNumber < 17) {
                    let anotherDealerCard = document.createElement("img");
                    let anotherDealerCardNumber = randomCard();
                    document
                      .getElementById("dealerCards")
                      .appendChild(anotherDealerCard);
                    anotherDealerCard.className = "dealerCards";
                    anotherDealerCard.src = anotherDealerCardNumber;
                    dealerCardNumber += getCardCount(anotherDealerCardNumber);
                    if (getCardCount(anotherDealerCardNumber) === 11) {
                      dealerACard += 1;
                      console.log("A")
                    }
                    if (dealerACard > 0 && dealerCardNumber > 21) {
                      dealerCardNumber -= 10;
                      dealerACard -= 1;
                    }
                  }
                  if (dealerCardNumber > 21) {
                    gambling(bet, true);
                    setTimeout(function () {
                      alert("Dealer has over 21");
                    }, 200);
                    gameStop();
                  } else if (dealerCardNumber < playerCardNumber) {
                    gambling(bet, true);
                    setTimeout(function () {
                      alert("You have a higher card number than the dealer");
                    }, 200);
                    gameStop();
                  } else if (dealerCardNumber > playerCardNumber) {
                    gambling(bet, false);
                    setTimeout(function () {
                      alert("You have a lower card number than the dealer");
                    }, 200);
                    gameStop();
                  } else {
                    setTimeout(function () {
                      alert("You have the same card number as the dealer");
                    }, 200);
                    gameStop();
                  }
                }
        }, 500);
      }, 500);
    }, 500);
  }
}
function gameStop(reason){
  document.getElementById("popUp").style.display = "block"
}

document.getElementById("close").addEventListener("click",close)
function close(){
  document.getElementById("popUp").style.display = "none"
}
function randomCard(newRun) {
  let chosenCard;
  card();
  function card() {
    let random1 = Math.floor(Math.random() * 4); //card suit
    let random2 = Math.floor(Math.random() * 13 + 2); //card number
    let cardSuits;
    let cardNumber;
    if (newRun === true) {
      usedCards = [];
    }
    switch (random1) {
      case 0:
        cardSuits = "h";
        break;
      case 1:
        cardSuits = "ka";
        break;
      case 2:
        cardSuits = "kr";
        break;
      case 3:
        cardSuits = "p";
        break;
    }
    switch (random2) {
      default:
        cardNumber = random2;
        break;
      case 11:
        cardNumber = "A";
        break;
      case 12:
        cardNumber = "J";
        break;
      case 13:
        cardNumber = "K";
        break;
      case 14:
        cardNumber = "Q";
        break;
    }
    chosenCard = "../images/cardDeck/" + cardSuits + "_" + cardNumber + ".jpg";
    console.log(usedCards);
    if (usedCards.includes(chosenCard) === true) {
      card();
      console.log("test");
    }
  }
  
  if (usedCards.includes(chosenCard) === false) {
    usedCards.push(chosenCard);
    console.log(usedCards);
    return chosenCard;
  }
  }

function getCardCount(card) {
  console.log(card);
  let cardCount = card.substring(21, 24);
  cardCount = cardCount.replace("_", "");
  cardCount = cardCount.replace(".", "");
  cardCount = cardCount.replace("j", "");
  switch (cardCount) {
    default:
      return cardCount * 1;
    case "A":
      return 11;
    case "J":
      return 10;
    case "K":
      return 10;
    case "Q":
      return 10;
  }
}