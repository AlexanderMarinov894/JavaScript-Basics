function createArray() {
    var integerArray = [];
    for (var index = 0; index <= 20; index++) {
        integerArray[index] = Math.random(); //just a random number
    }
    index = 0;

    var multipliedIndex = [];
    for(index in integerArray) {
        multipliedIndex[index] = index*5;
    }

    console.log('\nThe multiplied indexes are:');
    console.log.apply(console, multipliedIndex);
}

createArray();