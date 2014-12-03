function sortArray(arr) {
    arr = arr.sort(
        function (a,b) {
            return a - b;
        }
    );
    console.log('The sorted array is: [' + arr + '].');
}

console.log();
sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);