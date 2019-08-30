(function(){
	/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/


 'use strict'
	function DOM (element){
		this.element = document.querySelectorAll(element)
	}


	DOM.prototype.on = function on(eventType,callback){
		Array.prototype.forEach.call(this.element,function(element){
			element.addEventListener(eventType,callback,false)

		})
	}
	DOM.prototype.off = function off(eventType,callback){
		Array.prototype.forEach.call(this.element,function(element){
			element.removeEventListener(eventType,callback,false)

		})
	}
	DOM.prototype.get = function get(){
		return	this.element
	}

	DOM.prototype.forEach= function forEach(){
		Array.prototype.forEach.apply(this.element, arguments)
  }
  DOM.prototype.map = function map() {
    Array.prototype.map.apply(this.element, arguments)
  }

   DOM.prototype.filter = function filter() {
    Array.prototype.filter.apply(this.element, arguments)
   }
   DOM.prototype.reduce = function reduce() {
     Array.prototype.reduce.apply(this.element, arguments)
   }
   DOM.prototype.reduceRight = function reduceRight() {
     Array.prototype.reduceRight.apply(this.element, arguments)
   }
   DOM.prototype.every = function every() {
     Array.prototype.every.apply(this.element, arguments)
   }

   DOM.prototype.some = function some() {
     Array.prototype.some.apply(this.element, arguments)
   }
   /*-isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
   O método isNull deve retornar `true`
   se o valor
   for null ou undefined.*/
   DOM.prototype.is= function is() {
     Object.prototype.toString.call(this.element, arguments)
     }

     function isNumber(obj) {
       return is(obj) === '[object Number]'
     }
     console.log(isNumber($a));

	var $a = new DOM ('[data-js="link"]')
  console.log($a)



	$a.filter(function(item){
		console.log(item.firstChild.nodeValue=="Link 1")//true
	})

  //forEach, map, filter, reduce, reduceRight, every e some.

	})()





