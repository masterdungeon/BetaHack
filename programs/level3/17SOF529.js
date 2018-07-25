var exp =  '+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+'

var operators = []

for(var i=0;i<exp.length;i++){
       
    if(exp.charCodeAt(i) >32 && exp.charCodeAt(i) < 44 && operators.indexOf(exp.charCodeAt(i)) == -1){       
        operators.push(exp.charCodeAt(i))
    }
}
operators.sort()


for(var i=0;i<operators.length;i++){
    let str = exp.split(String.fromCharCode(operators[i]))    
    try{    
    let reg_remove = new RegExp(String.fromCharCode(operators[i]),'g')
    
    let re_reverse = new RegExp(str[1],'g')
    
    exp = exp.replace(re_reverse,str[1].split("").reverse().join(""))
    exp = exp.replace(reg_remove,'')
    } catch(e){
        let chr = "\\"+String.fromCharCode(operators[i])        
        let reg_remove = new RegExp(chr,'g')    
        let re_reverse = new RegExp(str[1],'g')        
        exp = exp.replace(re_reverse,str[1].split("").reverse().join(""))
        exp = exp.replace(reg_remove,'')
    }
}
console.log(exp)