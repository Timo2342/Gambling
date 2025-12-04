
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
    document
        .getElementById("test")
        .addEventListener("click", test);
    for (let i = 0; i < 8; i++) {
        betOnButton[i].addEventListener("click", function() {
            betOnVal = i;
            console.log(betOnVal);
        })
};


function hortStart() {
let pays = [
  1.2,
  1.6,
  2.2,
  2.4,
  2,
  1.8,
  1.4,
  3,
]
  
  document.getElementById("start_run_hort").disabled = "true"
  var hort = [
    document.getElementById("orange"),
    document.getElementById("red"),
    document.getElementById("cyan"),
    document.getElementById("black"),
    document.getElementById("pink"),
    document.getElementById("white"),
    document.getElementById("yellow"),
    document.getElementById("blue"),
  ];
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
          if (hortPos.find(above50) !== undefined) {  //Tie Braker aka generiert midway speed mod neu
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
        coins === localStorage.getItem("coins");
        localStorage.setItem("coins", Math.floor(coins));
        document.getElementById("coinAmt").innerText = localStorage.getItem("coins")
    }else{
      gambling(betting, false);
    }}
    document.getElementById("start_run_hort").disabled = false  //reset 
  }}}}
  else {
    document.getElementById("start_run_hort").disabled = false  //reset 
    }}