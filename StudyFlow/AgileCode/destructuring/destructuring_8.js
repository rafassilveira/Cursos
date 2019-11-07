/*Para extrair os valores de um objeto é necessário 
referenciar a chave de cada uma das propriedades */
const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
//a diferença com o usoda array, é que nos obejtos usamos
// em volta as chaves
const {name, author, year} = language;
console.log(name, author, year);
