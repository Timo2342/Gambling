 
var betOnVal = "" 
var assignIndex = []
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
function startUp() {
  for (let i = 0; i < 8; i++) { 
    pays[i] = (Math.floor(500+25*i))*0.001 
    pays[8+i] = (Math.floor(700+25*i))*0.001  
    assignIndex[i] = Math.floor(Math.random()*16)
    hortPos[i] = 1      
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
  }}; //assigns arrays their Value 
function payOutDecider(target){ 
   if (assignIndex[target] < 8) { 
        if (assignIndex[target] < 4) { 
          return 2.5 
        } else { 
          return 2 
        } 
      } else { 
        if (assignIndex[target] < 11) { 
          return 1.5 
        } else { 
          return 1.2 
        } 
      }  
  } 
function assign() {
  for(let i = 0; i < 8; i++){
      assignedrnd[i] = pays[assignIndex[i]];
  }}
function update(){
  for(let i = 0; i < 8; i++){
    console.log(payOutDecider(i));
    
    betOnButton[i].innerText = "pays 1/" + payOutDecider(i); 
  }
  }
function floorCoins(){ 
        coins === localStorage.getItem("coins"); 
        localStorage.setItem("coins", Math.floor(coins)); 
        document.getElementById("coinAmt").innerText = localStorage.getItem("coins"); 
  };//function to take the uneven number of coins floor them and put them in 
function reset(reasign) { 
    for (let i = 0; i < 8; i++) { 
      hortPos[i] = 0  
      hort[i].style.transform = "translateX(" + hortPos[i] + "vw)"; 
      btnDissabled = false; 
    } 
    document.getElementById("start_run_hort").disabled = false 
    if(reasign === true){
      assign()
      update()
      }
    } //resets the Horserace 
startUp()
assign()
update()
function hortStart() { 
  console.log(betOnVal); 
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
        document.getElementById("winPopamt").innerText = (betting * payOutDecider(hortPos.findIndex(above85))) 
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
      for (let i = 0; i < 8; i++) {  
        speed[i] = (((Math.random() * (1 - 0.2) + 0.2) * assignedrnd[i])/ 10);  // => Finalisierung Des Geschwindigkeits Atribut 
        };
    console.log(speed) 
    } else { 
      reset(false) 
    }; 

  function hortLoop(){   
    console.log(above85(hortPos));
    console.log(hortPos.findIndex(above85));
    if (above85(hortPos) === false) { 
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
          reset(true) 
        },5000) 
  }}} 
                                                                                                                                                                          