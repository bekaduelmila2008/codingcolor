console.log ("Inizio esecuzione");
let d = new Date();
console.log(d);
getElementById("saluto").innerHTML = d + "è un bel giorno";

function elabora(){
    let numero = document.getElementById("inNumber").value;
    alert(numero);
}
if (numero >= 0 && numero <= 255) {
    colori.push(numero);
    documentElementById("outText").innerHTML = "Hai inserito il" + "numero" + numero;
    documentElementById("outText").innerHTML +=  "<br> I colori inseriti sono:" + colori;
} else {
    document.getElementById("error").innerHTML = "Il numero non è valido";
    document.getElementById("outText").innerHTML="";
    console.log(colori);

    if (colori.length == 3) {
        document,getElementById("outText).style.color = `rgb={(${colori[0]${colori[1]}},${colori[2]}}`9;
}

function reset() {
    document.getElementById("InNumber").value = "";
    document.getElementById("outTExt").innerHTML = "";
    document.getElementById("error").innerText = "";
}


