function tarkistaParillisuus()
  {
    var value;
    value = parseInt(document.getElementById('luku1').value);
    document.write("Antamasi luku: " + value);
    if(value%2 == 0)
    {
      document.write("<br>Antamasi luku on parillinen");
    }
    else {
      document.write("<br>Antamasi luku on pariton");
    }
  }
