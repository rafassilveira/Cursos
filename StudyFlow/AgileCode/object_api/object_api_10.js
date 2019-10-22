const javascript = {};
Object.defineProperty(javascript, "name", {
    //Permite que uma determinada propriedade seja enumerada
    //ela passa a sr exibida
    enumerable: true,
    value: "JavaScript"
});
console.log(javascript);//{ name: 'JavaScript' }
console.log(Object.keys(javascript));//[ 'name' ]
console.log(Object.values(javascript));//[ 'JavaScript' ]
console.log(Object.entries(javascript));//[ [ 'name', 'JavaScript' ] ]
