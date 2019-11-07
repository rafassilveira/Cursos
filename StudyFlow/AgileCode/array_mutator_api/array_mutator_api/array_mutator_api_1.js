// Os mutator methods quando invocados modificam o array

/*
• push: Adiciona um elemento no final
• pop: Remove um elemento do final





 */
const languages = ["Python", "C", "Java"];
console.log(languages); //[ 'Python', 'C', 'Java' ]
console.log(languages.push("Ruby"));//4
console.log(languages.push("Go"));//5
console.log(languages); //[ 'Python', 'C', 'Java', 'Ruby', 'Go' ]
console.log(languages.pop());//Go
console.log(languages.pop());//Ruby
console.log(languages); //[ 'Python', 'C', 'Java' ]
