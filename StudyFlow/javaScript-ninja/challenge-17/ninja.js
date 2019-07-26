/* 
    --ESPRESSÃO REGULAR-- 

    /--espressao--/flag

-Caracteristicas
    1-Case sensitive
    2-Sempre que o Regex não encotrar algo, irá retornar 'null'

-objeto RefExpe()
    Exemplo:/m/

Metodos:
    Flag:
         'g' significa 'global', faz com que a pesquisa 
            exemplo.match(/m/g); //Traz todos 'm's da variável exemplo

         'i' singnifica ignore case, ignora se a letra é maiuscula ou minuscula
    Termos:
        \w: caracteres alfanumericos e '_'(undeline)
        \d: numeros(digitos)
            ex:exemplo.match(/\d/g);//Traz todos os numeros(um digito), dá variável exemplo.
               exemplo.match(/\d\d/g) //Traz todos os numeros(2 digitos), dá variável exemplo.
    Classes de Caracteres /Listas:
        '|' (pipe) :Usado com 'ou' nas espressões
        exe: /a|b/ // encontre 'a' ou 'b'
        []: usado com 'ou' também, porém sem usar o pipe
        ex:[abcd] // encontre ou a, ou b, ou c ou d
        '-' (traço) : usado para pegar um 'range' ou 'até' algo
        ex:\[a-zA-Z0-9]\g 
        \\ significa que irá encontrar do 'a' até o 'z' (minusculo) 
        \\ significa que irá encontrar do 'A' até o 'Z' (maiúsculo) 
        \\ significa que irá encontrar do '0' até o '9' 
        ()-caputura
        $-substitui       
         ex: replace(/(d)(a)/g, '--$1 ++A$2')
            //(d) e (a) são capturas, parametro para serem trabalhados
            //com a '$1 irá capturar a primeira captura (d)
            //com a '$2 irá capturar a segunda captura (a)
            logo o codigo abaixo irá trocar todos (/g) os 'd' por '--' e 'a' por '++A'
        replace(/(d)(a)/g, '--$&')
            // mesmo que o codigo anterior, mas o '&' pegas todas as capturas

        'rafael'.replace(/(\w)/g,function(capturaTotal,letra){
            return letra.toUpperCase();
                });
            //Ira capturar todos as letras (\w), a função irá armazenar na var 'letra' deixar maiuscula       
        'rafael'.replace(/(\w)(\w)/g, function (capturaTotal, letra,letra2) {
          return letra.toUpperCase() + letra2.toLowerCase();
        });
         //irá capturar todas as letras e duas capturar e para cada uma ficara armazenadas
         // em variaves diferentes,letra,letra2, depois concatena e uma deixa maisucula e outra minuscula
         





https: //regex101.com/
 */
