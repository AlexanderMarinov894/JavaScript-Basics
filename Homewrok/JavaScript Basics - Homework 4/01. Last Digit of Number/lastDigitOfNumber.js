function lastDigitAsText(number) {
    var printNum = number;
    if (number < 0) {
        number = number*(-1);
    }
    var lastDigit = number % 10;
    var print ='';

    switch (lastDigit) {
        case 0: print = 'Zero'; break;
        case 1: print = 'One'; break;
        case 2: print = 'Two'; break;
        case 3: print = 'Three'; break;
        case 4: print = 'Four'; break;
        case 5: print = 'Five'; break;
        case 6: print = 'Six'; break;
        case 7: print = 'Seven'; break;
        case 8: print = 'Eight'; break;
        case 9: print = 'Nine'; break;
    }

    console.log('The last digit of '+ printNum +' is: '+print);
}

console.log();
lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);