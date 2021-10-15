/*
O comando abaixo será excutado quando o usuário abrir a página.
sera exibido uma janela (prompt) pedindo uma cor. De acordo com
a cor selecionada o fundo da pagina muda.
Para essa execução estamos usando o comando window(janela/navegado).
document(meu doecumento html).body(corpo da página). addEventlister(
   adicionado um evento ao body para que ele preste atenção ao 
   carregamento da página(load) e assim executar a função ()=>{} com
   todo o código do desvio de fluxo if....elseif....else
) 
*/
window.document.body.onload=()=>{
let escolha = prompt("Digite:\n1->Amarelo\n2->Vermelho\n3->Azul");

if(escolha == 1)
   window.document.body.style.backgroundColor="yellow";
else if(escolha == 2)
   window.document.body.style.backgroundColor="red";
else if(escolha == 3) 
window.document.body.style.backgroundColor="blue";
else
window.alert("O numero não existe na lista");

};