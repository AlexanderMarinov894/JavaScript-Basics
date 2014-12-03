function findMinAndMax(arr) {
    var sortedArr = arr.sort(
       function (a,b) {
           return a>b;
       }
    );

    console.log('\nMin -> ' + sortedArr[0]); //first element
    console.log('Max -> ' + sortedArr[sortedArr.length-1]); //last element
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);