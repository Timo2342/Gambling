//DocumentFragment.addEventListener("DOMContentLaoded",)

const { createElement } = require("react");


let coins = 0;
window.onload = (event) => {
  if (localStorage.getItem("coins") != null) {
    coins = localStorage.getItem("coins");
    coins = coins * 1
  } else {
    localStorage.setItem("coins", 0);
    coins = localStorage.getItem("coins");
    coins = coins * 1
  }
  document.getElementById("coinAmt").innerText = coins;
  switch(window.location.pathname){
    case "/homepage.html":
      break;
    case "/pferderennen.html":
      document.getElementById("start_run_hort").addEventListener("click", hortStart)
    break;
    case "/blackjack.html":
      document.getElementById("startBlackjack").addEventListener("click", blackjackStart)
      break;
    case "/shop.html":
       document.getElementById("buy").addEventListener("click", buy(10))
      break;
  }
};

function gambling(bet, win, multiplier) {
  if (bet <= coins) {
    if (win === true) {
      if (multiplier > 0) {
        coins += multiplier * bet;
      }
      coins += bet;
    } else if (win === false){
      coins -= bet;
    }
    localStorage.setItem("coins", coins);
    document.getElementById("coinAmt").innerText = coins;
    return true
  }else{
    alert("Not enough coins")
    return false
  }
}
function buy(amount){
coins += amount;
localStorage.setItem("coins", coins);
document.getElementById("coinAmt").innerText = coins;
} 

function hortStart() {
  var Speed = Math.floor((Math.random() *10000)+1000)
  console.log(Speed);
  
  document.getElementById("orange").animate(
    [
      // key frames
      { transform: "translateX(80vw)" },
    ],
    {
      // sync options
      duration: Speed,
      iterations: 1,
      rangeEnd: { transform: "translateX(80vw)" },
    }
  );
  

  document.getElementById("orange").style.left= "80vw";
}
let bet;
function blackjackStart(){
bet = document.getElementById("blackjackBet").value
if(gambling(bet)){
  
}
}