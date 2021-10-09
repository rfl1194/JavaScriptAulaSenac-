// O comando abaixo diz que o documento HTML deve obter a tag h1 e
// mudar o seu texto para "mudei o texto"
// document.getElementsByTagName("h1")[0].innerHTML="Mudei o Texto";
/* Var [e utilizado para declaração de variaveis globais; enquanto que o
    let é utilizado para declarações de forma de bloco
   se voce fizer uma declaração de variavel usando var dentro de um if,dor,while 
   esta variavel sera vista fora dessa estrutura. Já a declaração com let
   dentro destes blocos não será vista fora deles. Mas se voce fizer uma declaração
   usando let ou var fora dos blocos, estas serão vistas por todo codigo
*/

var idade = 10;
let email = "rafael.1194@hotmail.com";

if(10==10){ 
var nome = "Rafael";
let sobrenome = "Oliveira";

}



console.log(nome);
console.log(sobrenome);


document.getElementById("saida").innerHTML="mensagem";
document.getElementById("saida").style.backgroundColor=Blue;
document.getElementById("saida").