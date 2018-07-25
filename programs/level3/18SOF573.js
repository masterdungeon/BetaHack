let str = "+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+";
let arr = [];
for ( i= 33;i<=43;i++) {
    arr = str.split(String.fromCharCode(i));
    if(arr[1]){
    arr[1] = arr[1].split("").reverse().join("");
    str = arr.join("");}
}
process.stdout._write(str,"ascii",()=>{});