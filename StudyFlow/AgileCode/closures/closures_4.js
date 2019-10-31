// //  closure é uma função com um scope chain estático que 
// é definida no momento em que a função é criada, por isso, 
// todas as funções na linguagem JavaScript são closures

function fn1() {
    const v1 = 10;
    return function() {
        console.log(v1);
    };
};
const fn2 = fn1();
const v1 = 100;
fn2();//10
