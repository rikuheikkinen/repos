
function vkp(){
  var syote = parseInt(document.getElementById('pn').value);
switch (syote)
{
  case 1:
    document.write("Tänään on Maanantai");
    break;
  case 2:
  document.write("Tänään on Tiistai");
    break;
  case 3:
    document.write("Tänään on Keskiviikko");
    break;
  case 4:
  document.write("Tänään on Torstai");
    break;
  case 5:
  document.write("Tänään on Perjantai");
    break;
  case 6:
    document.write("Tänään on Lauantai");
    break;
  default:
    document.write("Tänään on Sunnuntai");
    break;


}
}
