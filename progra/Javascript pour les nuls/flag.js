var flag = "Y3RmbGFne0RpUDRzc3cwcmRQMVN9";
// récupère la réponse envoyer dans la fenêtre et la stocke dans rep
var rep = prompt("Ok, mais donnez moi le code secret s'il vous plait");
//tant que (ce qu'il y a dans les parenthèses en vrai)
while (rep != "DSJsqdqZD125d"){
    //redemande le code et le remet dans rep
    rep = prompt("Ok, mais donnez moi le code secret s'il vous plait");
}
console.log(atob(flag));
