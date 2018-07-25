const fs = require('fs');
var v1 = "c7561db7a418dd39b2201dfe110ab4a4";
var w1 = "469bba0a564235dfceede42db14f17b0";
var x1 = "74e8333ad11685ff3bdae589c8f6e34d";
var y1 = "c7561db7a418dd39b2201dfe110ab4a4";
var z1 = "c8d11180c956e5b5afc3d1970ce2193e";
var v2 = w2 = x2 = z2 = '';
function readLines(input, func) {
 var remaining = '';

 input.on('data', function(data) {
   remaining += data;
   var index = remaining.indexOf('\n');
   while (index > -1) {
     var line = remaining.substring(0, index);
     remaining = remaining.substring(index + 1);
     func(line);
     index = remaining.indexOf('\n');
    if (v2 && w2 && x2 && z2){
	console.log(v2 + '_' + w2 + '_' + x2 + '_' + v2 + '_' + z2);
	return;
	}
   }
 });
}

function func(line) {
 md5_of_str = calcMD5(line.toLowerCase());
 if (md5_of_str == v1){
	v2 = line;
}
 else if (md5_of_str == w1){
	w2 = line;
}
else if (md5_of_str == x1){
	x2 = line;
}
else if (md5_of_str == z1){
	z2 = line;
}
}

var input = fs.createReadStream('/tmp/words.txt');
readLines(input, func);
