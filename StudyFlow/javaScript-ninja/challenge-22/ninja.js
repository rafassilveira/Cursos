/*
    --Métodos Funções--
        .name
            Retorna o nome da função
            e não tiver retornar undefined
        .length
            faz contagem, de string,caracteremtamanho de array, quantidade de parametros 
            de uma função
            Exemplo: 
                function myFunction(a, b, c) {

                }
                console.log(myFunction.length) //3
        .toString()
             Retorna afunção em string
             Exemplo:
                   function myFunction(a, b, c) {

                   }
                 console.log(myFunction.toString()) //Retorna a funçao em string
        .call()
            Invoca a função imediatamente igual o '()', e também serve para dizer que é o
            'this' 
            Exemplo:
                Com o call, podemis escolher que será o 'this da função
                no exemplo abaixo o this seria o obj2, que está sendo passado 
                para o call.
                (function () {
                  'use strict'

                  function myFunction(params) {
                    console.log(this.lastname)

                  }

                  var obj = {
                    lastname: 'Silveira'

                  }
                  var obj2 = {
                    lastname: 'Santos'

                  }

                  console.log(myFunction.call(obj2));

                })
               





 */

