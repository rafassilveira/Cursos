/*
    O interpretador js vai subindo de escopo até encontrar
    a variável referida
    nota-se que v1 está no escopo global,e mesmo chamando a
    v1 dentro da fn2 que está dentro fn1, funciona perfeitamente
    
 */
const v1 = 10;
const fn1 = function() {
    const fn2 = function() {
        console.log(v1);
    }
    fn2();
};
fn1();
