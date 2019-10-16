/*
O tipo undefined é retornado caso a chave não seja encontrada
 */
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book.publisher); //undefined

/*
    Diferença de undefined e null 
     -null indica ausencia de valor
     -undefined propriedade não existe
*/