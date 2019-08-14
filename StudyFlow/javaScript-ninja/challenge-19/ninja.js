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
         'm' significa multiline, ele verifica por linha
                ex:/^</gm essa regex captura '<' de cada linha
                                 
                    <h1>dhsauhdusahduashuda</h1>
                    <p>dsadsadsadada</p>    

    Termos:
        \w: caracteres alfanumericos e '_'(undeline)
        \d: numeros(digitos)
            ex:exemplo.match(/\d/g);//Traz todos os numeros(um digito), dá variável exemplo.
               exemplo.match(/\d\d/g) //Traz todos os numeros(2 digitos), dá variável exemplo.
        \s: Espaços em brancos
        \n:Vai dar match com a quebra de linha
        \t:Vai dar match com tabulação(espaços em TAB)
        .(PONTO):Pega todas as letras que são quebra de linhas
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
            //IMPORTANTE:Quando usa captura '()' ao usar a função o primeiro parametro,
            //será usado apra armazenar toda a regex    
            //Ira capturar todos as letras (\w), a função irá armazenar na var 'letra' deixar maiuscula       
        'rafael'.replace(/(\w)(\w)/g, function (capturaTotal, letra,letra2) {
          return letra.toUpperCase() + letra2.toLowerCase();
        });
         //irá capturar todas as letras e duas capturar e para cada uma ficara armazenadas
         // em variaves diferentes,letra,letra2, depois concatena e uma deixa maisucula e outra minuscula

    Negação:
        [^abc] - ^(circunflexo, significa negação) traz todos menos o abc(juntos e nessa ordem)
        \W (dáblio miúsculo)-Faz match qualquer caractere menos os alfanumericos
        \D (maiusculo) - qualquer caratere menos os digitos
        \S (maiusculo) - qualquer caracter menos os espacos em branco
        EX:[\S\s] - Irá dar match em todos os carecteres
    Repetidores:
        {n,m} -Intervalo = Item anterior ao menos 'n' vezes, e no maximo 'm' vezes
            ex: /\d{2,4}/g - Irá retonar numeros com no minimo 2 digitos e no maximo 4
        {n,}-intervalo aberto = retonar todas que atendem no minimo
            ex: /\d{2,}/g = Irá retonar numeros com no minimo 2 digitos
        {n} - Intervalo exato
             ex: /\d{2}/g = Irá retonar exatamente numeros com no 2 digitos (caso tenha mais, ele dá 2 matcthes)
        ? - opcional :
            ex: /\w\d?/g : Irá trazer todos os carecteres e o digito é opcionald, se tiver blz.
        + (Sinal de mais ) - Uma ou mais ocorrencia do item anterior
            ex: /\w + \s/g - Traz todos os cacerteres seguido de espaço 
                /\s+\w/- traz espaço seguido de letra
        * (asterisco)- zero ou mais ocorrencias do item anterior
            ex:
    Incio de string
        ^
            ex: /<^/g - Verifica se começa com '<'
    Fim da String
        $
            ex: />$/g - Verfica se no final termina com '>' 
    
            ex: /( ^< ).+( >$)/g
        ?-não guloso 
            Se usado imediatamente após qualquer um dos quantificadores *, +, ? ou {}, 
            faz o quantificador não guloso (combinando o número mínimo de vezes), 
            como um oposto para o padrão que é guloso (combinar o número máximo possível).
             Por exemplo, aplicando /\d+/ em "123abc" encontra "123". Mas aplicando /\d+?/, 
             apenas "1" será encontrado.   
        (?:)- somente agrupamento sem capturar
            ex: /ju(?:n|l)ho/g
                //Irá fazer match em junho e julho, mesmo estando com os parenteres não irá fazer captura
         \1, \2 - Referencia dentro de regex
            ex:/<(\w+)>(.+)\/(\1)>/gm
                //o valor da primeira captura é o mesmo da \1
                se ele pega uma tag na primeira ele irá trazer até o fechando da mesma tag
                

            
    




        

        




https: //regex101.com/
 */
