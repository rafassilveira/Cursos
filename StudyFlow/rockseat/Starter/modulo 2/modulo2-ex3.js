var nomes = ["Diego", "Gabriel", "Lucas"];

var lista = document.querySelector("#app ul")
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

function renderNomes() {
    lista.innerHTML='';
    for ( element of nomes) {
        var nomeElement = document.createElement('li')
        var nomeText = document.createTextNode(element)
        
        nomeElement.appendChild(nomeText)
        lista.appendChild(nomeElement)

    }
}

function addNome() {
    var nomeText = inputElement.value;
    nomes.push(nomeText);
    inputElement.value = ''

    renderNomes()

}

buttonElement.onclick=addNome;

