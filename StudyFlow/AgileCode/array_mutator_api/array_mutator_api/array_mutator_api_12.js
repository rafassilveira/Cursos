/*• fill: Preenche os elementos de acordo com a posição de 
início e fim */
const languages = ["Python", "C", "Java"];
//Irá preenver o array inteiro com o mesmo elemento
languages.fill("JavaScript");
console.log(languages); //[ 'JavaScript', 'JavaScript', 'JavaScript' ]