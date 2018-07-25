
var input = '+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+';
var opeStr = new Set();
for (let i=0, l=input.length; i<l; i++){
  let charCode = input.charCodeAt(i);
  if(charCode >= 33 && charCode <= 43){
    opeStr.add(input.charAt(i));
  }
}
var ops = Array.from(opeStr).sort();

for(var i=0, l=ops.length; i<l; i++){
  let startIndex = input.indexOf(ops[i]);
  let endIndex = input.lastIndexOf(ops[i]);
  var n = input.substr(startIndex+1, (endIndex - startIndex -1));
  var prevSubstring = input.slice(0,startIndex);
  var endSunString = input.slice(endIndex+1);
  var reverted = reverseString(n);
  input = prevSubstring+reverted+endSunString
}

console.log(input);

function reverseString(s){
  return s.split("").reverse().join("");
}