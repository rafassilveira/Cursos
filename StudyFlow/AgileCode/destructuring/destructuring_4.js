//É possível extrair os valores de um arraycriando variáveis 
//em ordem, de acordo com a posição de cada elemento

// Com a desestruturação, podemos escolher quais dados
//armazenar nas variáveis, porém não formos sar algum
//dado extraído, devemos colocar um virgula para dizer
//ao interpretador que é para passar para a proxima variável
//o dado em questão

const [, author, year] = "C;Dennis Ritchie;1972".split(";");
console.log(author, year);

