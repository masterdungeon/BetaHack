function reverseString(str) {
    return str.split("").slice(1, -1).reverse().join("");
}
var abc = reverseString("+stne*wa#P.ru%esp!tce!.Yo%R.sy#ar*lA+");
console.log(abc.replace(/[^\w\s]/gi, ''));