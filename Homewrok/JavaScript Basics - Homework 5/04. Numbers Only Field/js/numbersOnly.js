function checkKeys () {
    var pressed = document.getElementById('textField').value;

    if (isNaN(parseInt(pressed[pressed.length-1])) == true) {
        document.getElementById('textField').value = document.getElementById('textField').value.
                                                     replace(/[^0-9]/g, '');
        document.getElementById('textField').style.backgroundColor = 'red';
        blockTextField();
        setTimeout(unblockTextField, 2000);
    } else {
        document.getElementById('textField').style.backgroundColor = 'white';
    }

}

function blockTextField () {
    document.getElementById("textField").disabled = true;
}

function unblockTextField () {
    document.getElementById('textField').style.backgroundColor = 'white';
    document.getElementById("textField").disabled = false;
}