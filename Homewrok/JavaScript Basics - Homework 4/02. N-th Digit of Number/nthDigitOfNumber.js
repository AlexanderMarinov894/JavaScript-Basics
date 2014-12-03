function findNthDigit(arr) {
    var divider = arr[0];
    var number = arr[1];

    if (number < 0) {
        number *= -1;
    }

    number = number.toString();
    number = number.replace(/[.]/g, '');

    if (number.length >= divider) {
        number = parseInt(number);
        var digit = number % (Math.pow(10, divider));
        console.log('The digit ' + divider + ' of number ' + arr[1] + ' is ' + digit.toString()[0] + '.');
    } else {
        console.log("The number " + arr[1] + " doesn't have " + divider + " digits.")
    }
}

console.log();
findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);