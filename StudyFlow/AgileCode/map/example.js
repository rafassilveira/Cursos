/*Um Map é um objeto que armazena um conjunto de chaves 
e valores que podem ser de qualquer tipo de dado
 */

const timeUnits = new Map([
  ["second", 1],
  ["minute", 60]
]);

console.log(timeUnits); //Map { 'second' => 1, 'minute' => 60 }

// Transformando em Array
console.log(Array.from(timeUnits)); //[ [ 'second', 1 ], [ 'minute', 60 ] ]

// Operações

// size: Retorna a quantidade de elementos, muito similiar ao lenght do array
//Retorna a quantidade de pares

console.log(timeUnits.size); //2

// set: Adiciona um par de chave e valor
// é uma outra forma de inserir dados

const timeUnits2 = new Map();
timeUnits2.set("second", 1);
timeUnits2.set("minute", 60);
timeUnits2.set("hour", 3600);
console.log(timeUnits2); //Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
console.log(timeUnits2.size); //3

//forEach: Itera sobre o mapa

// a chave acabando sendo o valor de cada par e value o nome da chave
timeUnits2.forEach(function(value, key) {
  console.log(key, value); //second 1 minute; 60;hour 3600;
});

// has: Returna true se a chave existir

// obs:é util para verificar se existe algo ante de fazer alguma operação
console.log(timeUnits2.has("hour")); //true
console.log(timeUnits2.has("day")); //false

//get: Retorna o valor de uma determinada chave
console.log(timeUnits2.get("hour")); //3600
console.log(timeUnits2.get("day")); //undefined

// delete: Remove um par de chave e valor e retorna true se ela exista e
// foi deletado com sucesso, ou false se não existe o par de chaves

console.log(timeUnits2.delete("hour")); //true
console.log(timeUnits2.get("hour")); //undefined

// clear: Remove todos os elementos

console.log(timeUnits2);
timeUnits2.clear();
console.log(timeUnits2);

// Qual é a diferença para um objeto?
// ** As chaves do Map o dado pode ser de qualquer tipo e nao apenas string

const obj = {};

obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolena";
obj["true"] = "String";
//Os valores que vão no objetos são convertidos em String
console.log(obj[10]); //String
console.log(obj["10"]); //String
console.log(obj[true]); //String
console.log(obj["true"]); //String
console.log(obj); //{ '10': 'String', true: 'String' }

// Agora usan o map
// Percebemos que que as keys tem seus valroes corretos
const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");
console.log(map.get(10)); //Number
console.log(map.get("10")); //String
console.log(map.get(true)); //Boolean
console.log(map.get("true")); //String

// Percebemos que os apesar de 'toString não estar setado para
//  o objeto, 'toString' está em seu protipo por isso ele retorna falso
console.log("toString" in obj); //true
console.log("109" in obj); //false

// Para resolver isso podemos usar o const nameVar=Object.create(null)
// Assim teremos um objeto mais limpo

// O problema acima não acontece com o map, por que o mesmo não herda
//  a herança do prototipo
console.log(map.get("toString"));
