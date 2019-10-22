/*
  Caso a mesma propriedade exista no objeto e no seu protótipo
   a propriedade do próprio objeto é retornada, fazendo 
   sombra à propriedade do protótipo

 */
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;
const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";
for (let key in javascript) {
    console.log(key, javascript[key]);
}
