const sum = () => {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));//error

/* Se erro acontence porque quando usamos a arroy function
o arguments, assim como o this, acaba sendo fora do escopo
local gerando um erro, o indicado é usar a notação literal
mesmo da funçaõ

*/
