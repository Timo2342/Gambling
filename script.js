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
}

function gambling(bet, win, multiplier) {
 if(bet === ""){
  alert("Input Bet")
  return false;
}else if (bet * 1<= 0) {
    alert("Bet must be over 0");
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
  } else {
    alert("Not enough coins");
    return false;
  }
}
function buy() {
  coins += 10;
  localStorage.setItem("coins", coins);
  document.getElementById("coinAmt").innerText = coins;
  console.log(+10);
  
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
    chosenCard = "../images/cardDeck/" + cardSuits + "_" + cardNumber + ".jpg";
    if (usedCards.includes(chosenCard) === true) {
      card();
    }
  }
  
  if (usedCards.includes(chosenCard) === false) {
    usedCards.push(chosenCard);
    return chosenCard;
  }
  }

function getCardCount(card) {
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