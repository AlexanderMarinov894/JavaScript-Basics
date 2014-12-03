function checkBrackets(str) {
    var brackets = '';
    for (var index in str) {
        if (str[index] === '(' || str[index] === ')') {
            brackets += str[index];
        }
    }

    var leftCount = 0;
    var rightCount = 0;
    var compare = brackets.length;
    var brIndex = 0;
    var correct = 'The brackets in the expression "' + str + '" are put correctly.';
    var incorrect = 'The brackets in the expression "' + str + '" are put incorrectly.';

    if (brackets[0] === '(') {
        while (brackets[brIndex] === '(') {
            leftCount++;
            brIndex++;
        }
        compare = compare - leftCount;

        if(compare == leftCount) {
            console.log(correct);
        } else {
            console.log(incorrect);
        }
    } else {
        while (brackets[brIndex] === ')') {
            rightCount++;
            brIndex++;
        }
        compare = compare - rightCount;

        if(compare == rightCount) {
            console.log(correct);
        } else {
            console.log(incorrect);
        }
    }
}

console.log();
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');