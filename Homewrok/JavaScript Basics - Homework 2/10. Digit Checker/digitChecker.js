console.log();
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);

function checkDigit(number) {
    var print = 'The third digit of ' + number + ' is 3? ';
    number = number % 1000;
    number = parseInt(number/100);

    if (number == 3) {
        console.log(print + 'True');
    } else {
        console.log(print + 'False');
    }
}