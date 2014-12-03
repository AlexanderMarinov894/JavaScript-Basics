function findLargestBySumOfDigits(arr) {
    var maxSum = 0;
    var biggest = 0;
    for (var index in arr) {
        var current = arr[index];

        if (current < 1) {
            current = current*(-1);
        }

        current = current.toString();
        current = current.split('');

        var sum = 0;
        for (var numInd in current) {
            current[numInd] = parseInt(current[numInd]);

            if (current[numInd] != 0 && current[numInd] != 1 && current[numInd] != 2 &&
                current[numInd] != 3 && current[numInd] != 4 && current[numInd] != 5 &&
                current[numInd] != 6 && current[numInd] != 7 && current[numInd] != 8 && current[numInd] != 9){
                console.log('The result is undefined!');
                return;
            }

            sum += current[numInd];
        }
        if (sum > maxSum) {
            maxSum = sum;
            biggest = index;
        }

       //console.log(current);
    }

    console.log('Number ' + arr[biggest] + ' has the largest sum of digits.');
}

console.log();
findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);