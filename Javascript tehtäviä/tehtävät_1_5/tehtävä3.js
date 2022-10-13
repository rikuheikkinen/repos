
function tarkistaKarkausVuosi() {
var vuosi = parseInt(document.getElementById('vuosi').value);
    if ((0 == vuosi % 4) && (0 != vuosi % 100) || (0 == vuosi % 400)) {
        document.write(vuosi + ' Vuosi on karkausvuosi');
    } else {
        document.write(vuosi + ' Vuosi ei ole karkausvuosi');
    }
}
