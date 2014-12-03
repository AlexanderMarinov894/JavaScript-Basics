function hideOdd (event) {
    for (var index = 0; index < 5; index++) {
        var row = document.getElementsByTagName("td")[index].innerText;
        row = parseInt(row.replace(/[a-z ]+/g, ''));
        if (row%2 != 0) {
            document.getElementsByTagName("td")[index].
                parentNode.removeChild(document.getElementsByTagName("td")[index]);
        }
    }
}