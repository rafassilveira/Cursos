/*
	--Ajax--

window.XMLHttpRequest()

Tem que estanciar o objeto
  var ajax = new XMLHttpRequest()
Abrir uma conexão
  ajax.open (<protocol>, <url>)
	ajax.opne('GET','/')
Enviar para o servidor
  ajax.send(<data>)
  	ajax.send() 
Para manipular dados
c
Evento
 //verifica quando o estado mudou
  ajax.onreadystatechange = function(){

  };

  	
  ajax.readyState
   0:Não enviado
   1:Conexão aberta
   2:Header recebidos   
   3:carregando corpo do request
   4:concluido

Http Status
 (200,403,404,500,etc)
 ajax.status
	
*/
(function(){
'use strict'
  var ajax = new XMLHttpRequest()
  console.log(ajax.readyState);

 ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep.json',{ code: cep_code })
 ajax.send();

 console.log('Carregando...')
 ajax.addEventListener('readystatechange',function(){
 if(isRequestOk()){
	var data =JSON.parse(ajax.responseText);
	console.log('Deu tudo Certo', data.code);
  }else{
	 console.log('Deu Problema')
	 }
  console.log('Teste', ajax.readyState,ajax.status)
  },false)

function isRequestOk(){
	return ajax.readyState === 4 && ajax.status === 200;
}
})()