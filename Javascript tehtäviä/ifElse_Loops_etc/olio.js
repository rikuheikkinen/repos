//Olio on joku objekti esim auto, ihminen, eläin.
//Olion voi kutsua väri attribuutilla esim mini.värevi

var kuukausi = "Toukokuu";
switch(kuukausi)
{
  case "Tammikuu":
  case "Maaliskuu":
  case "Toukokuu":
  case "Heinäkuu":
  case "Elokuu":
  case "Lokakuu":
  case "Joulukuu":

  document.write("Kuukaudessa on 31 päivää");
  break;

   case "Huhtikuu":
   case "Kesäkuu":
   case "Syyskuu":
   case "Marraskuu":
    document.write("Kuukaudessa on 30 päivää");
    break;
    case "Helmikuu":
    document.write("Kuukaudessa on 27/28 päivää");
    break;
    default :
    document.write("Anna kuukausi muodossa 'Tammikuu'");
    break;
}
