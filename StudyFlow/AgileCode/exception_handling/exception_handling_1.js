// Na linguagem JavaScript, qualquer tipo de dado pode
//ser lançado como um errointerrompendo o fluxo de execução


//const Rectangle = function(x, y) {
//     this.x = x;
//     this.y = y;
//     this.calculateArea = function() {
//         if (this.x > 0 && this.y > 0) {
//             return this.x * this.y;
//         } else {
//             throw "Invalid value for x or y";
//         }
//     }
// };
// const rectangle = new Rectangle(10, 2);
// console.log(rectangle.calculateArea());

const Rectangle = function (x, y) {
    this.x = x;
    this.y = y;
    this.calculateArea = function () {
        if (this.x > 0 && this.y > 0) {
            return this.x * this.y
        } else {
            throw "invalid value for x or y"
        }

    }
}
/* Para que possamos tratar de forma apropriada os erros
    das nossas aplicações, é conveniente usar a estrutura
    try catch junto com throw
*/
try {
    const rectangle = new Rectangle(-10, -2);
    console.log(rectangle.calculateArea());
} catch (error) {
    console.log(error); //invalid value for x or y

}