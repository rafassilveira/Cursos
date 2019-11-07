//• sort: Ordena os elementos de acordo com a função de ordenação
const languages = [{
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
//se o retorno for -1 ou 0 a ordem continua a mesma
//
languages.sort(function (a, b) {
    return -1;
});
console.log(languages);
/*
    [ { name: 'Python', year: 1991 },
    { name: 'C', year: 1972 },
    { name: 'Java', year: 1995 } ]
    
   */