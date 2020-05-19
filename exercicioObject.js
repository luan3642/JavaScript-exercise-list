// crie um objeto com seus dados pessoais
var pessoa = {
    nome: 'Luan',
    sobrenome: 'Magalhães',
    idade: 20,
    sexo: 'Masculino',
}

// Crie um método no objeto anterior, que mostre seu nome completo
pessoa.nomeCompleto = function () {
    return `${pessoa.nome}` + " " + `${pessoa.sobrenome}`;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 2000;


// Crie um objeto de um cachorro um labrador de cor preta com 10 anos, que ao ver um homem late.
var cachorro = {
    raca :'Labrador',
    cor :'Preta',
    idade : 10,

    latir: function(pessoa){
        if(pessoa === 'Homem' || pessoa === 'homem'){
            return 'Latir';
        }else{
            return 'Nada';
        }
    }
}
