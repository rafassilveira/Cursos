/*
    --DOM--

  .parentNode
    Pega o nó pai
      var = $main = document.queSelector('.main)
      $main.parenteNode;
  .childNodes
    Pega nó fihos,no codigo HTML, cada enter  ou espaçamento conta como um nó
    var = $main = document.queSelector('.main)
        $main.parenteNode;
  .firstChild
    Pega o primeiro filho,
    var = $main = document.queSelector('.main)
        $main.firstChild;
  .lasttChild
  Pega o ultimo filho,
  var = $main = document.queSelector('.main)
      $main.lasttChild;
  .nextSibling
    //pega o proximo irmão
    var = $main = document.queSelector('.main)
        $main.nextSibling;

  .previousSibling
   //pega o irmão anterior
    var = $main = document.queSelector('.main)
        $main.previousSibling

  **Propriedades**
    .nodeType
      Traz um numero, para cada tipo de node
    .nodeValue
      //Pega o valor
        var = $main = document.queSelector('.main)
            //Entra no prmeiro filho, dentro dessa node pega o proximo irmao e seu conteudo
            $main.firsChild.nextSibling.nodeValue
    .nodeName
        Traz o nome do nó, ou da tag ou do texto

    **Métodos**
    .hasAttribute(name)
      Retorna false ou true se existir algun tributo passado pro parametro
    .hasAttributes()
      Retorna false ou true se existir algun tributo
    .appendChild(child)
      Ele coloca um filho
      var = $mainContent = document.queSelector('.main-content)
      var = $mainHeader = document.queSelector('.main-Header)
      $mainContent.appemdChild($mainHeader)
    .indertBefore(node, beforeWhom)
      Insere antes de uma tag
      var = $mainContent = document.queSelector('.main-content)
      var = $mainHeader = document.queSelector('.main-Header)
      var $firstText = $mainContent.firstChild;
      $mainContent.insertBefore($mainHeader,$firstText);
    .cloneNode(boolean)
      Se passar como true ele clona a tag inteira, se passar false nao clona
      var = $mainContent = document.queSelector('.main-content)
      var = $mainHeader = document.queSelector('.main-Header)
      var $firstText = $mainContent.firstChild;
      var $cloneMainHeader.appendChild($cloneMainHeader)
      $mainContent.appendChild($cloneMainHeader);
    .hasChildNodes()
      Verifica se o elemento tem algum filho(texto conta como filho)
    .removeChild(child)
      $mainContent.removeChild($cloneMainHeader);
    .replaceChild(new,old)
      Troca um elementro pelo outro
       var = $mainContent = document.queSelector('.main-content)
       var = $mainHeader = document.queSelector('.main-Header)
       var $firstText = $mainContent.firstChild;
       var $cloneMainHeader.replaceChild($cloneMainHeader,$mainHeader)
    document.createTextNode(text)
      //Cria um text emum elemento
      var newTextNode = document.createTextNode('Opa!');
      $main.appendChild(newTextNode)
    .createElement('p')
      Cria um novo elemento
      var newTextNode = document.createTextNode('Opa!');
      var $newp = document.createElement('p')
      //Insere o texto
      $newP.appendChild(newTextNode);
      //Insere a tag
      $main.appendChild($newP)


    .getAttribute
      Pega um atributo (classe,id...), sempre retornar strng
      var = $main = document.queSelector('.main)
      $main.getAttribute('data-js');

    .setAttribute(attr,value)
      Inclui um atributo
      var = $main = document.queSelector('.main)
      $main.setAttribute('data-js','data-js-main');

















*/


