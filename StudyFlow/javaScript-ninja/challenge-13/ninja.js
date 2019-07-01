//toString
var obj = {a:1,b:2,c:3,d:5,e:6}

console.log(obj.toString()); //[object Object]

var arr=[1,2,3,5]
console.log(arr.toString());// retorna o array em string
//Muito parecido com o join, porém o join vc consegue passar parametnos para separa os objetos


// concat
//vai concatenar com o numero passado na arrya, mas nao altera o array

console.log(arr.concat(5));

//unshift
//add no um item no começo do array
console.log(arr.unshift('a'));
console.log(arr);


//shift
//remove o primeiro item
console.log(arr.shift('a'));
console.log(arr);


//slice
//Mostra pedaçõs do arrays
//slice(a,b) onde "a" é começo do indice da array e "b" até onde deve cortar, b não será mostrado
console.log(arr.slice(0,0));//mostra nada
console.log(arr.slice(0, 1))// mostra somente o primeiro item
console.log(arr.slice(2, 4)) // mostra o terceiro item [2] e mostra antes do quinto item
console.log(arr.slice( -2))// mostra os dpos ultimos

//splice
//ele modifica , adciona e remove do array
//arr.splice(a,b) 'a' é a posição do arrya de inicio do corte, 
//e o 'b' vai cortar a quantidade de intem apartir de 'a'

console.log(arr.splice(3));// remove os primeiros 3 itens
arr.push(1,2,3,5,6,5,8)
console.log(arr);
console.log(arr.splice(2,4));
console.log(arr);
//splice(a,b,c)'a' posição do item,'b'=0 porque não quer remover nenhum,'c' itens add apartir de 'aa
arr.splice(1,0,'a')// adicionando 'a' na segunda posição array
console.log(arr);
//apartir da seunga posição retirar 4 item e colocar os quantro itens indicados
arr.splice(1,4,'rafael','pamela','bulma','bulminha')
console.log(arr);

//foreach:Masi rapido que o for
var arr =[1,2,3,5,6,7,8]
// vc não precisar usar todos os parametros

arr.forEach(function (item, index,array) {
    console.log(item,index,array);
})
   /*   1 0[1, 2, 3, 5, 6, 7, 8]
        2 1[1, 2, 3, 5, 6, 7, 8]
        3 2[1, 2, 3, 5, 6, 7, 8]
        5 3[1, 2, 3, 5, 6, 7, 8]
        6 4[1, 2, 3, 5, 6, 7, 8]
        7 5[1, 2, 3, 5, 6, 7, 8]
        8 6[1, 2, 3, 5, 6, 7, 8] 
                                */   
    
//every: Serve para testar cada item no array, se todos tiveram a condição estabelicida
// então retornará true senão false

// verifica e atribui para variavel se todos os item da arrya são menos que 5
var every = arr.every(function (item) {
    console.log(item)

    return item < 5
    
})
console.log(every) 

//some:verifica e atribui para variavel se pelo menosum dos itens da array são menores que 5
var some = arr.some(function (item) {
    console.log(item)

    return item < 5

})
console.log(some) 

//map:Parecido com o foreach, ele pecorre por toda a array,
// depos ele retorna uma nova arrya conforme os parametros passados

//vai somar a cada item da array "mais um" e depois retornar um array com novos numeros 
var map = arr.map(function (item, index, arrya) {
    return item + 1;
    //return{index:index, item:item};// retonar um objeto com as propriedades passadas
  })
  console.log(arr ,map);
  

  //filter: paraceidor com o map, pecorre a array e traz somente os item na condições passada

  // retornar somente itens da array maiores que 2
  var filter = arr.filter(function (item, index, array) {  
        return item >2
  })

  console.log(filter);
  
