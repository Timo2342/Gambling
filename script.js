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
  if (bet <= coins) {
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
  } else if (bet <= 0) {
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
var isPlaying = 0;
var Win = 0;
var MryWin = 0;
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
let hortPos =[
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
]
function hortStart() {
  let h = 0;
  hortLoop()
  function hortLoop(){
    setTimeout(function(){
    for (let i = 0; i < 8; i++) {
      var speed = (Math.random()* 10)+10 / 100  // => generierung der Zufallseinheit0;;
      hortPos[i] += speed
      console.log(hortPos)
      console.log(speed)
      hort[i].style.transform = "translateX(" + hortPos[i] + "vw)";   //0.085 => weite des schrittes pro zufallseinheit
      h++
      hort[i] < "84"
    
    if(h < 150){ //menge der durchgänge der schleife
      hortLoop();
    }
    }
  },20) //ms pro druchgang => schnelligkeit
}
}
/*  if (isPlaying === 0) {
    for (let h = 0; h < 8; h++) {
      console.log(isPlaying);

      isPlaying = 1;
      var Speed = [
        Math.floor(Math.random() * 1000 + 100),
        Math.floor(Math.random() * 1000 + 100),
        Math.floor(Math.random() * 1000 + 100),
        Math.floor(Math.random() * 1000 + 100),
      ];
      console.log(Speed);
      var horte = hort[h];
       for (let i = 0; i < 4; i++) {
        var Speed1 = Math.floor(Math.random() * 1000 + 100) + "ms";
        let hortRan = new Promise(function (resolve) {
          let frame = "check" + (i + 1);
          horte.style.animation = frame;
          horte.style.animationTimingFunction = "linear";
          horte.style.animationFillMode = "both";
          horte.style.animationDuration = Speed1;
          console.log(horte.style.animationPlayState);
          console.log(Win, MryWin, frame);
          setTimeout(function () {
            resolve();
          }, Speed[i]);
        });
        await hortRan;
      } 
      
      if (Win === 0) {
        MryWin = 1;
        Win = 1;
        console.log(Win, MryWin);
      }
    }
  }
} 
*/
let bet;
function blackjackStart() {
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
          }
          if (getCardCount(firstDealerCardNumber) === 11) {
            dealerACard += 1;
          }
          if (getCardCount(seconndPlayerCardNumber) === 11) {
            playerACard += 1;
          }
          if (getCardCount(seconndDealerCardNumber) === 11) {
            dealerACard += 1;
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
          waitForButton();
          async function waitForButton() {
            let buttonPressed = new Promise(function (resolve) {
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
                  }
                  if (playerCardNumber > 21) {
                    if (playerACard > 0) {
                      playerCardNumber -= 10;
                      playerACard -= 1;
                    }
                  }
                  if (playerCardNumber > 21) {
                    gambling(bet, false);
                    setTimeout(function () {
                      alert("You lost due to a count over 21");
                    }, 100);
                    restartGame();
                  }
                  resolve();
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
                    }, 100);
                    restartGame();
                  } else if (dealerCardNumber < playerCardNumber) {
                    gambling(bet, true);
                    setTimeout(function () {
                      alert("You have a higher card number than the dealer");
                    }, 100);
                    restartGame();
                  } else if (dealerCardNumber > playerCardNumber) {
                    gambling(bet, false);
                    setTimeout(function () {
                      alert("You have a lower card number than the dealer");
                    }, 100);
                    restartGame();
                  } else {
                    setTimeout(function () {
                      alert("You have the same card number as the dealer");
                    }, 100);
                    restartGame();
                  }
                  resolve();
                });
            });
            await buttonPressed;
          }
          function restartGame() {
            document.getElementById("dealerCards").innerHTML = "";
            document.getElementById("playerCards").innerHTML = "";
            document.getElementById("blackjackBet").disabled = false;
            document.getElementById("startBlackjack").disabled = false;
          }
        }, 500);
      }, 500);
    }, 500);
  }
}
let usedCards = [];
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
    if (usedCards.includes(chosenCard)) {
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
