function countSubstringOccur(arr) {
    var word = arr[0].toLowerCase();
    var text = arr[1].toLowerCase();
    var count = 0;
    var letter = 0;

    while (letter != (text.length-word.length)) {
        var check = text.substring(letter, word.length+letter);
        if (check === word) {
            count++;
        }
        letter++;
    }

    console.log('The substring ' + word + ' is contained ' + count + ' times in the text.');
}

console.log();
countSubstringOccur(["in",
    "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. " +
    "So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(["your",
    "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."]);
countSubstringOccur(["but",
    "But you were living in another world tryin' to get your message through."]);