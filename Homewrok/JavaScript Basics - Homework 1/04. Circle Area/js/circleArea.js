var radius1 = 7;
var radius2 = 1.5;
var radius3 = 20;

var area1 = circleArea(radius1);
document.getElementById('radius1').innerHTML = 'r = ' + radius1 + '; ';
document.getElementById('area1').innerHTML = 'area = ' + area1;

var area2 = circleArea(radius2);
document.getElementById('radius2').innerHTML = 'r = ' + radius2 + '; ';
document.getElementById('area2').innerHTML = 'area = ' + area2;

var area3 = circleArea(radius3);
document.getElementById('radius3').innerHTML = 'r = ' + radius3 + '; ';
document.getElementById('area3').innerHTML = 'area = ' + area3;

function circleArea(radius) {
    return area = Math.PI * Math.pow(radius, 2);
}