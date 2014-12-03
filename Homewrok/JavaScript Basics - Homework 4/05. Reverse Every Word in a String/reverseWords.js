function reverseWordsInString(str) {
    var print = '';
    var words = str.split(' ');
    for (var index in words) {
        var singleWord = words[index].split('').reverse().join(''); //Convert to an array,reverse,than back to a string
        print += singleWord + ' ';
    }
    console.log(print.trim());
}

console.log('\nThe reversed strings are:');
reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');