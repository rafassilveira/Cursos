const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 10,
    calculateArea
};
//chama direto a função, chamando o circle como parametro
console.log(calculateArea.call(circle));
