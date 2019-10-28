/*
    A função fábrica, que é um tipo de padrão,
     retorna um novo objeto após ser invocada diretamente

 */
const createPerson = function(name, city, year) {
    return {
        //short notation: name:name => name
        name,
        city,
        year,
        getAge() {
            return ((new Date()).getFullYear() - this.year);
        }
    }
};
const person1 = createPerson("Linus Torvald", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
