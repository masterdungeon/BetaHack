data='+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+';
symbol=[33,35,37,42,43]
for(x=0;x<5;x++){

  var y=String.fromCharCode(symbol[x])
  if(data.indexOf(y)>-1){
    data = data.split(y);
    if(data[2]!==undefined){
      data[1] = data[1].split('').reverse().join('');
      data=data.join('');
    }else{
      data=data.join('');
    }
  }
}
console.log(data);
