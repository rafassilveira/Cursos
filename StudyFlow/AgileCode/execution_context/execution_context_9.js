/* Nesse caso podemos usar a arrow function para invocar o this
porque a arrow sobe um escopo para buscar o this do objeto
*/
const obj1 = {
    p1: 10,
    getP1: function() {       
    
        const fn1 = () => {
            return this.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1());
