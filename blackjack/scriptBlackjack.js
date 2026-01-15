document.getElementById("startBlackjack").addEventListener("click", blackjackStart);
    document.getElementById("blackjackHit").disabled = true
    document.getElementById("blackjackStand").disabled = true

    let popUp = false;
    
    document.getElementById("blackjackBet").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        blackjackStart()
      }
    });
    document.addEventListener('keydown', function(e) {
      if(e.key == "Escape" && popUp){
        close()
      }
    });
    function blackjackStart() { 
      if(!restartGame){
        document.getElementById("dealerCards").innerHTML = "";
        document.getElementById("playerCards").innerHTML = "";
      }
      let bet;
      let playerACard = 0 * 1;
      let dealerACard = 0 * 1;
      bet = document.getElementById("blackjackBet").value;
      if (gambling(bet)) {
        let playerNumber = 0
        let dealerNumber = 0
        document.getElementById("playerNumber").innerHTML = playerNumber
        document.getElementById("dealerNumber").innerHTML = dealerNumber
        document.getElementById("blackjackBet").disabled = true;
        document.getElementById("startBlackjack").disabled = true;
        document.getElementById("blackjackHit").disabled = true;
        document.getElementById("blackjackStand").disabled = true;
        let firstDealerCard = document.createElement("img");
        let firstDealerCardNumber = randomCard(true);
        document.getElementById("dealerCards").appendChild(firstDealerCard);
        firstDealerCard.className = "dealerCards";
        firstDealerCard.src = firstDealerCardNumber;
        dealerNumber += getCardCount(firstDealerCardNumber);
        document.getElementById("dealerNumber").innerHTML = dealerNumber
        setTimeout(function () {
          let seconndDealerCard = document.createElement("img");
          let seconndDealerCardNumber = randomCard();
          document.getElementById("dealerCards").appendChild(seconndDealerCard);
          seconndDealerCard.className = "dealerCards";
          seconndDealerCard.src = "../images/cardDeck/back.jpg";
          setTimeout(function () {
            let firstPlayerCard = document.createElement("img");
            let firstPlayerCardNumber = randomCard();
            document.getElementById("playerCards").appendChild(firstPlayerCard);
            firstPlayerCard.className = "playerCards";
            firstPlayerCard.src = firstPlayerCardNumber;
            playerNumber += getCardCount(firstPlayerCardNumber)
            document.getElementById("playerNumber").innerHTML = playerNumber
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
              let playerCardNumber =
              getCardCount(firstPlayerCardNumber) +
              getCardCount(seconndPlayerCardNumber);
              document.getElementById("playerNumber").innerHTML = playerCardNumber
              
              if (
                getCardCount(firstPlayerCardNumber) +
                getCardCount(seconndPlayerCardNumber) ===
                21 &&
                getCardCount(firstDealerCardNumber) +
                getCardCount(seconndDealerCardNumber) ===
                21
              ) {
                dealerNumber = 21
                gameStop("Both have Blackjack");
                return;
              } else if (
                getCardCount(firstPlayerCardNumber) +
                getCardCount(seconndPlayerCardNumber) ===
                21
              ) {
                gambling(bet, true, 1.5);
                setTimeout(function () {
                  dealerNumber += getCardCount(seconndDealerCardNumber)
                  gameStop("You won due to Blackjack");
                }, 100);
                return;
              } else if (
                getCardCount(firstDealerCardNumber) +
                getCardCount(seconndDealerCardNumber) ===
                21
              ) {
                gambling(bet, false);
                setTimeout(function () {
                  dealerNumber = 21
                  gameStop("You lost due to Blackjack");
                  return;
                }, 100);
              }
              if(playerCardNumber != 22){
                playerNumber = playerCardNumber
              }else{
                playerNumber += 1
              }
              document.getElementById("playerNumber").innerHTML = playerNumber
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
                while(playerACard > 0 && playerCardNumber > 21) {
                  playerCardNumber -= 10;
                  playerACard -= 1;
                }
                if (playerCardNumber > 21) {
                  gambling(bet, false);
                  setTimeout(function () {
                    console.log("lost over 21")
                    dealerNumber += getCardCount(seconndDealerCardNumber)
                    gameStop("You lost due to a count over 21");
                  }, 200);
                }
                playerNumber = playerCardNumber
                document.getElementById("playerNumber").innerHTML = playerNumber
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
                  while(dealerACard > 0 && dealerCardNumber > 21) {
                    dealerCardNumber -= 10;
                    dealerACard -= 1;
                  }
                }
                dealerNumber = dealerCardNumber
                document.getElementById("dealerNumber").innerHTML = dealerNumber
                if (dealerCardNumber > 21) {
                  gambling(bet, true);
                  setTimeout(function () {
                    gameStop("Dealer has over 21");
                  }, 200);
                } else if (dealerCardNumber < playerCardNumber) {
                  gambling(bet, true);
                  setTimeout(function () {
                    gameStop("You have a higher card number than the dealer");
                  }, 200);
                } else if (dealerCardNumber > playerCardNumber) {
                  gambling(bet, false);
                  setTimeout(function () {
                    gameStop("You have a lower card number than the dealer");
                  }, 200);
                } else {
                  setTimeout(function () {
                    gameStop("You have the same card number as the dealer");
                  }, 200);
                }
              }
              function gameStop(reason){
                document.getElementById("popUp").style.display = "flex"
                document.getElementById("reason").innerHTML = reason
                document.getElementById("blackjackHit").removeEventListener("click",blackjackHit)
                document.getElementById("blackjackStand").removeEventListener("click",blackjackStand)
                seconndDealerCard.src = seconndDealerCardNumber;
                document.getElementById("dealerNumber").innerHTML = dealerNumber
                popUp = true;
              }
            }, 500);
          }, 500);
        }, 500);
      }
    }
    
    let restartGame = false;
    document.getElementById("close").addEventListener("click",close)
    function close(){
      document.getElementById("popUp").style.display = "none"   
      document.getElementById("blackjackBet").disabled = false;
      document.getElementById("startBlackjack").disabled = false;
      document.getElementById("blackjackHit").disabled = true
      document.getElementById("blackjackStand").disabled = true
      restartGame = false
      popUp = false;
    }
    document.getElementById("restart").addEventListener("click",restart)
    function restart(){
      document.getElementById("popUp").style.display = "none"
      document.getElementById("dealerCards").innerHTML = "";
      document.getElementById("playerCards").innerHTML = "";
      document.getElementById("blackjackBet").disabled = false;
      document.getElementById("startBlackjack").disabled = false;
      document.getElementById("blackjackHit").disabled = true
      document.getElementById("blackjackStand").disabled = true
      popUp = false;
      blackjackStart()
      restartGame = true
    }

    