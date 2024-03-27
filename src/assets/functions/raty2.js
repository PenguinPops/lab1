
function liczraty() {
    var K = parseFloat(document.getElementById("K").value);
    var pm = parseFloat(document.getElementById("pr").value) / 1200;
    var n = parseFloat(document.getElementById("n").value);
    var kw = document.getElementById("kw");
    var rata = document.getElementById("rata");

    if (isNaN(K) || isNaN(pm) || isNaN(n) || !isFinite(K) || !isFinite(pm) || !isFinite(n)) {
        rata.value = "Podano błędne dane";
    } else {
        var wyliczonaRata = (K * pm) / (1 - Math.pow((1 + pm), -n));
        if (!isFinite(wyliczonaRata)) {
            rata.value = "Błąd w obliczeniach";
        } else {
            rata.value = Math.round(wyliczonaRata * 100) / 100;
            kw.value = Math.round(wyliczonaRata * 100) / 100 * n;
        }
    }
}