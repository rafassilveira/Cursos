/*É possível invocar uma função com menos ou mais parâmetros,
 não necessariamente seguindo o que  está declarado */
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
console.log(sum(5));//NaN
//O ultimo parametro é ifnorado
console.log(sum(1, 2, 3));
