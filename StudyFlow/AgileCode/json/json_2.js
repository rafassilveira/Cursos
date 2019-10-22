/*
O método JSON.parse converte um JSON 
para um determinado tipo de dado
 */
JSON.parse('10');//10
JSON.parse('"JavaScript"'); //'JavaScript'
JSON.parse('true');//true
JSON.parse('false');//false
JSON.parse('{"name": "Self","paradigm": "OO"}'); //{ name: 'Self', paradigm: 'OO' }
JSON.parse('[1,2,3,4,5,6,7,8,9]'); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
JSON.parse('null'); //null