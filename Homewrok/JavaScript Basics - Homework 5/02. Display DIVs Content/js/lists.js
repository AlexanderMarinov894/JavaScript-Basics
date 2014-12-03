for (var index = 0; index < 5; index++) {
    var div = document.getElementsByTagName("div")[index].innerText;
    if (div != '') {
        var ul = document.getElementById("result");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(div));
        ul.appendChild(li);
    }
    console.log(div);
}