//O this referencia ao objeto que está invocando,
// nesse caso ao rectangle

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function () {
        return this.x * this.y;
    }
};
console.log(rectangle.calculateArea());