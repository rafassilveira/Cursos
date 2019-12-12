/*As classes são um tipo especial de funçãoque atuam como um 
template para a criação de objetos
 */

class Square {}
console.log(Square);
const Square1 = class {};

/*As classes não sofrem hoisting, não importando a forma como
 foram declaradas
 Ou seja caso tente estanciar ela antes de declarar irá dar erro
 */

// As classes são formadas por 3 tipos de membros: constructor,
//  prototype  methods e static methods

// constructor;

// O constructor é invocado no momento da instanciação de uma
// classe e serve para inicializar um determinado objeto

// A classe funciona muito parecido com as funçoes construtoras
class Square3 {
  // Assim que for invocado o new e passar parametros, será recebido
  // pelo constructor
  constructor(side) {
    this.side = side;
  }
}
const square3 = new Square3(4);
console.log(square3); //Square3 { side: 4 }

//Os prototype methods dependem de uma instância para serem
// invocados, pertecem ao prototipo do objeto
// que esta sendo estanciado

class Square4 {
  constructor(side) {
    this.side = side;
  }
  toString() {
    return `side: ${this.side} area:${this.calculateArea()}`;
  }
  calculateArea() {
    return Math.pow(this.side, 2);
  }
  
}

const square4 = new Square4(4);
console.log(square4); //Square4 { side: 4 }
console.log(square4.toString()); //side: 4 area:16
console.log(square4.calculateArea()); //16

// Os static methodsnão dependem de uma
// instância para serem invocados
// Exemplo no example11

