/* Funzione Per Il Corretto Funzionamento Del CountDown */ /* Il Simbolo dentro le "" è semplicemente un carattere invisibile  */
var time = 3;
var timer = setInterval(function(){
    document.getElementById("counter").innerHTML = "⠀ ⠀" + time;
    time-=1;
    if(time == -1){
    clearInterval(timer);
    document.getElementById("counter").innerHTML = "⠀" + "Fine!";
    }
}, 1000);