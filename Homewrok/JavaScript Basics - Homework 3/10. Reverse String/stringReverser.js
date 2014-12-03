function reverseString(str) {
    var reversedStr = [str.length];
    var revIndex = str.length-1;
    for (var index in str) {
        reversedStr[revIndex] = str[index];
        revIndex--;
    }

    reversedStr = reversedStr.join('');
    console.log('The reversed string "' + str + '" is: "' + reversedStr + '".');
}

console.log();
reverseString('sample');
reverseString('softUni');
reverseString('java script');