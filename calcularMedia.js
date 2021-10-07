function calcularMedia(){
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);


    const soma = (n1 + n2) / 2
    console.log(soma)

    document.getElementById("soma").innerHTML = soma

}

