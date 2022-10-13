function Henkilo(etu, suku, los, pnro, ptp, puh, email)
{
  this.etunimi = etu;
  this.sukunimi = suku;
  this.lahiosoite = los;
  this.postinumero = pnro;
  this.postitp = ptp;
  this.puhelin = puh;
  this.email = email;
  this.tiedot = nayta;

}
function nayta()
  {
  document.write(this.etunimi+" " + this.sukunimi + "<br />" + this.lahiosoite + " <br />" + this.postinumero + " " + this.postitp + "<br />" + this.puhelin + "<br />" + this.email);
  }

var Jyri = new Henkilo("Jyri", "Lindroos", "Keskikatu 3", "04300", "Kerava", "0401744562", "jyri.lindroos@keuda.fi" );


Jyri.tiedot();
document.write(Jyri.email);



//OLIO funktion erottaa ISOLLA määritetty funktion nimi.

//etunollat on merkityksettömiä! esim. 04300 muuttuu tietokoneessa 4300, syötä sitaateissa "04300"
