//Objetos
//criando
obj1={
    prop1: 'prop1',
    prop2 :' prop2'
};

//mudando o valor da prop
obj1.prop1= 'prop1Changed'
//deletando
delete obj1.prop1;

console.log(obj1);

//Criando Objetos

// com construtor
var newObj = new Object();// sem contrutor é mais rápido

//Cada obejto tem um prototipo que vai herdar de outro obejto
Object.prototype

//Object.create
Object.create

var obj ={ y:2};
// obj2 vai hedar os mesmomv alores que de obj,
//o que for alterado no obj2 nao vai ser alterado no obj
// Porém, o que for alterado no obejto pai, será modficado nonobejto filho

var obj2 = Object.create(obj);
obj2.x = 2
// Essa propriedade hasOwnProperty, veririca se a propriedade é herdada ou não
console.log(obj2.hasOwnProperty('x')) 
//1.Vai pecorrer pelas propriedades do obj2 
for(var prop in obj2){
    //se tiver uma propriedade nao herdada mostrará no console
    if (obj2.hasOwnProperty(prop) ){
        console.log(prop);
        
    }
}

//Object.keys
//mostra as propriedades
console.log(Object.keys(obj));

//conta a quantidade de propridade
console.log(Object.keys(obj).length);

//Verifica se o obj2 herdou propriedades do obj
console.log(obj.isPrototypeOf(obj2));

//Transforma um string em objeto normal
console.log(JSON.parse(`true`));//true

//transfomr aum ojeto normal em um string
console.log(JSON.stringify(true));//'true'

//      ** array **


console.log(arr = ['rafael', 'pamela', 'bulma']);
//mostra o tamanho do array
console.log(arr.length);
// coloca na ultma posição do array um item
console.log(arr.push('bulminha'));
//deleta o ultimo item do array
console.log(arr.pop());
//junta todos os itens da array, e transforma em umnica string
console.log('Minha familia é: ', arr.join(', '));
//inverte a ordem dos itens da array, 1,2,3 > 3,2,1 modifica o array
console.log(arr.reverse());
//ordena o array em orde
m alfabetica modifica o array
console.log(arr.sort());



