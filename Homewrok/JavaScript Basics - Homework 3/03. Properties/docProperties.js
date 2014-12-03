/*WORKS ONLY IN THE BROWSER'S CONSOLE*/

function displayProperties() {
    var properties = [];
    for(var key in document) {
        properties.push(key);
    }
    properties = properties.sort();

    for(var index in properties) {
        console.log(properties[index]);
    }
}

displayProperties();