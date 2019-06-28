/*
** DO...WHILE **
var counter =1;
while (counter <10){
    console.log(counter++);{1,2,3,4,5,6,7,8,9} //verifica primeiro
}

do {
    console.log(counter++);

}while (counter <10 ); //esse ponto e virgula é obrigatorio 


** FOR IN **
Usado para acessar propriedades


var car = {
    brand:'VW',
    model:'Gol',
    year:2013
};
//O for in é mais pesado, que ops demais lacos de repetição
// Dessa forma o for irá no mostrar no console as propriedades do 'car'
for(var prop in car){
    console.log( prop )
   // console.log(car[prop]);
    
}
//O codigo abaixo irá verificar se existe a propriedade doors e brand em car
console.log('doors in car?','door' in car,'brand' in car)
*/

