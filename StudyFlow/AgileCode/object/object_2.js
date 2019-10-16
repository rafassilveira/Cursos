/*
Uma das diversas maneiras de atribuir propriedades 
a um objeto é durante a sua inicialização, pela notação literal
 */
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book);

/*
Para criar as propriedades dos objetos, temos que seguir
os mesmo padrão de váriaves,(a-z,A-Z,_$),mas podemos
Criar propriedade diretamente como string

Exemplo:
    Perceba que as propriedades estão com '-' que não poderia
    sem as ''
    const book = {
        'title-book': "Clean Code",
        'author-book': "Robert C. Martin",
        'pages-book': 464,
        'language-book': "English",
        'available-book': true
    };
*/