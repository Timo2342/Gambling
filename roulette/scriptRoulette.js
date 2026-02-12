let chip = document.getElementById("chip")
let isDown = false;
let mousePosition;
let offset = [0,0];
let bets = []
 $( function() {
    $( ".chips" ).draggable();
    $( ".numberDiv" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          bets.push(this)
          console.log(bets);
      },
      out: function( event, ui ) {
        $( this )
          .removeClass( "ui-state-highlight" )
          if(bets.indexOf(this) != -1){
              bets.splice(bets.indexOf(this),1)
              console.log(bets);
        }
      }
    });
 });
for(let e = 0; e < 3;e++){
    for(let i = 1;i < 13;i++){
        let element = document.createElement("div")
        document.getElementById("tableNumbers").appendChild(element)
        element.className = "numberDiv"
        element.id = "number" +  ((i * 3) - e)
        let number = document.createElement("p")
        element.appendChild(number)
        number.innerHTML = ((i * 3) - e)
    }
}