console.log();
evenNumber(3);
evenNumber(127);
evenNumber(588);

function evenNumber(number) {
    var print = 'The number ' + number + ' is even? ';

    if(number%2 == 0) {
        console.log(print + 'True');
    } else {
        console.log(print + 'False');
    }
}