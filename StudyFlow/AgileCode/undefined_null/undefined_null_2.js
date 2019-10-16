/*
    É possível consultar uma determinada chave por meio do operador in
*/
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log("title" in book); //true
console.log("author" in book); //true 
console.log("pages" in book); //true 
console.log("language" in book); //true 
console.log("available" in book); //true 
console.log("publisher" in book); //false