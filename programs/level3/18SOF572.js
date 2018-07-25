input = '+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+'

substr = []
for(i=0;i<input.length/2;i++){
	charcode = input.charCodeAt(i)    
	if(32<charcode&& charcode<44)
        substr.push({ charcode, value:[i,input.length-i+2]})
}

substr.sort((a,b)=>{
  if (a.charcode<b.charcode) {
    return -1;
  }
  if (a.charcode>b.charcode) {
    return 1;
  }
  return 0;
})

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

substr.forEach((val)=>{
    input = input.slice(0,val.value[0])+reverseString(input.slice(val.value[0], val.value[1])) + input.slice(val.value[1], input.length)
    })

console.log(input.replace(/[!"#$%&'()*+]/g,''))