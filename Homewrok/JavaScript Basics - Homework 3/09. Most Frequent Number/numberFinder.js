function findMostFreqNum(arr) {
    var count = 1;
    var maxCount = 0;
    var mostFreqNum = 0;
    arr = arr.sort(
        function (a,b) {
            return a-b;
        }
    );

    for (var index in arr) {
        if (index > 0) {
            if (arr[index] === arr[index-1]) {
                count++;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                    mostFreqNum = arr[index-1];
                    count = 1;
                } else {
                    count = 1;
                }
            }
        }
    }

    if (count > maxCount) {
        maxCount = count;
        mostFreqNum = arr[index-1];
    }

    console.log('The element "' + mostFreqNum + '" is the most repeated (' + maxCount + ' times).');
}

console.log();
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);