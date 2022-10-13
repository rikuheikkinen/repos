function arvoNumerot(){


let array =[];
let val = 0;
for (var i = 1; i <= 7 ; i++) {
  val = parseInt(Math.floor(Math.random()* 40)+1);

  if (!array.includes(val)) {
      array.push(val);
  }
    else {
      i --;
    }

}
  array.sort();

  document.getElementById('vastaus').innerHTML = "Arvotut numerot ovat: "+ array;


  }
