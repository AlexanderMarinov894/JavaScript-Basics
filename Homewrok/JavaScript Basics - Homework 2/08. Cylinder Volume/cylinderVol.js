console.log();
calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);

function calcCylinderVol(arr) {
    var volume = Math.PI * Math.pow(arr[0], 2) * arr[1]; //V = π * r^2 * h
    console.log('The volume of the cylinder is ' + volume.toFixed(3) + ' .');
}
