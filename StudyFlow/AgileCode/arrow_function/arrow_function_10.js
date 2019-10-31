const createPerson = (name, city, year) => {name, city, year};
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);//error

/* Gera um erro porque o interpretador do js acha que 
vc está retornando cada um e não um objeto
para dar certo temos qe envolve-los com parenteses
como no proximo exemplo */
