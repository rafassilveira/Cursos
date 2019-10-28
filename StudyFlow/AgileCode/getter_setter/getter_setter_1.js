//As funções do tipo getter e setterservem para
// interceptar o acesso as
// propriedades de determinado um objeto
const rectangle = {
    x: 10,
    y: 2,
    //Funciona como uma propriedade
    get area() {
        return this.x * this.y;
    }
};
console.log(rectangle.area);
