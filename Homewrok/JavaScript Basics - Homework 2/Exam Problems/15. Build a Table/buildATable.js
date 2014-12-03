Solve ([5, 10]);

function Solve(arr) {
    var start = arr[0];
    var end = arr[1];

    console.log('<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');

    for (var print = start; print <= end; print++) {
        var isFibonacci = '';
        var calculatePos = 5*(Math.pow(print,2)) + 4;
        var calculateNeg = 5*(Math.pow(print,2)) - 4;

        if ((Math.sqrt(calculatePos)%1 == 0) || (Math.sqrt(calculateNeg)%1 == 0)) {
            isFibonacci = 'yes';
        } else {
            isFibonacci = 'no';
        }

        console.log('<tr><td>' + print + '</td><td>'+ Math.pow(print,2) +'</td><td>'+ isFibonacci +'</td></tr>');
    }
    console.log('</table>');
}
