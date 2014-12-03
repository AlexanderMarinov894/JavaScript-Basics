console.log();
convertDigitToWord(8);
convertDigitToWord(3);
convertDigitToWord(5);

function convertDigitToWord(value) {
    var word = '';
    switch (value) {
        case 1: word = 'one'; break;
        case 2: word = 'two'; break;
        case 3: word = 'tree'; break;
        case 4: word = 'four'; break;
        case 5: word = 'five'; break;
        case 6: word = 'six'; break;
        case 7: word = 'seven'; break;
        case 8: word = 'eight'; break;
        case 9: word = 'nine'; break;
    }
    console.log('The digit ' + value + ' as word is ' + word + '.');
}