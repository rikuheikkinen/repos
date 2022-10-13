function tulosta()
{
  var syote = document.getElementById("sluku").value;

if(syote >= 0)
{
  document.write("Tulos on positiivinen");
}

else if (syote < 0) {
  document.write("Tulos on negatiivinen");
}
else
{
    alert ("Syötä numero!");

}
}
