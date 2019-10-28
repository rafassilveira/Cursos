/* Sempre que vamos definir o nome da função
temo que diferenciar do nome da propriedade´
Utilize chaves diferentes para a função setter
e a propriedade do objeto
*/
const rectangle = {
    set x(x) {
        this.x = x;
    },
    set y(y) {
        this.y = y;
    },
    get area() {
        return this.x * this.y;
    }
};
// Erro de loop
rectangle.x = 10;//RangeError: Maximum call stack size exceeded
rectangle.y = 2;//RangeError: Maximum call stack size exceeded
console.log(rectangle.area);
