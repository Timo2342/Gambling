
var betOnVal = ""
var hortPos = []
var pays = []
var assignedrnd =[]
var isDisabled = 0
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
    document
        .getElementById("start_run_hort")
        .addEventListener("click", hortStart);
    for (let i = 0; i < 8; i++) {
        betOnButton[i].addEventListener("click", function() {
          if(betOnVal != "" || betOnVal === 0, isDisabled = 0){
          betOnButton[betOnVal].style.borderColor = "rgba(0, 0, 0, 0)"
          }
            betOnVal = i;
            console.log(betOnVal);
            betOnButton[i].style.borderColor = "green"
      });//assigns each button their listiner 
    pays[i] = (Math.floor(500+25*i))*0.001
    pays[8+i] = (Math.floor(700+25*i))*0.001
    hortPos[i] = 1   
    console.log(pays);
    console.log(hortPos)
}; //assigns arrays their Value
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
function hortStart() {
var betting = document.getElementById("currency_input_hort").value;
if (betOnVal !== "" && gambling(betting)){
  isDisabled = 1 
  for (let i = 0; i < 8; i++) {
    hortPos[i] = 1;
    betOnButton[i].disabled = "true"
    assignedrnd[i] = pays[Math.floor(Math.random() * 16)]}
  document.getElementById("winner").src = ""
  document.getElementById("Winpop").style.visibility = "hidden" 
  document.getElementById("start_run_hort").disabled = "true"
  function above85(value){
    return value > 80
  }
  function above50(value){
    return value > 50
  }
  hortLoop()
  function hortLoop(){
    
    for (let i = 0; i < 8; i++) {
      if (hortPos.find(above85) === undefined) {  
        setTimeout(function(){
          var speed = (Math.random()* assignedrnd[i])/ 10;  // => generierung der Zufallseinheit0;;
          hortPos[i] += speed;
          hort[i].style.transform = "translateX(" + hortPos[i] + "vw)";   //0.085 => weite des schrittes pro zufallseinheit
          if (hortPos.find(above50) !== undefined) {  //Tie Braker aka generiert midway speed modi neu

          }
          if (i === 7) {hortLoop()}
  },1)} //ms pro druchgang => schnelligkeit
  else {
    console.log(hortPos.findIndex(above85)); // gibt mir wer gewinner ist
    if(i===7){ if (hortPos.findIndex(above85) === betOnVal ) {
        gambling(betting, true, pays[betOnVal]);
        console.log(document.getElementById("Winpop").class);
          document.getElementById("Winpop").style.visibility = "visible"
          document.getElementById("winner").src = imgref[hortPos.findIndex(above85)]
        coins === localStorage.getItem("coins");
        localStorage.setItem("coins", Math.floor(coins));
        document.getElementById("coinAmt").innerText = localStorage.getItem("coins")
        document.getElementById("winPopamt").innerText = (betting * pays[betOnVal])
        document.getElementById("WL").innerText = "You Won:"
        setTimeout(function() {
          isDisabled = 0 
          document.getElementById("Winpop").style.visibility = "hidden"
            for (let i = 0; i < 8; i++) {
              hortPos[i] = 1;
              betOnButton[i].disabled = "false"}
        },5000)
    }else{
      gambling(betting, false);
        document.getElementById("Winpop").style.visibility = "visible"
          document.getElementById("winner").src = imgref[hortPos.findIndex(above85)]
        document.getElementById("winPopamt").innerText = (betting)
        document.getElementById("WL").innerText = "You Lost:"
        setTimeout(function() {
          isDisabled = 0  
          document.getElementById("Winpop").style.visibility = "hidden"
            for (let i = 0; i < 8; i++) {
              hortPos[i] = 1;s
              betOnButton[i].disabled = "false"}
        },5000)
    }}
    document.getElementById("start_run_hort").disabled = false  //reset 
  }}}}
  else {
    document.getElementById("start_run_hort").disabled = false  //reset 
    }}