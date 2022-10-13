function noppa()
{
var noppa =  Math.ceil(Math.random()*6);
  document.getElementById('vastaus').innerHTML = noppa;
}

function aika()
{
  var tunnit, minuutit, sekunnit
  var aika = "";
  for(var tunnit = 0; tunnit < 24; tunnit++)
  {
    aika += tunnit + ":";
    for(var minuutit = 0; minuutit < 60; minuutit++)
    {
      aika += minuutit + ":";
      for(var sekunnit = 0; sekunnit <60; sekunnit++)
      {
      }

      }
      document.getElementById('vastaus').innerHTML = aika;
    }
}
