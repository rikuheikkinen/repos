function esimerkkitaulukko()
{
  var autot = [];
  var caarat = ["Tesla", "VW i3", "Hyundai ionic"];
  autot.push("Jeep");
  document.write(caarat[1]+ " " + autot[0] + "<br />");
  document.write(caarat + "<br />");
  document.write(autot);
  var siirrettava= autot.pop();
  document.write("Siirrettävä = " + siirrettava);
  document.write("<br /> Caarat taulukko = " + caarat);
autot.unshift(siirrettava);
document.write("<br />Autot taulukko = " + autot);
//autot.push() = caarat.pop(); selain ei tykkää tästä
document.write("<br /> Caarat taulukko");
}
//.push = lisää taulukon loppuun annetun arvon
//.shift = poistaa taulukon ensimmäisen paikasta

//.unshift() = The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

//.pop = pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// YHTÄKUINVERTAILUSSA KÄYTETÄÄN 2 YHTÄKUIN MERKKIÄ == !!! 
