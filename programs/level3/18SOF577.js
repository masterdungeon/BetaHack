var str="+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+";
var string='';

function reverse(s){
    return s.split("").reverse().join("");
}

str=reverse(str);

for(var i=0;i<=6;i++){

    string=reverse(str);

    string=string.replace(/[&\/\\#,+()$'"?<>{}]/g,'_');


  
}