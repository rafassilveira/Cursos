/*Assim como nas funções, é possível definir valores padrão
 para cada  uma das variáveis
 */
const language = "C;Dennis Ritchie;1972".split(";");
// const language = "C;Dennis Ritchie".split(";");
// const language = "C;".split(";");

const [name = "-", author = "-", year = "-"] = language;

console.log(name, author, year); //C Dennis Ritchie 1972
console.log(name, author, year); //C Dennis Ritchie -
console.log(name, author, year); //C  -