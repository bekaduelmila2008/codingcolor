console.log ("Inizio esecuzione");
let d = new Date();
console.log(d);
getElemenrìtById("saluto").innerHTML = d + "è un bel giorno";

function elabora(){
    let numero = document.getElementById("inNumber").value;
    alert(numero);
}
if (numero >= 0 && numero <= 255) {
    documentElementById("outText").innerHTML = "Hai inserito il" + "numero" + numero;
} else {
    document.getElementById("error").innerHTML = "Il numero non è valido";
}

function reset() {
    document.getElementById("InNumber").value = "";
}
