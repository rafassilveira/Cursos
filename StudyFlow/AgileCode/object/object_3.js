/*
    Com a shorthand notation, quanto temo variáveis com o mesmo nome
    de propriedaes de objetos, serão atribuido automaticamente,
    Funcionalidade apartir do ES6
*/
const title = "Clean Code";
const author = "Robert C. Martin";
const pages = 464;
const language = "English";
const available = true;
const book = {
    title,
    author,
    pages,
    language,
    available
};
console.log(book);