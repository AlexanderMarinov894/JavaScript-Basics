var result = soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
                        ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
                        ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);

console.log('\nYou will work '+ result[0] + ' years on ' + result[1] + '. You will live in ' +
             result[2] + ' and drive ' + result[3] + '.');

function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
    var year = numsArr[Math.floor(Math.random()*numsArr.length)];
    var language  = langsArr[Math.floor(Math.random()*langsArr.length)];;
    var city = citiesArr[Math.floor(Math.random()*citiesArr.length)];;
    var car = carsArr[Math.floor(Math.random()*carsArr.length)];;
    return [year, language, city, car];
}