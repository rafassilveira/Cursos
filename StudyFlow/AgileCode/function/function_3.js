/*
     Quando usamo function declaration, ela cai no contexto de
     execução do javascript, ou seja o interpretador antes
     de executar o codigo verfica se há alguma função e a joga
     para o inicio do código, isso se chama hoisting
     o mesmo não acontece com
     a function expression
 */

console.log(sum(2, 2));

function sum(a, b) {
    return a + b;
}