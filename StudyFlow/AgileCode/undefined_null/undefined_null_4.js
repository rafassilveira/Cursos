/*
    As propriedades de um objeto podem ser apagadas por meio 
    do operador delete

*/
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
//book.available = null;

delete book.available; //apaga essa propriedade

//apaga todas as propriedas
// for (let key in book) {
//     delete book[key]
// }
console.log("available" in book);
console.log(book);