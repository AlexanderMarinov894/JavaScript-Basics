function compareChars(arr1, arr2) {
    var areEqual = true;

    for (var index in arr1) {
        if (arr1[index] !== arr2[index]) {
            areEqual = false;
        }
    }

    var result = 'The char arrays are: ';
    if (areEqual == true) {
        result += 'Equal';
    } else {
        result += 'Not Equal';
    }
    console.log(result);
}

console.log();
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
             ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'],
             ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
             ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);