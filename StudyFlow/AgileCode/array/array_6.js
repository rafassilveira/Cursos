//  propriedade length indica a quantidade de 
// elementos que existem dentro do Array

const timeUnits = [];
timeUnits[0] = "minute";
timeUnits[1] = "hour";
timeUnits[2] = "day";
console.log(timeUnits); //[ 'minute', 'hour', 'day' ]
console.log(timeUnits.length);//3
delete timeUnits[1];
console.log(timeUnits); //[ 'minute', <1 empty item>, 'day' ]
console.log(timeUnits.length);//3
/*Não é recomendado usar o */