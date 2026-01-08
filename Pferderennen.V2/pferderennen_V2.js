
var betOnVal = ""
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
            betOnVal = i;
            console.log(betOnVal);
        })
}; //assigns each button their id 
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
let pays = [
  1.2,
  1.6,
  2.2,
  2.4,
  2,
  1.8,
  1.4,
  3,
] //source for bet to pay Value
let chanceList = [
    1/64,
    1/60,
    1/48,
    1/40,
    1/32,
    1/24,
    1/20,
    1/16,
    1/12,
    1/8,
    1/5,
    1/4,
] //Chances Displayed on button
let chanceListMath = [
    64,
    60,
    48,
    40,
    32,
    24,
    20,
    16,
    12,
    8,
    5,
    4,
] //Chances for the Calculation
let multiplier = [
    0.45,
    0.5,
    0.55,
    0.6,
    0.65,
    0.7,
    0.75,
    0.8,
]
var assignedChance = []
function hortStart() {
    for (let i = 0; i < 8; i++) {
        Math.random() * (16 - 1) + 1;
    }
    for (let i = 0; i < 8; i++) {
        Math.random() * (chanceListMath[i] - 1) + 1;
    }
  document.getElementById("Winpop").style.visibility = "hidden" 
  document.getElementById("start_run_hort").disabled = "true"
  function above85(value){
    return value > 80
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
  var hortrndspeed =[ //randomizer for the speed value
    Math.random()*(1.50-0.75)+0.75,
    Math.random()*(1.40-0.70)+0.70,
    Math.random()*(1.25-0.63)+0.63,
    Math.random()*(1.20-0.60)+0.60,
    Math.random()*(1.30-0.65)+0.65,
    Math.random()*(1.35-0.68)+0.68,
    Math.random()*(1.45-0.73)+0.73,
    Math.random()*(1.10-0.50)+0.50,
  ];
var betting = document.getElementById("currency_input_hort").value;
  if (betOnVal !== "" && gambling(betting)){
    //console.log(hortrndspeed);
    //gambling(betting, false);
  hortLoop()
  function hortLoop(){
    for (let i = 0; i < 8; i++) {
      if (hortPos.find(above85) === undefined) {  
        setTimeout(function(){
          var speed = (Math.random()* hortrndspeed[i])/ 10;  // => generierung der Zufallseinheit0;;
          hortPos[i] += speed;
          hort[i].style.transform = "translateX(" + hortPos[i] + "vw)";   //0.085 => weite des schrittes pro zufallseinheit
          if (hortPos.find(above50) !== undefined) {  //Tie Braker aka generiert midway speed modi neu
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
            //console.log(hortrndspeed);
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
          document.getElementById("Winpop").style.visibility = "hidden"
        },5000)
    }else{
      gambling(betting, false);
        document.getElementById("Winpop").style.visibility = "visible"
          document.getElementById("winner").src = imgref[hortPos.findIndex(above85)]
        document.getElementById("winPopamt").innerText = (betting)
        document.getElementById("WL").innerText = "You Lost:"
        setTimeout(function() {
          document.getElementById("Winpop").style.visibility = "hidden"
        },5000)
    }}
    document.getElementById("start_run_hort").disabled = false  //reset 
  }}}}
  else {
    document.getElementById("start_run_hort").disabled = false  //reset 
    }}