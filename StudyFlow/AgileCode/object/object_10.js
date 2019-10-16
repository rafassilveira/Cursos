const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
const book2 = {};
//passando dinamicamente propriedades e valores do book1 para book2
for (let key in book1) {
    book2[key] = book1[key];
}
console.log(book2);