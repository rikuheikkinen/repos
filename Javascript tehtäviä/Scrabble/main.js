

  
    function lisaa(sana) {  //Syötetään numero käyttäjältä
     let pisteet = sana    //annetaan "pisteet" muuttujalle arvoksi syötetty sana
        .replace(/[AEINST]/gi, '+1')   //muutetaan kirjaimet luvuksi = 1
        .replace(/[OÄKL]/gi, '+2')    // muutetaan kirjaimet luvuiksi = 2
        .replace(/[UM]/gi, '+3')      // muutetaan kirjaimet luvuiksi = 3
        .replace(/[YHJPRV]/gi, '+4')  // muutetaan kirjaimet luvuiksi = 4
        .replace(/[ÖD]/gi, '+7')      // muutetaan kirjaimet luvuiksi = 7
        .replace(/[BFG]/gi, '+8')     // muutetaan kirjaimet luvuiksi = 8
        .replace(/[C]/gi, '+10')       // muutetaan kirjaimet luvuiksi = 10
        .replace(/[QWXZ]/gi, '+12')    // muutetaan kirjaimet luvuiksi = 12

        let muunna = pisteet;          //tallennetaan saadut numerot muuttujaan muunna

          let array = muunna.match(/\d+/g);  //muutetaan muunna muuttuja arrayksi ja tallennetaan muuttujaan array
          console.log(array);
            array = array.map(Number);    //muutetaan string array integer arrayksi
              let summa = 0;

        for (let i = 0; i < array.length; i++) { //käydään läpi lista ja lasketaan elementtien summa
         summa += array[i];

       }
       //tulostetaan vastaus näytölle
        document.getElementById("vastaus").innerHTML = "Pisteesi ovat: "+ summa;
      };
