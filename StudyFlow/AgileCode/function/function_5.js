/*
 Na linguagem JavaScript, as funções são de primeira classe,
 ou seja, podem ser atribuídas a uma variável, passadas por
  parâmetro ou serem retornada de uma outra função

 */
let sum = function(a, b) {
    return a + b;
};
let subtract = function(a, b) {
    return a - b;
};
let calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    }
};
console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));
