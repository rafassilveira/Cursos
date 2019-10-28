/*
    A operação bind permite encapsular o this
     dentro da função, retornando  a
 */
const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));//314
console.log(calculateAreaForCircle(Math.ceil));//315
