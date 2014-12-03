function countDivs(html) {
    var divMatches = html.match(/<div/g);;
    console.log('The html code contains ' + divMatches.length + ' <div> elements.');
}

console.log();
countDivs('<!DOCTYPE html>' +
'<html>' +
'<head lang="en">' +
'<meta charset="UTF-8">' +
'<title>index</title>' +
'<script src="/yourScript.js" defer></script>' +
'</head>' +
'<body>' +
'<div id="outerDiv">' +
'<div' +
'class="first">' +
'7' +
'© Software University Foundation (softuni.org). This work is licensed under the CC-BY-NC-SA license.' +
'Follow us:' +
'Page of 8' +
'<div><div>hello</div></div>' +
'</div>' +
'<div>hi<div></div></div>' +
'<div>I am a div</div>' +
'</div>' +
'</body>' +
'</html>);');