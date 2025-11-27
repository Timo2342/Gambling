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