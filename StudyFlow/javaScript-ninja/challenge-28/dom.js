(function (document) {
  'use strict'
	function DOM(element) {
	  this.element = document.querySelectorAll(element)
	}


	DOM.prototype.on = function on(eventType, callback) {
	  Array.prototype.forEach.call(this.element, function (element) {
	    element.addEventListener(eventType, callback, false)

	  })
	}
	DOM.prototype.off = function off(eventType, callback) {
	  Array.prototype.forEach.call(this.element, function (element) {
	    element.removeEventListener(eventType, callback, false)

	  })
	}
	DOM.prototype.get = function get() {
	  return this.element
	}

	DOM.prototype.forEach = function forEach() {
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
	DOM.prototype.isArray = function isArray(param) {
	  return Object.prototype.toString.call(param) === '[object Array]';
	}
	DOM.prototype.isNumber = function isNumber(param) {
	  return Object.prototype.toString.call(param) === '[object Number]';
	}
	DOM.prototype.isFunction = function isFunction(param) {
	  return Object.prototype.toString.call(param) === '[object Function]';
	}
	DOM.prototype.isString = function isString(param) {
	  return Object.prototype.toString.call(param) === '[object String]';
	}
	DOM.prototype.isObject = function isObject(param) {
	  return Object.prototype.toString.call(param) === '[object Object]';
	}
	DOM.prototype.isBoolean = function isBoolean(param) {
	  return Object.prototype.toString.call(param) === '[object Boolean]';
	}
	DOM.prototype.isNull = function isNull(param) {
	  return Object.prototype.toString.call(param) === '[object Null]' ||
	    Object.prototype.toString.call(param) === '[object Undefined]';
	};
  window.DOM = DOM;
})(document)
