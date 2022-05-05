var box = document.getElementById("Box");

function Start(){

    setInterval(function() {

        Diagonale()
        
        CambiaSfondoBox();

    }, 100);

};

function Diagonale(){

var i = 10;
            
    y = parseInt(box.offsetLeft);
    x = parseInt(box.offsetTop); 
            
    y = y + i;
    x = x + i;
    
    box.style.left = y;
    box.style.top = x;

    i = i+10;
    
}

function CambiaSfondoBox(){

    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var colorecasuale = "rgb(" + r + "," + g + "," + b + ")";
    box.style.backgroundColor = colorecasuale;
};