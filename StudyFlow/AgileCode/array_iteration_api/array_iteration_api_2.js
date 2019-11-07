/*
    filter: Retorna um novo array contendo somente os 
    elementos que retornaram true na função passada por parâmetro
 */
// const frameworks = [
//     {
//         name: "Angular.js",
//         contributors: 1598
//     }, 
//     {
//         name: "Ember.js",
//         contributors: 746
//     },
//     {
//         name: "Vue.js",
//         contributors: 240
//     }
// ];
// const result = frameworks.filter(function (framework) {
//     return framework.contributors < 1000;
// });
// console.log(result);

const frameworks = [{
        name: "Angular.js",
        contributors: 1548
    },
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "View.js",
        contributors: 240
    }

];

const result = frameworks.filter((framework) => {
    return framework.contributors < 1000
})
console.log(result);