/*
Crie um array com 5 items (tipos variados).
*/
 arr = [true, false,"Rafael",1,function () {  }]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    arr.push(item)
    return arr
  }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
> addItem(newArr = [1, 2, 3])
[true,
    false,
    'Rafael',
    1,
    [Function],
    'teste',
    'teste:teste',
    'teste',
    [Function: teste],
    [1, 2, 3]] 

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + arr[9][1])// onde o [9] corresponde ao decimo item do primeiro array e o [1] corresponde ao segundo item da segunda array
O segundo elemento do segundo array é 2

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
  > console.log("O Primeiro  array tem " + arr.length + " itens.")
O Primeiro  array tem 6 itens.
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
  > arr
  [true, false, 'Rafael', 1, [Function], [1, 2, 3]]
  > console.log("O segundo array tem " + arr[5].length + " itens.")
O segundo array tem 3 itens.


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 20

while (num >= 20 && num <= 30) {  
 /* if (num % 2 == 0) {
    console.log(num);   
  }*/
  console.log (num % 2 ==0 ? + num :"")
  num++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
while (num >= 20 && num < 30) {
  if (num % 2 == 1) {
    console.log(num);
  }

  num++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for (var index = 100; index <=200; index++) {
  console.log(index % 2 == 0 ? + index:"")
  
}
console.log( 'Números ímpares entre 111 e 125:' );

for (var index = 100; index <= 200; index++) {
  console.log(index % 2 == 1 ? +index :"")

}