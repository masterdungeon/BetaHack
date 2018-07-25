var str = '+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+'

var arr = ['!', '#', '%', '*', '+'];

for (var i = 0; i < arr.length ; i++) {
  let rst = str.indexOf(arr[i]);
  let last = str.lastIndexOf(arr[i]);
  returnStr = str.substring(rst+1, last)
  str.slice(rst-1, last);
  returnArr = Array.from(returnStr).reverse().join('')
  str = str.replace(str.substring(rst, last+1), returnArr);
}
console.log(str);
