
//Função auto invocada
//Forna~ça o escopo local
//executa imediantamente

(function () 
{
    console.log("teste")
  })
  (); 

function calculator(a, b) {
  num1 = a;
  num2 = b;
  return (function (callback) {

    return callback();

  })

}

var sum =calculator(2,3)/*(function () { 
  return num1+num2
 })*/
 
console.log(sum(function () { 
  return num1+num2
 }))
 
 