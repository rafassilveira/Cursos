//sem o writable, não há alteração na propriedade name
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript"
});
javascript.name = "ECMAScript";
console.log(javascript);//{ name: 'JavaScript' }
console.log(Object.keys(javascript));//[ 'name' ]
console.log(Object.values(javascript));//[ 'JavaScript' ]
console.log(Object.entries(javascript));//[ [ 'name', 'JavaScript' ] ]
