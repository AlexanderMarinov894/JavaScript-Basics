function findMaxSequence(arr) {
    var count = 0;
    var maxCount = 0;
    var temp = [];
    var longestSeq = [];

    if (arr.length == 1) {
        longestSeq.push(arr[0])
    } else {
        for (var index in arr) {
            if (index > 0) {
                if (arr[index] > arr[index-1]) {
                    count++;
                    temp.push(arr[index-1]);
                } else {
                    temp.push(arr[index-1]);
                    if (count >= maxCount) {
                        longestSeq = [];
                        longestSeq = temp.slice(0);
                        maxCount = count;
                        count = 1;
                        temp = [];
                    }
                }
            }
        }

        if (count >= maxCount) {
            temp.push(arr[index]);
            longestSeq = temp.slice(0);
        }
    }

    if (longestSeq.length > 1) {
        console.log('The longest increasing sequence is: [' + longestSeq + '].');
    } else {
        console.log('There is no longest sequence.');
    }
}

console.log();
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);