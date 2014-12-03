function findMostFreqWord(str) {
    str = str.replace(/[.,-/"/'?!:]+/g, "").toLowerCase();
    var words = str.split(' ');
    var count = 0;
    var maxCount = 0;
    var wordsList = {};

    for(var index in words) {
        count = 0;
        for(var index2 in words) {
            if (words[index] == words[index2] && words[index] != words[index]) {
                count++;
            }
            wordsList[count] = words[index];
        }
    }
    console.log(wordsList);
}

findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');