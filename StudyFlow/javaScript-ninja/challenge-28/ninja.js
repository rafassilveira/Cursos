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
 ajax.open('GET', '/data/data.json')
 ajax.send();	

 console.log('Carregando...')	
 ajax.addEventListener('readystatechange',function(){
 if(isRequestOk){
	var data =JSON.parse(ajax.responseText);
	console.log('Deu tudo Certo', data.message);
  }else{
	 console.log('Deu Problema')
	 }	
  console.log('Teste', ajax.readyState,ajax.status)
  },false)

function isRequestOk(){
	return ajax.status === 200 && ajax.readyState ===4
}
})()
 