function SuurinViidesta()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('syote1').value);
    l2 = parseInt(document.getElementById('syote2').value);
    l3 = parseInt(document.getElementById('syote3').value);
    l4 = parseInt(document.getElementById('syote4').value);
    l5 = parseInt(document.getElementById('syote5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
    document.write("<br>Suurin niistä on: " + suurin);
  }
