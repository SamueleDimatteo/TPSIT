/* Variabili dichiarate */
var risultatolanciodadi = Math.floor(Math.random() * 6) + 1;
var containerimgrisultato = document.getElementById("risultato");
var risultatolanciodadi2 = Math.floor(Math.random() * 6) + 1;
var containerimgrisultato2 = document.getElementById("risultato2");

/* Funzione per il tiro dei dadi (img ... serve per ogni volta andare ad applicate a containerimgrisultato/2 l'immagine del numero della faccia che è stata estratta tramite il Math.random) */
function tiraidadi(){

/* Dado 1 */
if (risultatolanciodadi == 1) containerimgrisultato.innerHTML = '<img src="img/1.png">';
else if (risultatolanciodadi == 2) containerimgrisultato.innerHTML = '<img src="img/2.png">';
else if (risultatolanciodadi == 3) containerimgrisultato.innerHTML = '<img src="img/3.png">';
else if (risultatolanciodadi == 4) containerimgrisultato.innerHTML = '<img src="img/4.png">';
else if (risultatolanciodadi == 5) containerimgrisultato.innerHTML = '<img src="img/5.png">';
else if (risultatolanciodadi == 6) containerimgrisultato.innerHTML = '<img src="img/6.png">';
document.getElementById("scrittarisultato").innerHTML = "É uscito il numero: " + risultatolanciodadi;

/* Dado 2 */
if (risultatolanciodadi2 == 1) containerimgrisultato2.innerHTML = '<img src="img/1.png">';
else if (risultatolanciodadi2 == 2) containerimgrisultato2.innerHTML = '<img src="img/2.png">';
else if (risultatolanciodadi2 == 3) containerimgrisultato2.innerHTML = '<img src="img/3.png">';
else if (risultatolanciodadi2 == 4) containerimgrisultato2.innerHTML = '<img src="img/4.png">';
else if (risultatolanciodadi2 == 5) containerimgrisultato2.innerHTML = '<img src="img/5.png">';
else  containerimgrisultato2.innerHTML = '<img src="img/6.png">';
document.getElementById("scrittarisultato2").innerHTML = "É uscito il numero: " + risultatolanciodadi2;

/* Funzione che ti scrive se hai vinto o perso / ti dice che se vuoi ritirare i dadi devi premere F5 */
if (risultatolanciodadi == risultatolanciodadi2) {
    document.getElementById("vittoria-sconfitta").innerHTML = "HAI VINTO!!!";
    cambiocoloresfondo();
}
else {
    document.getElementById("vittoria-sconfitta").innerHTML = "HAI PERSO!!!";
    cambiocoloresfondo();   
};

    document.getElementById("f5").innerHTML = "Per rilanciare i dadi premi F5";
};

/* Funzione che cambia colore di sfondo in base se hai vinto o perso */
function cambiocoloresfondo(){
    if (risultatolanciodadi == risultatolanciodadi2){
    document.getElementById("container-risulato").style.backgroundColor = 'green';
    }
    else
    document.getElementById("container-risulato").style.backgroundColor = 'red';
}