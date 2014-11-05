var counter = 1;

function change11 (event) {
    if (counter%2 != 0) {
        document.getElementById('1row-1col').innerHTML = 'X';
        document.getElementById('1row-1col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('1row-1col').innerHTML = 'O';
        document.getElementById('1row-1col').style.pointerEvents = 'none';
        counter++;
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell11 = document.getElementById('1row-1col').innerText;
        var cell12 = document.getElementById('1row-2col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;
        var cell21 = document.getElementById('2row-1col').innerText;
        var cell31 = document.getElementById('3row-1col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;

        if ((cell11 == 'X' && cell12 == 'X' && cell13 == 'X') ||
            (cell11 == 'X' && cell21 == 'X' && cell31 == 'X') ||
            (cell11 == 'X' && cell22 == 'X') && cell33 == 'X') {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility='visible';
        } else if ((cell11 == 'O' && cell12 == 'O' && cell13 == 'O') ||
            (cell11 == 'O' && cell21 == 'O' && cell31 == 'O') ||
            (cell11 == 'O' && cell22 == 'O') && cell33 == 'O') {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility='visible';
        }
    }
}

function change12 (event) {
    if (counter%2 != 0) {
        document.getElementById('1row-2col').innerHTML = 'X';
        document.getElementById('1row-2col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('1row-2col').innerHTML = 'O';
        document.getElementById('1row-2col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell12 = document.getElementById('1row-2col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell32 = document.getElementById('3row-2col').innerText;
        var cell11 = document.getElementById('1row-1col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;

        if ((cell11 == 'X' && cell12 == 'X' && cell13 == 'X') ||
            (cell12 == 'X' && cell22 == 'X' && cell32 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell11 == 'O' && cell12 == 'O' && cell13 == 'O') ||
            (cell12 == 'O' && cell22 == 'O' && cell32 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change13 (event) {
    if (counter%2 != 0) {
        document.getElementById('1row-3col').innerHTML = 'X';
        document.getElementById('1row-3col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('1row-3col').innerHTML = 'O';
        document.getElementById('1row-3col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell11 = document.getElementById('1row-1col').innerText;
        var cell12 = document.getElementById('1row-2col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;
        var cell23 = document.getElementById('2row-3col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell31 = document.getElementById('3row-1col').innerText;

        if ((cell11 == 'X' && cell12 == 'X' && cell13 == 'X') ||
            (cell13 == 'X' && cell23 == 'X' && cell33 == 'X') ||
            (cell13 == 'X' && cell22 == 'X') && cell31 == 'X') {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell11 == 'O' && cell12 == 'O' && cell13 == 'O') ||
            (cell13 == 'O' && cell23 == 'O' && cell33 == 'O') ||
            (cell13 == 'O' && cell22 == 'O') && cell31 == 'O') {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change21 (event) {
    if (counter%2 != 0) {
        document.getElementById('2row-1col').innerHTML = 'X';
        document.getElementById('2row-1col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('2row-1col').innerHTML = 'O';
        document.getElementById('2row-1col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell21 = document.getElementById('2row-1col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell23 = document.getElementById('2row-3col').innerText;
        var cell11 = document.getElementById('1row-1col').innerText;
        var cell31 = document.getElementById('3row-1col').innerText;

        if ((cell11 == 'X' && cell21 == 'X' && cell31 == 'X') ||
            (cell21 == 'X' && cell22 == 'X' && cell23 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell11 == 'O' && cell21 == 'O' && cell31 == 'O') ||
            (cell21 == 'O' && cell22 == 'O' && cell23 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change22 (event) {
    if (counter%2 != 0) {
        document.getElementById('2row-2col').innerHTML = 'X';
        document.getElementById('2row-2col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('2row-2col').innerHTML = 'O';
        document.getElementById('2row-2col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell11 = document.getElementById('1row-1col').innerText;
        var cell12 = document.getElementById('1row-2col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;
        var cell21 = document.getElementById('2row-1col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell23 = document.getElementById('2row-3col').innerText;
        var cell31 = document.getElementById('3row-1col').innerText;
        var cell32 = document.getElementById('3row-2col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;

        if ((cell21 == 'X' && cell22 == 'X' && cell23 == 'X') ||
            (cell12 == 'X' && cell22 == 'X' && cell32 == 'X') ||
            (cell11 == 'X' && cell22 == 'X' && cell33 == 'X') ||
            (cell13 == 'X' && cell22 == 'X' && cell31 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell21 == 'O' && cell22 == 'O' && cell23 == 'O') ||
            (cell12 == 'O' && cell22 == 'O' && cell32 == 'O') ||
            (cell11 == 'O' && cell22 == 'O' && cell33 == 'O') ||
            (cell13 == 'O' && cell22 == 'O' && cell31 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change23 (event) {
    if (counter%2 != 0) {
        document.getElementById('2row-3col').innerHTML = 'X';
        document.getElementById('2row-3col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('2row-3col').innerHTML = 'O';
        document.getElementById('2row-3col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell21 = document.getElementById('2row-1col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell23 = document.getElementById('2row-3col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;

        if ((cell21 == 'X' && cell22 == 'X' && cell23 == 'X') ||
            (cell13 == 'X' && cell23 == 'X' && cell33 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell21 == 'O' && cell22 == 'O' && cell23 == 'O') ||
            (cell13 == 'O' && cell23 == 'O' && cell33 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change31 (event) {
    if (counter%2 != 0) {
        document.getElementById('3row-1col').innerHTML = 'X';
        document.getElementById('3row-1col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('3row-1col').innerHTML = 'O';
        document.getElementById('3row-1col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell31 = document.getElementById('3row-1col').innerText;
        var cell32 = document.getElementById('3row-2col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;
        var cell11 = document.getElementById('1row-1col').innerText;
        var cell21 = document.getElementById('2row-1col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;

        if ((cell11 == 'X' && cell21 == 'X' && cell31 == 'X') ||
            (cell31 == 'X' && cell32 == 'X' && cell33 == 'X') ||
            (cell31 == 'X' && cell22 == 'X' && cell13 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell11 == 'O' && cell21 == 'O' && cell31 == 'O') ||
            (cell31 == 'O' && cell32 == 'O' && cell33 == 'O') ||
            (cell31 == 'O' && cell22 == 'O' && cell13 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change32 (event) {
    if (counter%2 != 0) {
        document.getElementById('3row-2col').innerHTML = 'X';
        document.getElementById('3row-2col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('3row-2col').innerHTML = 'O';
        document.getElementById('3row-2col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell31 = document.getElementById('3row-1col').innerText;
        var cell32 = document.getElementById('3row-2col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;
        var cell12 = document.getElementById('1row-2col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;

        if ((cell31 == 'X' && cell32 == 'X' && cell33 == 'X') ||
            (cell12 == 'X' && cell22 == 'X' && cell32 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell31 == 'O' && cell32 == 'O' && cell33 == 'O') ||
            (cell12 == 'O' && cell22 == 'O' && cell32 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function change33 (event) {
    if (counter%2 != 0) {
        document.getElementById('3row-3col').innerHTML = 'X';
        document.getElementById('3row-3col').style.pointerEvents = 'none';
        counter++;
    } else {
        document.getElementById('3row-3col').innerHTML = 'O';
        document.getElementById('3row-3col').style.pointerEvents = 'none';
        counter++
    }

    if (counter == 10) {
        draw (counter);
    } else {
        var cell31 = document.getElementById('3row-1col').innerText;
        var cell32 = document.getElementById('3row-2col').innerText;
        var cell33 = document.getElementById('3row-3col').innerText;
        var cell13 = document.getElementById('1row-3col').innerText;
        var cell23 = document.getElementById('2row-3col').innerText;
        var cell22 = document.getElementById('2row-2col').innerText;
        var cell11 = document.getElementById('1row-1col').innerText;

        if ((cell31 == 'X' && cell32 == 'X' && cell33 == 'X') ||
            (cell13 == 'X' && cell23 == 'X' && cell33 == 'X') ||
            (cell33 == 'X' && cell22 == 'X' && cell11 == 'X')) {
            document.getElementById('result').textContent = 'X WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        } else if ((cell31 == 'O' && cell32 == 'O' && cell33 == 'O') ||
            (cell13 == 'O' && cell23 == 'O' && cell33 == 'O') ||
            (cell33 == 'O' && cell22 == 'O' && cell11 == 'O')) {
            document.getElementById('result').textContent = 'O WON!';
            document.getElementById('gameWon').style.visibility = 'visible';
        }
    }
}

function newGame (event) {
    location.reload();
}

function draw (counter) {
    if (counter = 10) {
        document.getElementById('result').textContent = 'Draw!!!';
        document.getElementById('gameWon').style.visibility='visible';
    }
}