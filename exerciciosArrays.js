//Crie uma array com os anos que o Brasil ganhou a copa

var ganhouCopaBrasil = [1959, 1962, 1994, 2002];

/*
Intereja com o array utilizando um loop, para mostrar
no console a seguinte mensagem, "O Brasil ganhou a copa de ${ano}"
*/

ganhouCopaBrasil.forEach(function(x){
        console.log(`O Brasil ganhou a copa de ${x}`);
});


// Interaja com o loop nas frutas abaixo e pare quando chegar em pera
var frutas = ["Banana ", "Maçã", "Uva", "Pera"];


for(let x = 0; x<frutas.length; x++){
    console.log(frutas[x]);
    if(frutas[x] === "Uva"){
        break;
    }
}

/*
coloque a ultima fruta do array acima em uma variável
sem a remover a mesma do array 
*/

var ultimaFruta = frutas[frutas.length - 1];

console.log("ultima fruta: "+ ultimaFruta);