/*
  Os métodos Object.setPrototypeOf e Object.getPrototypeOf 
  permitem a interação,com o protótipo do objeto
 */
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975
};
Object.setPrototypeOf(scheme, functionalLanguage);
const javascript = {
    name: "JavaScript",
    year: 1995
};
Object.setPrototypeOf(javascript, functionalLanguage);
for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}
