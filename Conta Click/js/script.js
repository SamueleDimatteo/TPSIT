/* Variabili dichiarate */
var clicks = 0;
var container = document.getElementById('container');

/* Funzione per l'aggiunta di 1 numero ogni volta che si clicca sul pulsante */
function onClick() {
  clicks += 1;
  document.getElementById("click").innerHTML = clicks;
  cambiasfondocontainer();
};

/* Funzione che cambia il colore dello sfondo del container ogni volta che si clicca sul pulsante*/
function cambiasfondocontainer() {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var colorecasuale = "rgb(" + r + "," + g + "," + b + ")";
    container.style.backgroundColor=colorecasuale;
};