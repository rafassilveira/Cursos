(function (){
    'use strict'
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/
console.log('As letras do seu nome:');
var name = 'Rafael'

for (let i = 0; i< name.length; i++) {
   
  console.log(name.charAt(i) +" é a " + (i+1)+"º letra do meu nome"  );
  
}

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
console.log('\nNome convertido à partir de um slug:');

// var fullName = 'rafael-silveira'
// var size = fullName.length;
// var traco = fullName.indexOf('-')
// var newFullName = fullName.charAt(0).toLocaleUpperCase() + fullName.slice(1,traco);
// newFullName +=" " + fullName.charAt(traco+1).toLocaleUpperCase() + fullName.slice(traco+2,size+1);
// console.log(fullName + " " + newFullName);

/* --VERSÃO DO PROFESSOR--*/
var fullName = 'rafael-dos-santos-silveira'
/*plit vai retirar o '-' e retornar um array, que ficará na nova var
 o map irá pecorrer por todos os item da array,
adcionado um funcao com o paremtro name, todos os item da array serão acessadis atraves do 'name'
usando o charArt(i), onde o 'i' é a posicao ira ficar em maisculo a primeira letra de cada nome
 O slice ira cortar do segundo indice em diante
sinal de '+' ira concatenar com o resto do nome*/
var newFullName = fullName.split('-').map(function (name) {  
    return name.charAt(i).toLocaleUpperCase() + name.slice(1);
});
console.log(fullName);
console.log(newFullName.join(' '));// irá juntar todos os itens,agora sem o traço, com espaçoes entre eles




/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
console.log('\nMeus amigos:');


/* --VERSÃO DO PROFESSOR--*/
var friends = ['Bulma', 'Pam', 'Cinho', 'Hud', 'Fred']
//Reduce irá reduzi tudo em um unica string separado por ','
//reduce passar pela array friends o parametro:
//acumulado: inicia em 0, e vai recebendo conforme passar pela array
// atual: é o item atual no momento do loop, nesse caso ele irá concatenar '+', e salvo no acumulador
var phrase = friends.reduce(function (acumulado, atual, index) { 
    //se p indice for igual ao tamanho do array ele colocar 'e', senao ','
    var separator = friends.length -1 === index ? ' e ' : ',';
    return acumulado + separator + atual;
    //como reduce retornar uma string, pode ser usado o concat
 }).concat(' São meus amigos');
 console.log(phrase);
 


/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
console.log('\nEra "Roberto", agora é:');

console.log('Roberto'.replace('to', 'ta'));


/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
console.log('\nParte de uma string:');
console.log('Fernando'.substring(8,3));


/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
console.log('\nNome com letras intercaladas entre caixa alta e baixa:');

var myName = 'Rafael'
var newmyName = '' 
for(var i = 0; i < myName.length; i++ ){
    if (i % 2 ===0 ) {
        
        newmyName = newmyName + myName.charAt(i).toUpperCase()
        
         
        
    }else{
         newmyName =newmyName + myName.charAt(i).toLowerCase() 
    }
}
console.log(newmyName);

/*
--VERSÃO DO PROFESSOR-- 

var myName = 'Rafael';
var myNewName = [];
for( var i = 0, len = myName.length; i<len; i++) {
    myNewName.push( i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toLocaleUpperCase() );
    
};
console.log(myNewName.join(''));
*/





})();//FIM IIFE








