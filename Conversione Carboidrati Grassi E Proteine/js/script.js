function Converti(){

var pesograssi = document.getElementById("grassi").value;
var pesocarboidrati = document.getElementById("carboidrati").value;
var pesoproteine = document.getElementById("proteine").value;
var grassi

var carboidrati
var proteine
var calorie

    grassi = pesograssi * 9;
    carboidrati = pesocarboidrati * 4;
    proteine = pesoproteine * 4;

    calorie = grassi + carboidrati + proteine;

    document.getElementById("calorieout").innerHTML = calorie;
}