console.log();
treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);

function treeHouseCompare(arr) {
    var houseArea = (Math.pow(arr[0],2)) + ((1/2)*arr[0]*(arr[0]-1) ); //house area = lower part area + roof area
    var treeArea = (arr[1]*(arr[1]/3)) + (Math.PI* Math.pow((arr[1]/3)*2,2)); //tree area = lower part area + crown area
    var print = 'The bigger area is: ';

    if (houseArea > treeArea) {
        console.log(print + 'house/' + houseArea.toFixed(2));
    } else if (treeArea > houseArea) {
        console.log(print + 'tree/' + treeArea.toFixed(2));
    } else if (houseArea == treeArea) {
        console.log('Both areas are equal -> ' + houseArea.toFixed(2));
    }
}

