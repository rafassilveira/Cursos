/*
    O método Object.is compara dois objetos, 
    considerando os tipos de dados, 
    de forma similar ao operador ===

 */
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.is(javascript, javascript));//true