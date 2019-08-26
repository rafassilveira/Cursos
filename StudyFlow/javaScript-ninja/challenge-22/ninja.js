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

                  function myFunction(a.b.c.d) {
                    console.log(this.lastname)

                  }

                  var obj = {
                    lastname: 'Silveira'

                  }
                  var obj2 = {
                    lastname: 'Santos'

                  }
                  //Primeiro parametro é sempre o this , o resto segue os parametros da
                  função
                  console.log(myFunction.call(obj2,'a','b','c','d'));
                  //quando não for necessario passar o this
                  console.log(myFunction.call(null, 'a', 'b', 'c', 'd'));
                  //melhor opção
                  console.log(myFunction.call(myFunction, 'a', 'b', 'c', 'd'));
        .apply
            Tem a mesma funcionalidade que o '.call', porém com o a'.apply' podemos
            passar uma array como parametrosm cada item do array vai ser uma parametro da função

            Exemplo:
                  var arr=[1,2,3,4,5]
                  console.log(myFunction.apply(myFunction, arr));
                  //é possivel passar um array direto
                  console.log(myFunction.apply(myFunction,['a','b','c','d'] ));

                })
        .prototype
                //Serve para estender funcionalidade de contrutores
                (function () {
                  'use strict'

                  function MyFunction(name, lastName) {
                    this.name = name;
                    this.lastName = lastName;
                  }
                  MyFunction.prototype.fullname = function () {
                    return this.name + ' ' + this.lastName;
                  }
                  var rafael = new MyFunction('Rafael', 'Silveira')
                  console.log(rafael.fullname());

                })()
        Array Like
                São métodos que retornam item como se fosse array,mas na verdade não são
                Logo eles não aceitam alguns metodos do js.

                Para contonar isso existem algumas gambiarras:
                Exemplo:



 function myFunction() {
    Array.prototype.forEach.call(arguments, function (item,index) {
      console.log(item);

      })
   }
   myFunction(1,2,3,5,6)

    function myFunction() {
      Array.prototype.reduce.call(arguments, function (acumulado,atual, index) {
        console.log(acumulado + atual);

      })
    }
    myFunction(1, 2, 3, 5, 6)


 */


