


function laskeYhteen(){
  var eka    = parseInt(document.getElementById("luku1").value);
  var toka   = parseInt(document.getElementById("luku2").value);
  var kolmas = parseInt(document.getElementById("luku3").value);
  var neljas = parseInt(document.getElementById("luku4").value);
  var viides = parseInt(document.getElementById("luku5").value);

var sum = eka + toka + kolmas + neljas + viides;
var average = sum / 5;
document.write("lukujen summa on:" + sum + "ja keskiarvo on:" + average);


}
