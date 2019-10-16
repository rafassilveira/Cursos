/*
    A comparação dos objetos é feita por meio da sua referência,
     assim, ainda que dois objetos tenham exatamente as mesmas propriedades
      eles serão considerados diferentes

*/

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
console.log(book1 == book2);
console.log(book1 === book2);
