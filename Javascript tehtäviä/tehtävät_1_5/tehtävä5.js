// En ymmärrä tehtävän antoa

function laskeMuuttuja(){
var luku = document.getElementById("luku1").value;
var lause = "";

for (var i = 0; i < luku.length; i++){
  lause += luku + "x1 = " + luku * 1 + ", ";
  lause += luku + "x2 = " + luku * 2 + ", ";
  lause += luku + "x3 = " + luku * 3 + ", ";
  lause += luku + "x4 = " + luku * 4 + ", ";
  lause += luku + "x5 = " + luku * 5 + ", ";
  lause += luku + "x6 = " + luku * 6 + ", ";
  lause += luku + "x7 = " + luku * 7 + ", ";
  lause += luku + "x8 = " + luku * 8 + ", ";
  lause += luku + "x9 = " + luku * 9 + ", ";
  lause += luku + "x10 = " + luku * 10;
}
document.getElementById('vastaus').innerHTML = lause;
}


//lause += luku + "x 1 = " + luku * 1;
