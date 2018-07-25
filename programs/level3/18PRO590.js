var a="+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+";

var starti=-1;
var endi=999;

var front='';
var back='';

for(var i=0;i<a.length;i++){
  if(a.charCodeAt(i)<=43 && a.charCodeAt(i)>=33 && starti<=endi){
    var c=a[i];//stored character
    var starti=i+1;
    front=front+a.slice(0,starti-1);//front
    a=a.slice(starti);
    var endi=a.indexOf(c);
    back=a.slice(endi+1)+back;//back
    a=a.slice(0,endi);
    a=a.split("").reverse().join("");
    i=0;
     }
 
}

console.log(front+a+back);