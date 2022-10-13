function tulostaParilliset()
{
  var syote = parseInt(document.getElementById('pRillinen').value);
  var jono = "<p>";
  for(var i = 2; i <= syote; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}

function muutaSalasanaksi()
{
  var sSana = document.getElementById('sSana').value;
  var salasana = "<p>";
  for(var j = 0; j < sSana.length; j++)
  {
    salasana += sSana[j] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}


function tarkistaKirjain(){
  let str = document.getElementById('syote').value;
  let char = 'ö';
  let charUpperCase = 'Ö';
  let vastaus ="<p>";

   if(str.includes(char)){

    vastaus+="On </p>";
    document.getElementById('vastaus').innerHTML = vastaus;
}
    else if (str.includes(charUpperCase)){
      vastaus+="On </p>";
      document.getElementById('vastaus').innerHTML = vastaus;
 }

    else {
      vastaus+= "Ei ole </p>";
      document.getElementById('vastaus').innerHTML = vastaus;
    }
}

function laskeKertoma(){
  let syote = document.getElementById('syoteNum').value;
  let laskettu = 1;
   for(var i = 1; i <= syote; i++)
   {
     laskettu*=i;
   }

   document.getElementById('vastaus2').innerHTML = '<p>Luvun ' + syote + ' kertoma on '+laskettu + '</p>';
 }
 function hipHeijaa()
{
  var tuloste = '';
  for(var i = 1; i <= 100; i++)
  {
    if(i%3==0 && i%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(i%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(i%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=i+' ';
    }
    document.getElementById('vastaus3').innerHTML = tuloste;
  }
}

  function tulostaEkat(){
    let print = '';
      for (var i = 1; i <= 10; i++) {
        print +=  i + " ";
          document.getElementById('vastaus4').innerHTML = print;
      }}

  function laskeEkat(){
    let yhteensa = 0 ;
    for (var i = 1; i <= 10 ; i++) {
       yhteensa += i;
       document.getElementById('vastaus5').innerHTML = '<p>'+ yhteensa + '</p>';
    }
  }

  function laskePotenssi()
{
  var syote1 = document.getElementById('korotettavaLuku').value;
  var syote2 = document.getElementById('potenssiLuku').value;
  yhteensa = syote1;
  for(var i = 1; i < syote2; i++)
  {
    yhteensa *= syote1;
  }
  document.getElementById('vastaus6').innerHTML = '<p>' + yhteensa + '</p>';
}

function etsiSuurinJaPienin(){
let answer = '';
let num1 = parseInt(document.getElementById('luku1').value);
let num2 = parseInt(document.getElementById('luku2').value);
let num3 = parseInt(document.getElementById('luku3').value);
let num4 = parseInt(document.getElementById('luku4').value);
let num5 = parseInt(document.getElementById('luku5').value);

inputList = [num1 , num2 , num3 , num4, num5];

let maxNum =  (Math.max(...inputList));
let minNum =  (Math.min(...inputList));

answer += 'Suurin on ' + maxNum + ' ja pienin on ' + minNum ;
document.getElementById('vastaus7').innerHTML = '<p>' + answer + '</p>';

function muokkaaSalasana()
{
  var muokattavaSsana = '';
  var eka, toka;
  muokattavaSsana = document.getElementById('salis').value; //inputista syötetään muokattava salasana
  alert(muokattavaSsana);
  //Luodaan taulukko aakkosista joita tullaan arpomaan salasanaan.
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
// luodaan tyhjä taulukkomuuttuja 'temp'
  var temp = [];
  var answer='';
  for(var i = 0; i < muokattavaSsana.length; i++)
  {                     //8
    eka = muokattavaSsana[i];

    temp.push(eka);

    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);

  }
  answer = temp.join('');
  document.getElementById('lukujenTulostusS').innerHTML = answer;
}

function prillisetPrittomat()
{
  var palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  var nro1 = parseInt(document.getElementById('pienempiNro').value);
  var nro2 = parseInt(document.getElementById('isompiNro').value;

//jos nro 1 on parillinen
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var i = palku; i<=nro2; i+=2)
  {
    pluvut += i + ' ';
    psumma += i;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
