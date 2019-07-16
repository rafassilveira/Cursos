(function () {
  /*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
//incompleto
function Person (name, lastName,age) { 
  this.name = name;
  this.lastName = lastName;
  this.age = age;
      this.getFullName = function () {

        return this.name + " " + this.lastName

      }
      this.getAge = function () {
          return this.age
        }
      this.addAge = function () {
        //arguments serve para pegar os parametros passados sem serem declarados
        //ele funciona como array, mas não é um
        //[0] pegerá o primeiro paramentro passado
        this.age +=arguments[0]
        //this representa o objeto a ser estanciado
        return this;
        }
 }

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
console.log( 'Novas pessoas criadas à partir de Person:' );

var rafael = new Person ('Rafael','Silveira',30)
var pam = new Person('Pâmela', 'Silva', 31)
var bulma = new Person('bulma', 'bulldog', 3)

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log(rafael.getFullName());
console.log(pam.getFullName());
console.log(bulma.getFullName());

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );

console.log(rafael.getFullName() + " tem: " + rafael.getAge() +" anos" );
console.log(pam.getFullName() + " tem: " + pam.getAge() +" anos" );
console.log(bulma.getFullName() + " tem: " + bulma.getAge() +" anos" );
/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
rafael.addAge(5);
pam.addAge(4);


console.log(rafael.getFullName() + " tem: " + rafael.getAge() +" anos" );
console.log(pam.getFullName() + " tem: " + pam.getAge() +" anos" );
//encadeando metodos
console.log(bulma.getFullName() + " tem: " + bulma.addAge(3).getAge() +" anos" );

})(); //fim IIFE









