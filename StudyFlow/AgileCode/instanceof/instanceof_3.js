/*
 Com o operador instanceof é possível verificar se um objeto 
 foi criado por meio de uma determinada função construtora analisando 
 a sua cadeia de protótipos
 */
const _instanceof = function (obj, fn) {
    if (obj === fn.prototype) return true;
    if (obj === null) return false;
    return _instanceof(obj.__proto__, fn);
}
const date = new Date();
console.log(date instanceof Date); //true
console.log(date instanceof Object); //true
console.log(date instanceof Array); //false
console.log(_instanceof(date, Date)); //true
console.log(_instanceof(date, Object)); //true
console.log(_instanceof(date, Array)); //false