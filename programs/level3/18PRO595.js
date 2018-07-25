function reverse(str) {
    var chars = str.split("");
    var length = chars.length;
    var half = length / 2;
    for (var ii = 0; ii < half; ii++) {
      var temp = chars[ii];
      var mirror = length - ii - 1;
      chars[ii] = chars[mirror];
      chars[mirror] = temp;
    }
    return chars.join("");
}
var start = '';
var end = '';
var a = '+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+';
var regExpr = /[\w. ]/g;
var sp = a.replace(regExpr, "");
sp = sp.slice(0, -1*(sp.length/2));
var  i, ch ,b = '';
var b = reverse(a);
b = b.slice(1, -1);
for(i=1,cc=sp.length;i<cc;i++){
ch = b.split(sp[i]);
start = start + ch[0]; 
end = ch[2]+end;
b = b.replace(ch[0], '');
b = b.replace(ch[2], '');
b = reverse(b);
b = b.slice(1, -1);
}
console.log(start+b+end);