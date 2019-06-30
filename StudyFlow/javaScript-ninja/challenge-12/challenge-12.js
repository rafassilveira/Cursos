(function () {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

person = {
    name:'Rafael',
    lastName:'Silveira',
    age:30   

}
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

console.log('Propriedades de "person":')



/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({
    name:'Livro1',
 pages:22});

books.push({
  name: 'Livro2',
  pages: 42
});
books.push({
  name: 'Livro3',
  pages: 52
});

/*
Mostre no console todos os livros.
*/
console.log(books);
console.log('\nLista de livros:');

console.log('\nLivro que está sendo removido:');
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop());

console.log('\nAgora sobraram somente os livros:');
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
books= JSON.stringify(books);

console.log('\nLivros em formato string:');


console.log((books));

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books)

console.log('\nAgora os livros são objetos novamente:');

console.log((books));

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for (let index = 0; index < books.length; index++) {
    for (var prop in books[index]){
        console.log(prop + ': '+ books[index][prop])
    }
    
}





/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
myname = ['R','A','F','A','E','L']
console.log('\nMeu nome é:');

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myname.join(''));


console.log('\nMeu nome invertido é:');

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myname.reverse());


console.log('\nAgora em ordem alfabética:');
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myname.sort());



    
})();






















