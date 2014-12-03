console.log();
calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);

function calcSupply(age, maxAge, food, foodPerDay) {
    var remainingYears = maxAge - age;
    var remainingDays = remainingYears * 365;
    var quantity = foodPerDay * remainingDays;
    console.log(quantity + ' kg of ' + food + ' will be enough until I am ' + maxAge + ' years old.');
}