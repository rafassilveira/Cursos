const javascript = {};
Object.defineProperty(javascript, "name", {
//Permite que uma determinada propriedade seja apagada
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name;
console.log(javascript);//{}
console.log(Object.keys(javascript));//[]
console.log(Object.values(javascript));//[]
console.log(Object.entries(javascript));//[]
