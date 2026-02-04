let chip = document.getElementById("chip")
let isDown = false;
let mousePosition;
let offset = [0,0];
chip.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        chip.offsetLeft - e.clientX,
        chip.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        chip.style.left = (mousePosition.x + offset[0]) + 'px';
        chip.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);