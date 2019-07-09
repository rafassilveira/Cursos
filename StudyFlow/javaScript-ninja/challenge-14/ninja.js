//REDUCE
// passa por todos itens da array

var arr = [1,2,3,4,5,6]
//acumuluado:é soma do numeto atual mais o valor passado:"0", caso nao passe algum numero
//será o proximo item 
//atual:é o item do index adual
//index
//array
var reduce = arr.reduceRight(function (acumulado,atual,index,array) {
    return acumulado + atual;
  },0)

  console.log(reduce);

  //Faz a contagem da direita para esquerda(reversa)
  var reduce = arr.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;
  }, 0)

  console.log(reduce);
  
  //indexOf
  //Verifica se existe o parametro passado e retorna sua posição na array
  //Caso não existe ele retorna "-1"
  console.log(arr.indexOf(1));
  //O parametro '3' indica em que posição ele deve começar a procurar
  console.log(arr.indexOf(1,3))
    //Ele tem a mesma função do indexOf com a difrença que ele procura do fim da array para o inicio
    // E scom o paramentro ele irá contar apartir do ultimo indice
    // A IDENTIFICAÇÃO DO INDICE NÃO MUDA
  console.log(arr.lastIndexOf(2, 3))
  
 //isArray
 //Retorna true ou false se for uma array
 console.log(Array.isArray(arr))
  
  