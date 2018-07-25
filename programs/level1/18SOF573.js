let v = "c7561db7a418dd39b2201dfe110ab4a4"
let w = "469bba0a564235dfceede42db14f17b0"
let x = "74e8333ad11685ff3bdae589c8f6e34d"
let y = "c7561db7a418dd39b2201dfe110ab4a4"
let z = "c8d11180c956e5b5afc3d1970ce2193e"
let crypto = require('crypto');
let md5hex;
let lines = require('fs').readFileSync('/tmp/words.txt', 'utf-8').split('\n');
let count = 0;
for(i=(lines.length-1);i>=0;i--){
md5hex = crypto.createHash('md5').update(lines[i]).digest("hex");

    if( md5hex == v){
        v = lines[i] + '_';
        count++;
        // console.log("v"+i);
    } else if( md5hex == w ) {
        w = lines[i] + '_';
        count++;
        // console.log("w"+i);
    } else if( md5hex == x ) {
        x = lines[i] + '_';
        count++;
        // console.log("x"+i);
    } else if( md5hex == z ) {
        z = lines[i] ;
        count++;
        // console.log("z"+i);
    } else if(count == 4) {
        break;
    }
    };
    process.stdout._write(v+w+x+v+z,'ascii',()=>{});