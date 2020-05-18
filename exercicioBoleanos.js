// verifique se a sua idade é maior que de algum parente

var primo = 10;
var luan = 20;

if (primo >= luan){
    console.log("Primo é mais velho que Luan");
}else{
    console.log("Luan é mais velho que primo");
}

// qual o valor retornado da seguinte expressão 
var expressao = (5-2) && (5 - ' ') && (5-2);
console.log(expressao)



// verifique se as seguintes variáveis são Truthy ou Falsy

var nome = 'André'; // true
var idade = 28; // true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroConta = 0; //false

if(dinheiroConta){
    console.log("verdadeiro")
} else{
    console.log('false');
}

// compare o total de habitantes do Brasil com China (valor em milhões)

var Brasil = 207e6;
var China  = 1340e6;

if (Brasil > China){
    console.log("O Brasil tem mais habitantes que a China");
} else{
    console.log("A China tem mais habitantes que o Brasil");
}

// O que irá aparecer no console?

if((('Gato' === 'gato') && (5 > 2))){
    console.log('Verdadeiro');
} else{
    console.log('False');
}

// O que irá aparecer no console 
if(('Gato' === 'gato') || (5>2)){
    console.log('Gato' && 'Cão');
} else{
    console.log('Falso')
}