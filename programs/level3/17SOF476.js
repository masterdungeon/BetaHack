var problem="+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+"
var asciiArr=[]
var asciiObj={}
var temp;


var i
function pre_process(str)
{
    
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var asciiInteger = Number(str.charCodeAt(n));
        for (i=0,len=asciiArr.length;i<len;i++){
            if (asciiInteger<33||asciiInteger>43||asciiArr[i]==asciiInteger){
                break
            }
            
            if (asciiArr[i]>asciiInteger){
                temp=asciiArr.slice(i)
                asciiArr=asciiArr.slice(0,i)
                
                asciiArr.push(asciiInteger)
                
                asciiArr=asciiArr.concat(temp)
                asciiObj[asciiInteger]=str[n]
                break;
            }else if(i==len-1){
                asciiArr.push(asciiInteger)
                asciiObj[asciiInteger]=str[n]
                break;
            }
        }
        if (asciiArr.length==0){

            asciiArr.push(asciiInteger)
            asciiObj[asciiInteger]=str[n]
            
        }
	 }
	
}
pre_process(problem)
i=0;
var reverse;
while(i<asciiArr.length){
    var arr=problem.split(asciiObj[asciiArr[i++]])
    reverse='';
    for(index=arr[1].length-1;index>=0;index--){
        reverse+=arr[1][index]
    }
    arr[1]=reverse
    problem=arr[0]+arr[1]+arr[2]

}

console.log(problem)