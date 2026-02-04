 
var betOnVal = "" 
var hortPos = [] 
var pays = [] 
var speed = [] 
var assignedrnd =[] 
let btnDissabled = false; 
var betOnButton = [ 
    document.getElementById("mry"), 
    document.getElementById("res"), 
    document.getElementById("cyn"), 
    document.getElementById("box"), 
    document.getElementById("pnk"), 
    document.getElementById("sup"), 
    document.getElementById("yel"), 
    document.getElementById("bul"), 
  ]; 
  let imgref =[ 
    "https://static.wikitide.net/horseracetestswiki/1/1f/Orangevictory.png", 
    "https://static.wikitide.net/horseracetestswiki/e/e2/Redvictory.png", 
    "https://static.wikitide.net/horseracetestswiki/f/f4/Cyanvictory.png", 
    "https://static.wikitide.net/horseracetestswiki/5/54/Greyvictory.png", 
    "https://static.wikitide.net/horseracetestswiki/5/5d/Pinkvictory.png", 
    "https://static.wikitide.net/horseracetestswiki/1/12/Whitevictory.png", 
    "https://static.wikitide.net/horseracetestswiki/3/36/Yellowvictory.png", 
    "http://static.wikitide.net/horseracetestswiki/0/01/Bluevictory.png", 
  ] //source for Winscreen 
  let hort = [ 
    document.getElementById("orange"), 
    document.getElementById("red"), 
    document.getElementById("cyan"), 
    document.getElementById("black"), 
    document.getElementById("pink"), 
    document.getElementById("white"), 
    document.getElementById("yellow"), 
    document.getElementById("blue"), 
  ]; //source for each horse on the track 
  document 
        .getElementById("start_run_hort") 
        .addEventListener("click", hortStart); 
for (let i = 0; i < 8; i++) { 
  pays[i] = (Math.floor(500+25*i))*0.001 
  pays[8+i] = (Math.floor(700+25*i))*0.001  
  assignedrnd[i] = pays[Math.floor(Math.random(16))]  
  hortPos[i] = 1      
  console.log(pays); 
  //console.log(hortPos) 
  betOnButton[i].addEventListener("click", function() { 
    if(!btnDissabled){ 
      if(betOnVal != "" || betOnVal === 0){ 
        betOnButton[betOnVal].style.borderColor = "rgba(0, 0, 0, 0)" 
      }; 
      betOnVal = i; 
      console.log(betOnVal); 
      betOnButton[i].style.borderColor = "green"; 
    }; 
  });//assigns each button their listiner  
}; //assigns arrays their Value 
function payOutDecider(target){ 
   if (pays.findIndex[assignedrnd[target]] < 8) { 
        if (pays.findIndex[assignedrnd[target]] < 4) { 
          return 2.5 
        } else { 
          return 2 
        } 
      } else { 
        if (pays.findIndex[assignedrnd[target]] < 11) { 
          return 1.5 
        } else { 
          return 1.2 
        } 
      }  
  } 
function hortStart() { 
 
  function floorCoins(){ 
        coins === localStorage.getItem("coins"); 
        localStorage.setItem("coins", Math.floor(coins)); 
        document.getElementById("coinAmt").innerText = localStorage.getItem("coins"); 
  };//function to take the uneven number of coins floor them and put them in 
  function reset() { 
    for (let i = 0; i < 8; i++) { 
      hortPos[i] = 1  
      hort[i].style.transform = "translateX(" + hortPos[i] + "vw)"; 
      btnDissabled = false; 
      assignedrnd[i] = pays[Math.floor(Math.random(16))];   
      betOnButton[i].innerText = "pays 1/" + payOutDecider(i); 
      winPopup(false) 
    } 
    document.getElementById("start_run_hort").disabled = false 
  } //resets the Horserace 
  function above85(value){ 
    return value > 80 
  } //checks if value is above 85 aka if the horse is on the finish line 
  function winPopup(state, win){ 
    if(state === false) { 
      document.getElementById("winner").src = "" 
      document.getElementById("Winpop").style.visibility = "hidden"    
    } 
    if(state === true) { 
      document.getElementById("Winpop").style.visibility = "visible" 
      document.getElementById("winner").src = imgref[hortPos.findIndex(above85)] 
      //document.getElementById("coinAmt").innerText = localStorage.getItem("coins") 
      if(win === true) { 
        document.getElementById("WL").innerText = "You Won:" 
        document.getElementById("winPopamt").innerText = (betting * ((assignedrnd[betOnVal]/2)*10)) 
      } else { 
        document.getElementById("WL").innerText = "You Lost:" 
        document.getElementById("winPopamt").innerText = (betting) 
      } 
    } 
  } //funtion to call up the Winner Screen 
  function winCondition() { 
    if (hortPos.findIndex(above85) === betOnVal) { 
      return true 
    } else { 
      return false 
    } 
  } 
  var betting = document.getElementById("currency_input_hort").value; 
  document.getElementById("start_run_hort").disabled = "true" 
  if (betOnVal !== "" && gambling(betting)){ 
    hortLoop(); 
    btnDissabled = true ; 
  } else { 
    reset() 
  }; 
  for (let i = 0; i < 8; i++) {  
    speed[i] = (((Math.random() * (1 - 0.2) + 0.2) * assignedrnd[i])/ 10);  // => Finalisierung Des Geschwindigkeits Atribut 
  } 
  console.log(speed) 
  function hortLoop(){   
    if (hortPos.find(above85) === undefined) { 
      for (let i = 0; i < 8; i++) {   
        setTimeout(function(){ 
          hortPos[i] += speed[i]; 
          hort[i].style.transform = "translateX(" + hortPos[i] + "vw)";    
          if (i === 7) {hortLoop()} 
        },1)}//ms pro druchgang => schnelligkeit  
       } else { 
        console.log(hortPos.findIndex(above85)); // gibt mir wer gewinner ist 
        document.getElementById("start_run_hort").disabled = "false" 
        gambling(betting, winCondition(), payOutDecider(betOnVal)); 
        floorCoins(); 
        winPopup(true, winCondition()); 
        setTimeout(function () { 
          reset() 
        },5000) 
  }}} 
                                                                                                                                                                          