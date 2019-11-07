/*Por meio do destructuring podemos extrair valores de 
arrays e objetos de  uma forma mais simples e direta
 */
const language = "C;Dennis Ritchie;1972".split(";");
const [name, author, year] = language;
console.log(name, author, year);