var guess= 5;
var chiffre = prompt("Entrez votre chiffre?")

if (chiffre === guess) {
    console.log("Bravo");
} else if (chiffre > guess){
    console.log("moins");
}
else  if (chiffre < guess ) {
    console.log("plus");
}