
//*Wraper Objects*
//-Contrutores-Criam novos objetos
// Com construtores:
var name = new String('Teste');
var age = new Number(30);
var ninja = new Boolean(false);

//Sem construtores
var name =  String('Teste');
var age =  Number(30);
var ninja =  Boolean(false);

console.log(age)

//typeof
typeof undefined; //undefined
typeof function () {} // function
typeof true;// boolean
typeof 10;// number
typeof 'JS Ninja';// string

//Quaçquer outro objeto que não seja uma functions ou null retorna 'object'
//Idela é usar para valores primitivos


 function calculator(op) {
   if (operation[op] !== undefined ) {
     return function (a,b) {
        if (a == Number && b == Number) {
          return operation[op](a,b)
        }       
       }
       
     }else
      return false
     
   }
   
 }