/* 
    definePropertyconfigurable– Permite que uma determinada 
    propriedade seja apagada enumerable– Permite que uma
     determinada propriedade seja enumerada value– Define o 
     valor de uma determinada propriedade writable– 
     Permite que uma determinada propriedade tenha seu valor 
     modificado
*/
const javascript = {};
Object.defineProperty(javascript, "name", {
    value: "JavaScript"
});
console.log(javascript);//{}
console.log(Object.keys(javascript));//[]
console.log(Object.values(javascript));//[]
console.log(Object.entries(javascript));//[]
console.log(javascript.name);