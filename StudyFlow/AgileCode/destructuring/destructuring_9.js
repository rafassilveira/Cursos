/*É possível definir nomes diferentes para as variáveis 
em relação as chaves das propriedades do objeto */

const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
// dessa forma o que estamos dizendo ao intepretador é
//para ele pregar os valores da propriedade do objeto 
//referenciado e colocar em uma variável
// a propriedade name do objeto language terá seu valor
//armezenado em n
const {name: n, author: a, year: y} = language;
console.log(n, a, y);
