function printNumbers(number) {
    var result = []; //an array with all numbers not divisible by 4 and 5

    if (number > 0) {
        console.log('\nThe numbers in the interval [1,' + number + '], not divisible by 4 or by 5 are: ');

        for (var i = 1; i <= number; i++) {
            if ((i%4 != 0) && (i%5 != 0)) {
                result.push(i); //adding a number to the array
            }
        }
        console.log.apply(console, result); //print the numbers on one line

    } else {
        console.log('\n' + number + ' is not a positive number!')
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);