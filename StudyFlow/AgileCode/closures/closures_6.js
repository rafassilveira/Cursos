
/*Função fabrica é aquela que retorna 2 objetos */
function fn1() {
    let v1 = 10;
    return {
        m1() {
            console.log(++v1);
        },
        m2() {
            console.log(--v1);
        }
    };
};
const obj1 = fn1();
/*Comos o escopo está sendo compartilhado pelas duas funções
a variavel irá sofrer as alterações e guarda-la
*/
obj1.m1();//11
obj1.m2();//10
