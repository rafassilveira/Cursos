/*
O Execution Context é o ambiente onde o código é executado,
 sendo composto pelo variable object, scope chain e this
Dentro de uma função é possível acessar variáveis 
existentes fora dela, por meio da scope chain

 */
const v1 = 10;
const fn1 = function() {
    console.log(v1);
};
fn1();
