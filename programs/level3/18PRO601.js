

var v ="+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+";
var j= 37;
var b =[];
var s =[];
for(i=0;i<37;i++){
  b[i] = v.charCodeAt(i);
}
var k =37;
for(i=0;i<k;i++)
 {
   if(b[i]<=45)
    {
      var l = b[i];
      b.splice(i,1);
      for(j=k;j>i;j--)
      {
        if(b[j]== l)
        {
          b.splice(j,1);
          swap(b,i,j-1);
          k=j;
        }
      }
    }
 }
for(i=0;i<27;i++)
{
   s[i] = String.fromCharCode(b[i]);
}
var v = s.join("");
console.log(v)
function swap(Array,g,z){

  while(g<z){
    var temp = Array[g];
    Array[g]=Array[z];
    Array[z]=temp;
    g++;
    z--;
  }

}