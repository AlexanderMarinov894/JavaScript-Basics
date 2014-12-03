console.log();
bitChecker(333);
bitChecker(425);
bitChecker(2567564754);

function bitChecker(number) {
    var mask = 1;
    var bitNumber = number >> 3;
    var thirdBit = number & mask;
    var print = 'The third bit of ' + number + ' is 1? ';

    if (thirdBit == 1) {
        console.log(print + 'True')
    } else {
        console.log(print + 'False')
    }
}