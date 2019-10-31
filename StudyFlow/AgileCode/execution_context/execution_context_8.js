/* para resolver o problema da invocação do this
podemos atribui o this ao that, isso deixará o this
no escolpo correto
 */
const obj1 = {
    p1: 10,
    getP1: function() {
        const that = this;
        function fn1() {
            return that.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1());//10
