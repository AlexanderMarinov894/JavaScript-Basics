var mouseX = 0;
var mouseY = 0;

function mouseCoordinates(move) {
    mouseX = move.pageX;
    mouseY = move.pageY;

    if (mouseX < 0)
    {
        mouseX = 0
    }
    if (mouseY < 0){
        mouseY = 0
    }

    document.Coordinates.X.value = mouseX;
    document.Coordinates.Y.value = mouseY;
}

document.onmousemove = mouseCoordinates;