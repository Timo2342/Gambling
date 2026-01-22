
var betOnVal = ""
var hortPos = []
var pays = []
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
  hortPos[i] = 1   
  console.log(pays);
  console.log(hortPos)
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
var  state = false
var win = false
function hortStart() {
  function floorCoins(){
        coins === localStorage.getItem("coins");
        localStorage.setItem("coins", Math.floor(coins));
        document.getElementById("coinAmt").innerText = localStorage.getItem("coins");
  };
  function reset() {
    for (let i = 0; i < 8; i++) {
      hortPos[i] = 1 
      betOnButton[i].disabled = "false"
      btnDissabled = false;
    }
  }
  function above85(value){
    return value > 80
  }
  function winPopup(State, win){
    if(state = false) {
      document.getElementById("winner").src = ""
      document.getElementById("Winpop").style.visibility = "hidden" 
    }
    if(state = true) {
      document.getElementById("Winpop").style.visibility = "visible"
      document.getElementById("winner").src = imgref[hortPos.findIndex(above85)]
      //document.getElementById("coinAmt").innerText = localStorage.getItem("coins")
      if(win = true) {
        document.getElementById("WL").innerText = "You Won:"
        document.getElementById("winPopamt").innerText = (betting * pays[betOnVal])
      } else {
        document.getElementById("WL").innerText = "You Lost:"
        document.getElementById("winPopamt").innerText = (betting)
      }
    }
  }
  var betting = document.getElementById("currency_input_hort").value;
  document.getElementById("start_run_hort").disabled = "true"
  if (betOnVal !== "" && gambling(betting)){
    for (let i = 0; i < 8; i++) {
      hortPos[i] = 1;
      betOnButton[i].disabled = "true"
      assignedrnd[i] = pays[Math.floor(Math.random() * 16)]
      };
    hortLoop();
    btnDissabled = true ;
  } else {
    document.getElementById("start_run_hort").disabled = false  //reset ;
  };
  function hortLoop(){  
    if (hortPos.find(above85) === undefined) {
      for (let i = 0; i < 8; i++) {  
        setTimeout(function(){
          var speed = ((Math.random()* assignedrnd[i])/ 10);  // => Finalisierung Des Geschwindigkeits Atribut
          hortPos[i] += speed;
          hort[i].style.transform = "translateX(" + hortPos[i] + "vw)";   
          if (i === 7) {hortLoop()}
        },1)}//ms pro druchgang => schnelligkeit 
       } else {
        console.log(hortPos.findIndex(above85)); // gibt mir wer gewinner ist
      if (hortPos.findIndex(above85) === betOnVal ) {
        gambling(betting, true, (1/assignedrnd[betOnVal]));
        floorCoins();
        winPopup(true,true);
        setTimeout(function () {
          winPopup(false)
          reset()
        },5000)
      }else{
        gambling(betting, false);
        winPopup(true,false)
        setTimeout(function() {
          winPopup(false)
          reset()
        },5000)
    }
//    document.getElementById("start_run_hort").disabled = false  //reset 
  }}}