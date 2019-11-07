const languages = ["Python", "C", "Java"];
// ira preencher da posição 1 da array para frente
languages.fill("JavaScript", 1);
console.log(languages); //[ 'Python', 'JavaScript', 'JavaScript' ]