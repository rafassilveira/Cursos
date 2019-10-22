/*
 O método Object.entries retorna as propriedades do objeto
    em pares de chave e valor
 */
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.entries(javascript));
console.log(Object.entries(javascript)[1]);