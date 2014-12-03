function findCardFrequency(str) {
    var cardNumbers = str.split(/[♥♣♦♠ ]+/g);
    var cards = cardNumbers.filter(function(f){
        return f!==''
    });
    var counter = {};

    for(var i = 0; i < cards.length; i++) {
        var key = cards[i];
        if(!counter[key]) {
            counter[key] = 0;
        }
        counter[key] += 1;
    }

    for(i = 0; i < cards.length; i++) {
        key = cards[i];
        if(counter[key]) {
            var frequent = ((counter[key]/cards.length) * 100).toFixed(2);
            console.log(key + ' -> ' + frequent + '%');
            delete counter[key];
        }
    }
    console.log();
}

console.log();
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');