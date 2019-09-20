var button = document.querySelector('.button')
 
button.addEventListener('click', novoQuadrado, false)

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}
var newColor = getRandomColor();

function novoQuadrado() {
    var quadrado = document.createElement('div')
  
    quadrado.style.width = 100;
    quadrado.style.height = 100;
    quadrado.style.backgroundColor = 'red';
    quadrado.style.margin =1;

    button.appendChild(quadrado)

    quadrado.onmouseover = function () {
      quadrado.style.backgroundColor = getRandomColor();
      
    }


  }