function calculation(event) {
    var input = eval(document.getElementById('expression').value);
    document.getElementById('result').innerHTML = input;
}