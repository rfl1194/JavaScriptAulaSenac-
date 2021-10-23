var cor=prompt("Digite uma cor, que pode ser\nVermelho,Verde,Azul,Amarelo,Preto,Cinza");

var fundo = ""; 
/* 
Paratransformar os caracteres em maiusculo ou minusculo podemos usar os seguintes comandos:
toUpperCase() -> para letras mauisculas
toLowerCase() -> para letras minusculas
*/
cor = cor.toLocaleLowerCase();

switch(cor) {
    case "vermelho":
        fundo="red";
        break;

    case "verde":
        fundo="green";
        break;        
       
     case "Azul":
        fundo="blue";
        break;

    case "Amarelo":
        fundo="yellow";
        break;

    case "Preto":
        fundo="black";
        break;

    case "Cinza":
        fundo="gray";
        break;

    default:    
        fundo="white";
        break;
    }