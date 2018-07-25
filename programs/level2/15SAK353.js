Symbols = ['!', '#', '$', '%', '*', '+', '-', '/']
var given_str = '+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+ '
console.log("Orignal string: ", given_str);
String.prototype.replaceBetween = function(start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
};
function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}
for (var i=0; i < Symbols.length; i++){
 if (given_str.indexOf(Symbols[i]) > -1){
	var first_pos = getPosition(given_str, Symbols[i], 1);
	var second_pos = getPosition(given_str, Symbols[i], 2);
	var sub_str = given_str.substring(first_pos,second_pos + 1);
	rev_sub = sub_str.split("").reverse().join("");
	given_str = given_str.replaceBetween(first_pos, second_pos + 1, rev_sub);
	given_str = given_str.replace(Symbols[i], "");
	given_str = given_str.replace(Symbols[i], "");
	}
}
console.log("final string: ", given_str);