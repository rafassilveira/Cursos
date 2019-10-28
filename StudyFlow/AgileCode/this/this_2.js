const rectangle = {
    x: 10,
    y: 2,
    // no ES6 não meis necessário escre literalmente fucntion
    // bas abrir e fechar parenteses que ele vai entender
    calculateArea() {
        return this.x * this.y;
    }
};
console.log(rectangle.calculateArea());
