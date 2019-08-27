/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function (win,doc) {

 let $calculadora = doc.querySelector('[data-js="calculadora"]');
 let $zero = doc.querySelector('[data-js="zero"]');
 let $one = doc.querySelector('[data-js="one"]');
 let $two = doc.querySelector('[data-js="two"]');
 let $three = doc.querySelector('[data-js="three"]');
 let $four = doc.querySelector('[data-js="four"]');
 let $five = doc.querySelector('[data-js="five"]');
 let $six = doc.querySelector('[data-js="six"]');
 let $seven = doc.querySelector('[data-js="seven"]');
 let $eigth = doc.querySelector('[data-js="eigth"]');
 let $nine = doc.querySelector('[data-js="nine"]');
 let $plus = doc.querySelector('[data-js="plus"]');
 let $sub = doc.querySelector('[data-js="sub"]');
 let $multi = doc.querySelector('[data-js="multi"]');
 let $div = doc.querySelector('[data-js="div"]');
 let $equal = doc.querySelector('[data-js="equal"]');
 let $clear = doc.querySelector('[data-js="clear"]');


var resultado =''



 $zero.addEventListener('click', function () {
   resultado=resultado+0
   $calculadora.value = $calculadora.value + 0
 }, false)
 $one.addEventListener('click',function () {
   resultado = resultado + 1
  $calculadora.value = $calculadora.value + 1
 },false)
 $two.addEventListener('click', function () {
   resultado = resultado + 2
   $calculadora.value = $calculadora.value + 2
 }, false)

  $three.addEventListener('click', function () {
    resultado = resultado + 3
    $calculadora.value = $calculadora.value + 3
  }, false)
   $four.addEventListener('click',function () {
     resultado = resultado + 4
  $calculadora.value = $calculadora.value + 4
 },false)
 $five.addEventListener('click', function () {
   resultado = resultado + 5
   $calculadora.value = $calculadora.value + 5
 }, false)
  $six.addEventListener('click',function () {
    resultado = resultado + 6
  $calculadora.value = $calculadora.value + 6
 },false)
 $seven.addEventListener('click', function () {
   resultado = resultado + 7
   $calculadora.value = $calculadora.value + 7
 }, false)
 $eigth.addEventListener('click', function () {
   resultado = resultado + 8
   $calculadora.value = $calculadora.value + 8
 }, false)
 $nine.addEventListener('click', function () {
   resultado = resultado + 9
   $calculadora.value = $calculadora.value + 9
 }, false)

 $plus.addEventListener('click', function () {
   $calculadora.value = $calculadora.value + "+"
 }, false)

  $equal.addEventListener('click', function () {
    console.log(+resultado);


  }, false)







  })(window, document)

