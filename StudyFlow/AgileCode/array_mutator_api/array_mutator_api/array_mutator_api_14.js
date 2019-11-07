const languages = ["Python", "C", "Java"];
//irá preencher da posição 0 até 2-1 da array
languages.fill("JavaScript", 0, 2);
console.log(languages); //[ 'JavaScript', 'JavaScript', 'Java' ]