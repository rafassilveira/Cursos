/* 
    Não atribua para undefined ou null com 
    a intenção de apagar uma propriedade
*/
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
book.available = undefined;
console.log(book);
console.log("available" in book); //true