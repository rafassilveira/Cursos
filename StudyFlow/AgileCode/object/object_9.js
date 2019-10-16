/*É possível consultar cada uma das propriedades de um objeto 
por meio da computação das chaves*/
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
//For in serve para percorrer propriedades de objetos
for (let key in book) {
    console.log(book[key]);
}
