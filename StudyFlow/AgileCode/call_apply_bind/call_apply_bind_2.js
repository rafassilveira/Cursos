const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(circle.calculateArea());
