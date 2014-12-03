/*Solved the problem in a little bit more complex way*/

function biggerThanNeighbors(index, arr) {
    var result = '';

    var printStart = 'Number ';
    var printEndBigger = ' is bigger than both neighbours.';
    var printEndBiggerOne = ' is bigger than only one neighbour.';
    var printEndNotBigger = ' is not bigger than any neighbours.';
    var printLast = ' (last element)';
    var printFirst = ' (first element)';
    var printIndex = '[index: '+ index +']';

    if (index < arr.length-1 && index > 0) {
        if (arr[index] > arr[index-1] && arr[index] > arr[index+1]) {
            result = printStart + arr[index] + printIndex + printEndBigger;
        } else if ((arr[index] > arr[index-1] && arr[index] <= arr[index+1]) ||
                   (arr[index] <= arr[index-1] && arr[index] > arr[index+1])) {
            result = printStart + arr[index] + printIndex + printEndBiggerOne;
        } else if (arr[index] <= arr[index-1] && arr[index] <= arr[index+1]) {
            result = printStart + arr[index] + printIndex + printEndNotBigger;
        }
    } else if (index == arr.length-1) {
        if (arr[index] > arr[index-1]) {
            result = printStart + arr[index] + printIndex + printEndBiggerOne + printLast;
        } else {
            result = printStart + arr[index] + printIndex + printEndNotBigger + printLast;
        }
    } else if (index == 0) {
        if (arr[0] > arr[1]) {
            result = printStart + arr[index] + printIndex + printEndBiggerOne + printFirst;
        } else {
            result = printStart + arr[index] + printIndex + printEndNotBigger + printFirst;
        }
    } else {
        result = 'Invalid index!'
    }

    console.log(result);
}

console.log();
biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
biggerThanNeighbors(0, [1, 2, 5, 3, 4]);