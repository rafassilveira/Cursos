/*
    O método Object.assign faz a cópia das propriedades 
    dos objetos passados por parâmetro para o objeto alvo, 
    que é retornado

 */
const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional",
    pages: 404
});
console.log(javascript);