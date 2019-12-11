/*São convenções implementadas por Arrays, Maps, Sets e
 Strings que os tornam iteráveis  por meio de um protocolo de 
 iteração
 */

const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "Javascript"];
let languages = [...classicLanguages, ...modernLanguages];
console.log(languages); //[ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'Javascript' ]

/*Além do Array é possível utilizar o protocolo de iteração dos 
objetos Map, Set e String*/

// Usando em mapas

languages = new Map([
  ["Fortran", 1957],
  ["Lisp", 1958],
  ["COBOL", 1959]
]);

console.log("Usando o spread operator: " + [...languages]);

for (let language of languages) {
  console.log(language); //[("Lisp", 1958)];[("COBOL", 1959)];[ 'Fortran', 1957 ]
}

// usando o destructing

for (let [language, year] of languages) {
  console.log(language, year);
  //Fortran 1957;Lisp 1958;COBOL 1959;
}

// usando o Set

languages = new Set(["Fortran", "Lisp", "COBOL"]);
for (const language of languages) {
  console.log(language); //Fortran;Lisp;COBOL
}
// usando o sprea operator

console.log([...languages]); //[ 'Fortran', 'Lisp', 'COBOL' ]

// Usando em strings

language = "COBOL";

for (const char of language) {
  console.log(char); //C;O;B;O;L
}

// Podemos ainda transformar em um arrya

console.log([...language]); //[ 'C', 'O', 'B', 'O', 'L' ]

// Todo Iterable tem uma propriedade de chave Symbol.iterator
// que define o protocolo de iteração para o objeto

languages = ["Fortran", "Lisp", "COBOL"];
iterator = languages[Symbol.iterator]();
// Toda vez vamos iterar em um objeto no js, a função
// next é invocada retornando um objeto com duas propridade
// com o valor iterável no value e se já acabou a iteração,
// retornando false
console.log(iterator.next()); //{ value: 'Fortran', done: false }
console.log(iterator.next()); //{ value: 'Lisp', done: false }
console.log(iterator.next()); //{ value: 'COBOL', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

languages = new Map([
  ["Fortran", 1957],
  ["Lisp", 1958],
  ["COBOL", 1959]
]);
//no Map volta pares de chaves
iterator = languages[Symbol.iterator]();
console.log(iterator.next()); //{ value: [ 'Fortran', 1957 ], done: false }
console.log(iterator.next()); //{ value: [ 'Lisp', 1958 ], done: false }
console.log(iterator.next()); //{ value: [ 'COBOL', 1959 ], done: false }
console.log(iterator.next()); //{ value: undefined, done: true }
languages = new Map([
  ["Fortran", 1957],
  ["Lisp", 1958],
  ["COBOL", 1959]
]);
// usando o entries ao invés do Symbol
iterator = languages.entries();
console.log(iterator.next()); //{ value: [ 'Fortran', 1957 ], done: false }
console.log(iterator.next()); //{ value: [ 'Lisp', 1958 ], done: false }
console.log(iterator.next()); //{ value: [ 'COBOL', 1959 ], done: false }
console.log(iterator.next()); //{ value: undefined, done: true }
//values
iterator = languages.values();
console.log(iterator.next()); //{ value: 1957, done: false }
console.log(iterator.next()); //{ value: 1958, done: false }
console.log(iterator.next()); //{ value: 1959, done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

//Ainda podiriamos usar o Set ou uma string mesmo
//exemplos no example20 adiante
console.log("*************************************************************");

// Como criar um Iterable?

//Usando o rest parameter para receber um parametro e já
// transformar em uma array
function createIterator(...array) {
  let i = 0;
  return {
    next() {
      if (i < array.length) {
        return {
          value: array[i++],
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
}
iterator = createIterator("Fortran", "Lisp", "COBOL");

console.log(iterator.next()); //{ value: 'Fortran', done: false }
console.log(iterator.next()); //{ value: 'Lisp', done: false }
console.log(iterator.next()); //{ value: 'COBOL', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

//criando um itaravel para usar um for of
//incluindo o Symbol.interator
function createIterable(...array) {
  return {
    // Todo objeto tem o Symbol.iterator, esse Symbol tem o protocolo
    // de iteração, assim quando invocar a função já retorna com a iteração
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < array.length) {
            return {
              value: array[i++],
              done: false
            };
          } else {
            return {
              value: undefined,
              done: true
            };
          }
        }
      };
    }
  };
}
iterable = createIterable("Fortran", "Lisp", "COBOL");
for (let language of iterable) {
  console.log(language);
}
console.log(...iterable);
