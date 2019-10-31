const v1 = 10;
function fn1() {
    console.log(v1);
}
function fn2(fn1) {
    const v1 = 100;
    fn1();
}
fn2(fn1);//10 porque por o scope é estatico que é definida na sua criação
