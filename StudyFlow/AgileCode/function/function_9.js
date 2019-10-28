//rest parameter
//O rest parameter deve ser sempre o último
// da lista de parâmetros
//Vai agrupar todos os parametros dentro de um array
let sum = function(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));//45
