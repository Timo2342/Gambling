let coins = 0;
window.onload = (event) => {
  if (localStorage.getItem("coins") != null) {
    coins = localStorage.getItem("coins");
    coins = coins * 1;
  } else {
    localStorage.setItem("coins", 0);
    coins = localStorage.getItem("coins");
    coins = coins * 1;
  }
  document.getElementById("coinAmt").innerText = coins;
  switch (window.location.pathname) {
    case "/homepage.html":
      break;
    case "/pferderennen.html":
      document
        .getElementById("start_run_hort")
        .addEventListener("click", hortStart);
      document.getElementById("test").addEventListener("click", test);
      break;
    case "/blackjack.html":
      document
        .getElementById("startBlackjack")
        .addEventListener("click", blackjackStart);
      break;
    case "/shop.html":
      document.getElementById("buy").addEventListener("click", buy);
      break;
  }
};

function gambling(bet, win, multiplier) {
 if(bet === ""){
  alert("Input Bet")
  return false;
}
  else if (bet <= coins) {
    console.log(bet)
    if (win === true) {
      if (multiplier > 0) {
        coins = coins * 1 + multiplier * bet * 1;
      } else {
        coins = coins * 1 + bet * 1;
      }
    } else if (win === false) {
      coins = coins * 1 - bet * 1;
    }
    localStorage.setItem("coins", coins);
    document.getElementById("coinAmt").innerText = coins;
    return true;
  }else if (bet <= 0) {
    alert("Bet must be over 0");
    return false;
  } else {
    alert("Not enough coins");
    return false;
  }
}
function buy() {
  coins += 10;
  localStorage.setItem("coins", coins);
  document.getElementById("coinAmt").innerText = coins;
}
function test() {
  console.log(orange.style.animationPlayState);
}
function hortStart() {
  document.getElementById("start_run_hort").disabled = "true"
  var hort = [
    document.getElementById("orange"),
    document.getElementById("red"),
    document.getElementById("black"),
    document.getElementById("cyan"),
    document.getElementById("pink"),
    document.getElementById("white"),
    document.getElementById("yellow"),
    document.getElementById("blue"),
  ];
  function above85(value){
    return value > 79
  }
  function above50(value){
    return value > 50
  }
  var hortPos = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ]
  var hortrndspeed =[
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
    Math.random()*(1.25-0.75)+0.75,
  ];
var betting = document.getElementById("currency_input_hort").value;
  if ( document.getElementById("currency_input_hort").value !== ""){
  hortLoop()
  function hortLoop(){
    for (let i = 0; i < 8; i++) {
      if (hortPos.find(above85) === undefined) {
        setTimeout(function(){
          var speed = (Math.random()* hortrndspeed[i])/ 10;  // => generierung der Zufallseinheit0;;
          hortPos[i] += speed;
          hort[i].style.transform = "translateX(" + hortPos[i] + "vw)";   //0.085 => weite des schrittes pro zufallseinheit
          if (hortPos.find(above50) !== undefined) {  //Tie Braker aka generiert midway speed mod neu
             hortrndspeed =[
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
              Math.random()*(1.25-0.75)+0.75,
            ];
            console.log(hortrndspeed);
          }
          if (i === 7) {hortLoop()}
  },1)} //ms pro druchgang => schnelligkeit
  else {
    console.log(hortPos.findIndex(above85)); // gibt mir wer gewinner ist
    document.getElementById("start_run_hort").disabled = false  //reset 
  }}}}
  else {
    document.getElementById("start_run_hort").disabled = false  //reset 
    }}// das einfach genial
let usedCards = [];
function blackjackStart() { 
  let bet;
  let playerACard = 0 * 1;
  let dealerACard = 0 * 1;
  bet = document.getElementById("blackjackBet").value;
  if (gambling(bet)) {
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
      seconndDealerCard.src = "./images/cardDeck/back.jpg";
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
            restartGame();
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
            restartGame();
            return;
          } else if (
            getCardCount(firstDealerCardNumber) +
              getCardCount(seconndDealerCardNumber) ===
            21
          ) {
            gambling(bet, false);
            setTimeout(function () {
              alert("You lost due to Blackjack");
              restartGame();
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
                .addEventListener("click", function () {
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
                    restartGame()
                  }
                });
              document
                .getElementById("blackjackStand")
                .addEventListener("click", function () {
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
                    restartGame();
                  } else if (dealerCardNumber < playerCardNumber) {
                    gambling(bet, true);
                    setTimeout(function () {
                      alert("You have a higher card number than the dealer");
                    }, 200);
                    restartGame();
                  } else if (dealerCardNumber > playerCardNumber) {
                    gambling(bet, false);
                    setTimeout(function () {
                      alert("You have a lower card number than the dealer");
                    }, 200);
                    restartGame();
                  } else {
                    setTimeout(function () {
                      alert("You have the same card number as the dealer");
                    }, 200);
                    restartGame();
                  }
                })
          function restartGame() {
            document.getElementById("dealerCards").innerHTML = "";
            document.getElementById("playerCards").innerHTML = "";
            document.getElementById("blackjackBet").disabled = false;
            document.getElementById("startBlackjack").disabled = false;
            document.getElementById("blackjackHit").disabled = true
            document.getElementById("blackjackStand").disabled = true
            playerACard = 0
            dealerACard = 0
            usedCards = []
            console.log(usedCards)
           
          }
        }, 500);
      }, 500);
    }, 500);
  }
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
    chosenCard = "./images/cardDeck/" + cardSuits + "_" + cardNumber + ".jpg";
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
  let cardCount = card.substring(20, 23);
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
