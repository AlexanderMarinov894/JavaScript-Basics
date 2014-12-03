console.log();
convertKWtoHP(75);
convertKWtoHP(150);
convertKWtoHP(1000);

function convertKWtoHP(number) {
    var horsepower = number * 1.34102209;
    console.log(number + 'kW' + ' are equal to ' + horsepower.toFixed(2) + 'hp.');
}