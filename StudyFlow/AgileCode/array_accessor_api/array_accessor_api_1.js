/*
Os accessor methods quando invocados retornam informações
 específicas sobre o array
 */
/*

indexOf: Retorna a posição do primeiro elemento encontrado•
lastIndexOf: Retorna a posição do último elemento encontrado
 */
const languages = ["Python", "C", "Java"];
console.log(languages.indexOf("Python"));//0
console.log(languages.lastIndexOf("C"));//1
console.log(languages.indexOf("JavaScript"));//-1 porque não existe