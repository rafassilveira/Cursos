const obj1 = {
    p1: 10,
    getP1: function () {
        function fn1() {

            return this.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1()); //undefined
/*
    retorno de undefined se dá porque apesar do this,
    ser aquele de quem o está invocando, no nosso caso
    é o obj1, perceba que antes é invocado pelo return no
    seu proprio escopo
 */