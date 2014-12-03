function reverseString(str) { //Using the function for string reversing from Problem 10
    var reversedStr = [str.length];
    var revIndex = str.length-1;
    for (var index in str) {
        reversedStr[revIndex] = str[index];
        revIndex--;
    }

    reversedStr = reversedStr.join('');
    return reversedStr;
}

function findPalindromes(str) {
    str = str.replace(/[.,-/"/'?!:]+/g, "").toLowerCase();
    var words = str.split(' ');
    var leftHalf = '';
    var rightHalf = '';
    var palindromes = [];
    for (var index = 0; index < words.length; index++) {
        if (words[index].length%2 == 0) {
            leftHalf = words[index].substring(0,words[index].length/2);
            rightHalf = words[index].substring(words[index].length/2,words[index].length);
            rightHalf = reverseString(rightHalf); //Reversing the second half of the word
        } else {
            leftHalf = words[index].substring(0,words[index].length/2);
            rightHalf = words[index].substring(words[index].length/2+1,words[index].length);
            rightHalf = reverseString(rightHalf); //Reversing the second half of the word
        }

        if (leftHalf == rightHalf || words[index].length == 1) {
            palindromes.push(words[index]);
        }
    }

    console.log('The palindromes in the text are: ' + palindromes);
}

console.log();
findPalindromes('There is a man, his name was Bob.');