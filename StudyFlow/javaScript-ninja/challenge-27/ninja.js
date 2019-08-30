/*
  Manipular DOM com perfomance

  document.createDocumentFragment()


(function () {

})()



  --Eventos--

  document = DOMContentLoaded
  //Faz com o script seja executado depois que todo  DOM estiver carregado
  //Por isso é importante deixaa tag script no final
  window= load
  //Só vai executar depois que tudo estiver carregado


  function (doc) {
    'use strict'

    function afterDomContentLoaded() {

      //Todos as manipulações do dom são carregadas de umas vez, pois estão no 'fragment'
      var fragment = document.createDocumentFragment();
      //cria uma novo paragrafo
      var childP = document.createElement('p');
      //Cria um novo texto
      var textChildP = document.createTextNode('Texto da tag P!')
      //Coloca o texto no paragrafo
      childP.appenChild(textChildP)
      //armazena no fragmente
      fragment.appendChild(childP);
      //coloca no dom
      document.body.appendChild(fragment);
    }

    function afterWindowLoad(){
      alert('afterWindowLoad')
    }

    doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false)
    window.addEventListener('load', afterWindowLoa, false)

  }(document);

  -- Copiando Array e Array Like--
  (function () {
    'use strict'
    var arr = [1, 2, 3, 4, 5]
    //Copia array, pois se não passar parametro para o slice
    //ele pega toda a arraya
    var arr2 = arr.slice();
    //selecionas as as divs
    var $divs = document.querySelectorAll('div')
    //copis e guada na variavél
    var $divsCopy = Array.prototype.slice.call($divs);
  })();

  --Para saber o tipo do objeto de verdade--

(function () {

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isArray(obj) {
    return is(obj) === '[object Array]'
  }

  function isObject(obj) {
    return is(obj) === '[object object]'
  }

  function isFunction(obj) {
    return is(obj) === '[object Function]'
  }

  function isNumber(obj) {
    return is(obj) === '[object Number]'
  }
  console.log(isNumber(1));
  console.log(isFunction(function () {}));

})();


 */



