/*Um Set é um objeto que armazena elementos únicos,
 que podem ser de qualquer tipo de dado
 */

//  São muito parecidos com array, porém eles são unicos e podem
// ser de qualquer tipo de dados

const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);

console.log(charsets); //Set { 'ASCII', 'ISO-8859-1', 'UTF-8' }

// Voltando para array
console.log(Array.from(charsets)); //[ 'ASCII', 'ISO-8859-1', 'UTF-8' ]

// Operações

// •size: Retorna a quantidade de elementos
console.log(charsets.size);

// •add: Adiciona um elemento
const charsets2 = new Set();
charsets2.add("ASCII");
charsets2.add("ISO-8859-1");
charsets2.add("UTF-8");

console.log(charsets2); //Set { 'ASCII', 'ISO-8859-1', 'UTF-8' }

// •forEach: Itera sobre o set
charsets2.forEach(charset => {
  console.log(charset); //ASCIII;SO-8859-1;UTF-8
});

// •has: Retorna true se o elemento existir
console.log(charsets2.has("ASCII")); // true

// •delete: Remove um elemento
console.log(charsets2.delete("ASCII")); //true
console.log(charsets2.delete("ASCII")); //false

// •clear: Remove todos os elementos
console.log(charsets); //Set { 'ASCII', 'ISO-8859-1', 'UTF-8' }
console.log(charsets.size); //3
console.log(charsets.clear()); //undefined
console.log(charsets); //Set {}
console.log(charsets.size); //0

//Qual é a diferença para um array?

// Basicamente emnão permitir elementos duplicados

let array = [];
array.push(10);
array.push(10);
array.push(10);
console.log(array); //[ 10, 10, 10 ]
console.log(array.length); //3
// No caso do set não permitidos valores iguais
let set = new Set();
set.add("10");
set.add("10");
set.add("10");
console.log(set); //Set { '10' }
console.log(set.size); //1

// Podemos também tirar os elementos repitidos usando o set

array = [10, 10, 10];
console.log(array);//[ 10, 10, 10 ]
console.log(array.length);//3

set = new Set(array);
console.log(set);//Set { 10 }
console.log(set.size);//1
array = Array.from(set);
console.log(array);//[ 10 ]
console.log(array.length);//1
