/*WeakMap é um objeto, similar ao Map, que permite apenas
 chaves do tipo Objecte mantém as referências de forma fraca, 
 sendo volátil e não iterável */

//Operações
const wm1 = new WeakMap();
//•set: Adiciona um par de chave e valor
const obj1 = {};
const obj2 = {};

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

console.log(wm1); //WeakMap { [items unknown]

//•has: Retorna true se a chave existir

console.log(wm1.has(obj1)); //true

//•get: Retorna o valor de uma determinada chave
console.log(wm1.get(obj1)); //obj1
console.log(wm1.get(obj2)); //obj2
const obj3 = "key1";
const obj4 = "key2";
//Por ser não interável o weakmap não permite outra atribuição se nao
//um objeto
// wm1.set(obj3, "obj3"); //Invalid value used as weak map key
// wm1.set(obj4, "obj4"); //Invalid value used as weak map key
console.log(wm1.get(obj3)); //obj1
console.log(wm1.get(obj4)); //obj2

//•delete: Remove um par de chave e valor
// Caso exista o objeto irá deletar e retornar true;
console.log(wm1.delete(obj1)); //true
console.log(wm1.delete(obj2)); //true

// OBS:Sem a referência para a chave não  é possível acessar o valor

const areas = new WeakMap();
const rectangle1 = {
  x: 10,
  y: 2
};

const rectangle2 = {
  x: 5,
  y: 3
};

function calculateArea(rectangle) {
  // caso exista ja setado o rectangle irá apenas retornar o que esta setado
  //não irá fazer todo o calculo novamente, economizando pode computacional
  // e armazenando na em cahe os valores
  if (areas.has(rectangle)) {
    console.log("using cache");

    return areas.get(rectangle);
  }
  const area = rectangle.x * rectangle.y;
  areas.set(rectangle, area); 

  return area;
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
