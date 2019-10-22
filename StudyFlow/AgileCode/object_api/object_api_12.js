const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript",
    //Permite que uma determinada propriedade tenha 
    //seu valor modificado 
    writable: true
});
javascript.name = "ECMAScript";
console.log(javascript);//{ name: 'ECMAScript' }
console.log(Object.keys(javascript));//[ 'name' ]
console.log(Object.values(javascript));//[ 'ECMAScript' ]
console.log(Object.entries(javascript));//[ [ 'name', 'ECMAScript' ] ]
