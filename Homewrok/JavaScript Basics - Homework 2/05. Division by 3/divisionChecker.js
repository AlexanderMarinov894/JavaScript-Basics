console.log();
divisionBy3(12);
divisionBy3(188);
divisionBy3(591);

function divisionBy3(number) {
    if(number%3 == 0) {
        console.log('The number ' + number + ' is divided by 3 without remainder.');
    } else {
        console.log('The number ' + number + ' is not divided by 3 without remainder.');
    }
}