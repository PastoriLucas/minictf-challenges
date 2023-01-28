var flag = "Y3RmbGFne0RpUDRzc3cwcmRQMVN9";
var rep = prompt("Ok, mais donnez moi le code secret s'il vous plait");
while (rep != "DSJsqdqZD125d"){
    rep = prompt("Ok, mais donnez moi le code secret s'il vous plait");
}
console.log(atob(flag));