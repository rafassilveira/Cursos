/*WeakSet é um objeto, similar ao Set, que permite apenas valores
 do tipo Object e mantém as referências de forma fraca, sendo volátil
 e não iterável
 Percebemos que assim como no weakMap o weakSet não é iterável,
 isso porque não não garantia que o o ojeto a ser iterado
 vair estar lá já que ele é volátil e pode ter sido removido
 pelo garbage colector
*/

// Operações
const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};

// •add: Adiciona um elemento
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1); //WeakSet { [items unknown] }

// •has: Retorna true se o elemento existir

console.log(ws1.has(obj1)); //true
console.log(ws1.has(obj2)); //true

// Obs: Caso associarmos aos obj1 ou obj2 uma string ou numero ou
// qualquer outro dado primitivo, ele irá retornar um erro,
//  pois o weakSet aceita apenas objetos

// •delete: Remove um elemento
console.log(ws1.delete(obj1)); //true
console.log(ws1.delete(obj1)); //false, pois já foi deletado

// Pra que serve um WeakSet?

/*
 Serve para que possamos criar coleções onde não iremos
precisar se preocupar com 'memory leaks'-vazamento de memoria
pois apartir do momento que os objetos não são iteráveis logo
eles são elegiveis para que o garbage colector possa retira-los da
memória
 */

/*This: Para que possamos usar a  variável radius fora do escopo
da função  e fazer com que ela seja parte de outro objetos que forem 
construido usamos o this, assim quando o objeto a chamar será invocada
corretamente */
const circles = new WeakSet();
function Circle(radius) {
  //This vai ser o objeto que vai ser retornado
  //registrando todos os objetos que serão adcioando na função
  // construtora Circle dentro WeakSet()
  circles.add(this);
  this.radius = radius;
}
//Adicionando no prototype da função construtora o calculateArea,
// Assim não terá necessiade de estanciar o objeto toda vez que
// a função for chamada
Circle.prototype.calculateArea = function() {
  // Protegendo a função
  //Impedindo que objetos que foram criados manualmente não possam
  //ser chamados, sendo apenas os objetos regitrados pela função
  // construtora
  if (!circles.has(this)) throw "Invalid object";

  return Math.PI * Math.pow(this.radius, 2);
};
const circle1 = new Circle(10);
const circle2 = {
  radius: 5
};
console.log(circle1.calculateArea());

// O call consegue alterar o valor do this,
// com isso quando o o call é chamado passando o circle2 como
// parametro, isso faz que o radius di circle2 assume o valor
// do this na função

console.log(circle1.calculateArea.call(circle2));

// 