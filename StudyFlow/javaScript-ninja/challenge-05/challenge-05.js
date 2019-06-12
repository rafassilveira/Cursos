/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1,true,false,"Rafael",0]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function Myfunc(arg) {
    return arg
    
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
> Myfunc(array[1])
true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunc2 (arg1,arg2) {
    return arg1[arg2]
  }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [1, true, false, "Rafael", 0]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
> myFunc2(array, 2)
false
  >

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) { 
        var  livro = {
            'livro1':{
                quantidadePaginas:30,
                autor:'JK',
                editora:"Leya"
            },        
            'livro2': {
            quantidadePaginas: 40,
            autor: 'JK2',
            editora: "Leya2"
            },
            'livro3': {
            quantidadePaginas: 50,
            autor: 'JK3',
            editora: "Leya3"
            },
        }

        return !bookName ? livro: livro[bookName] // !bookName é igual bookNmae !== undefined
        
        
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
> console.log(book()) {
  livro1: {
    quantidadePaginas: 30,
    autor: 'JK',
    editora: 'Leya'
  },
  livro2: {
    quantidadePaginas: 40,
    autor: 'JK2',
    editora: 'Leya2'
  },
  livro3: {
    quantidadePaginas: 50,
    autor: 'JK3',
    editora: 'Leya3'
  }
}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
> console.log("O livro livro2 tem " + book('livro2').quantidadePaginas +
  " páginas!")
O livro livro2 tem 40 páginas!
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
> console.log("O autor do  livro2 é " + book('livro2').autor)
O autor do livro2 é JK2

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
> console.log("O livro livro3 foi publicado por " + book('livro2').editora)
O livro livro3 foi publicado por Leya2
// ?
