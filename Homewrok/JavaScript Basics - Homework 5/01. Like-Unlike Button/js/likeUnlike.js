var click = 1;

function change(event) {
    if (click % 2 != 0) {
        document.getElementById("likeButton").innerHTML = "Unlike";
    } else {
        document.getElementById("likeButton").innerHTML = "Like";
    }
    click++;
}