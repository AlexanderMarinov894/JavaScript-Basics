function findMaxSequence(arr) {
    var count = 1;
    var maxCount = 0;
    var longest = arr[0];

    for (var index in arr) {
        if (arr.length == 1) {
            maxCount = 1;
            break;
        } else {
            if (index > 0) {
                if (arr[index] === arr[index - 1]) {
                    count++;
                } else {
                    if (count >= maxCount) {
                        maxCount = count;
                        longest = arr[index - 1];
                    }
                    count = 1;
                }
            }
        }
    }

    if (count >= maxCount && arr.length != 1) { // Checks if the last element is repeated
        longest = arr[index - 1];
        maxCount = count;
    }

    var repeatedElements = [];
    for (index = 0; index < maxCount; index++) { // Creates a new array with the most repeated element N times
        repeatedElements.push(longest);
    }

    console.log('The longest sequence is [' + repeatedElements + ']. The element "' + longest +
                '" is repeated ' + maxCount + ' times.');
}

console.log();
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);