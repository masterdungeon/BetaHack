var fs = require("fs");
var a0, a1, a2, a3, a4, a5;



var searcharray = ["c7561db7a418dd39b2201dfe110ab4a4", "469bba0a564235dfceede42db14f17b0", "74e8333ad11685ff3bdae589c8f6e34d", "c7561db7a418dd39b2201dfe110ab4a4", "c8d11180c956e5b5afc3d1970ce2193e"];


fs.readFile('/tmp/words.txt', "utf-8", (err, dta) => {
    if (err) {
        console.log(err);
        
    } else {

        var arr = dta.toString().split("\n")
        
        arr.forEach(function(data) {
            md5_of_str = calcMD5(data);
           

            var found = searcharray.indexOf(md5_of_str);

            if (found >= 0) {
                

                if ("c7561db7a418dd39b2201dfe110ab4a4" == md5_of_str) {
                    a0 = data;

                    a3 = a0;
                }

                if ("469bba0a564235dfceede42db14f17b0" == md5_of_str)
                    a1 = data;
                if ("74e8333ad11685ff3bdae589c8f6e34d" == md5_of_str)
                    a2 = data;
                if ("c8d11180c956e5b5afc3d1970ce2193e" == md5_of_str)
                    a4 = data;
            }

        })

        console.log(a0 +"_"+ a1+"_" + a2+"_" + a3+"_" + a4 )
    }



})