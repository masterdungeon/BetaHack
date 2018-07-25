var str = "+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+"

var operators = []


for (i in str){
    if(str.charCodeAt(i)>32 &&str.charCodeAt(i)<44 ){
        
        if(operators.indexOf(str[i]) === -1){
            operators.push(str[i])
        }
    }

   
    
}

operators.sort()



function removeSpecials(str){
    for(i in str){
       // console.log("special;",str[i])
        if(str.charCodeAt(i)>32 &&str.charCodeAt(i)<44){
           
            str.replace(str[i], '')
        }
    }
    
    return str
}

for(i in operators){
    let start = str.indexOf(operators[i])
    var myStr = str.substring(start+1);
    let end = myStr.indexOf(operators[i])
    
    end = start+end
   testStr = str.substring(start,end+2)

    str = str.replace(testStr,reverse(testStr))
   
}




function reverse(s){
    return s.split("").reverse().join("");
}


console.log(str.replace(/[^a-zA-Z\. ]/g, ""))



