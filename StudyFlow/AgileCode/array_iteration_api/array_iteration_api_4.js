/*Retorna true se um ou mais elementos retornaram true na função 
passada por parâmetro */
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.some(function (framework) {
    return framework.contributors > 1000;
});
console.log(result);//true
