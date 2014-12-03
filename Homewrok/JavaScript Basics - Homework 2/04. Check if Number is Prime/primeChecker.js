console.log();
isPrime(7);
isPrime(254);
isPrime(587);

function isPrime(number) {
    var print = 'The number ' + number + ' is prime? ';
    var isPrime = 'True';

    for (var i = 2; i <= number/2; i+=1) {

        if (number%2 == 0) {
            isPrime = 'False';
        }
    }

    if (number == 0 || number == 1) {
        isPrime = 'False';
    }
    console.log(print + isPrime);
}