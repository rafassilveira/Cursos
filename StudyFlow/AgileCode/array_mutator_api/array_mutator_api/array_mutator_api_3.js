//• splice: Remove, substitui ou adiciona um ou 
//mais elementos em uma determinada posição

const languages = ["Python", "C", "Java"];
console.log(languages);//[ 'Python', 'C', 'Java' ]
console.log(languages.splice(1, 1));//[ 'C' ]
console.log(languages);//[ 'Python', 'Java' ]
console.log(languages.splice(1, 0, "C++", "C#"));//[]
console.log(languages);//[ 'Python', 'C++', 'C#', 'Java' ]
console.log(languages.splice(1, 2, "C"));//[ 'C++', 'C#' ]
console.log(languages);//[ 'Python', 'C', 'Java' ]   
