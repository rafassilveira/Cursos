//USE STRICT;
// 1-NÃO DAR PARA USAR COM O 'THIS'
// 2- NÃO DÁ PRA USAR COM O 'WITH'
(function () {
    'use strict'
    //O 'use strict' vai fazer com que as variavéis,
    //daque em diante sejam usada de forma estritra
    //ou seja somente localmente nessa função
    //por isso ele nao permite declarar variavel sem  'var'
    var myName = 'Rafael Silveira';
    console.log(myName)
}

)

//delete
//Tem a finalidade de deletar propriedades do objeto

(function () {  
    var myVar = 2;
    var obj = {
        prop:'prop1',
        prop2:'prop2',
        prop3:'prop3'
    };
    /*Vai deletar a propriedade 1 do obj
    delete não deleta var e nem objetos inteiros, somente propriedades
    com o uso de strict use, náo e permiritod 
    o uso de proppriedade  e parametro de fun;áo com o mesmo nome
    */
    console.log(delete obj.prop);    

})

/* --charArt-- */
//Tras a letra correspondente do index 
console.log(`rafael`.charAt(3));
console.log(`rafael`.charAt(10));

/*-- concat-- */
//vai concatenar 'rafael com as strings passadas
//MAS NÃO MODIFICA A VARIVEL OU STRING ORIGINAL
console.log('rafael'.concat(1, 2, 3));//rafael123

/*--indexOf--*/
//.indexOf(string [,start])
//pecorre a string e verifica se existe o paramentro passado
//Se exsitir retorna o index do inicio do parametro achado
//se não retorna -1
console.log('rafael'.indexOf('ael'));//3

/*--replace--*/
//.replace(string,newString)
//ele substitui um na string um pelo outro
//não altera a astring original
console.log('rafael'.replace('r','t'));

/*--slice--*/

//.slice(start [,end])
//corta do numero da index passado até outra index passado
//porém a segunda index passada nao mostra o ultimo, é semrpe o anterior
console.log('rafael'.slice(0,4));//rafa

/*--split--*/

var rafa = 'rafael'
//corta e transfprma em array
console.log(rafa.split());//[ 'rafael' ]
var rafaArr = rafa.split('a');//[ 'r', 'f', 'el' ]
console.log(rafaArr);
//junda as os itens da array com 'a'
rafaArr = rafaArr.join('a')   
console.log(rafaArr);

/*--substring--*/

//Muito parecido com o replace
console.log(rafa.substring(3,6));//ael
//Porém podemos usar ao contrario, com o numeor maior para o menor
// ele Substitui automaticamente
console.log(rafa.substring(5, 3))//ael

/*--toLowerCase--*/
//Deixa em minucuslo
console.log(rafa.toLowerCase());
/*--toUpperCase--*/
//deixa em maiúsculo
console.log(rafa.toUpperCase());
//Pega a primeira letra, tranforma em maiuscula e corta da segunda letra pra frente
var newRafa = rafa.charAt(0).toUpperCase() + rafa.slice(1);
console.log(newRafa);


