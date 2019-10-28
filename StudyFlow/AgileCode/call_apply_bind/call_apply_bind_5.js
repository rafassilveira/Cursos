const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
//Primeiro parametro é objeto e o segunto o parametro dafunção
//invocada dentro do calculateArea
console.log(calculateArea.call(circle, Math.round));//314
//Forma de passar parametros com o aply exige que seja com
//notação de array
console.log(calculateArea.apply(circle, [Math.ceil]));
