// verifique se um valor é Truthy
function verificaValorTrue(valor) {
    if (valor !== false && valor !== undefined && valor !== 0 && valor !== NaN && valor !== '') {
        return true;
    } else {
        return false;
    }
}

console.log(verificaValorTrue(''));



//Crie uma função matemática que retorne o perímetro de um quadrado
function perímetroQuadrado(lado) {
    return lado * lado;
}
console.log(perímetroQuadrado(5));


// crie uma função para verificar se um número é par
function numeroPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(numeroPar(7));

// crie uma função que retorne seu nome completo

function retornaNome(firstName, lastName) {
    return `${firstName}` + " " + `${lastName}`;
}



// crie uma função que retorne o tipo de dados
function descobreDado(dado) {
    return typeof dado;
}


//Quando der um Scroll na página, mostre seu nome completo

addEventListener('scroll', function () {
    console.log(retornaNome("Luan", "Magalhães"));
});

/*corrija o erro abaixo
     function precisoVisitar(paisesVisitados){
        var totalPaises = 193;
        return 'ainda faltam ${totalPaises - paisesVisitados} paises para visitar';
}
*/

/* function jaVisitei(paisesVisitados){
    return 'Já visitei ${paisesVisitados} do total de ${totalPaises} países'
}
*/

// precisoVisitar(20);
//jaVisitei(20);

var totalPaises;

function precisoVisitar(paisesVisitados) {
    totalPaises = 193;
    return `ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `´Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);