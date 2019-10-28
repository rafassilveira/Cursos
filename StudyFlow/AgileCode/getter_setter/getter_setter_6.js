/*
    Por meio da operação defineProperty da Object API, 
    também é possível definir 
    funções do tipo getter e setter
 */
const rectangle = {};
Object.defineProperty(rectangle, "area", {
    get() {
        return this.x * this.y;
    }
});
rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);
