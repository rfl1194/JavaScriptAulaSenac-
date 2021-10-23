function for1(){

    for(var i = 1 ; i  <= 10 ; i++){
        console.log(i);
    }
}


function for2(){

    var numero = prompt("Digite um valor para a tabuada");

    for(var p = 1 ; p <= 10 ; p++){
        console.log(numero +" x "+ p +" = "+ (numero*p))
        //Exibir o resultado na pagina html. Vamos usar div como base.
        document.getElementsByTagName("div")[0].innerHTML+=numero +" x "+ p +"="+(numero*p)+"<br>"

 
function for3(){

    //Vamos fazer uma referencia a tag body para criar
    //novos elementos html dentro deles
    var body = document . body;
    //Vamos construir uma tag h1 e adicionala ao body
    
    var h1 = document.createElement("h1");
    //Vamos adicionar um texto ao h1
    h1.innerHTML = "Estrutura de Repetição";

    //adicionar o h1 ao body
    body.appendChild(h1);

    for(var item = 1 ; item <= 20;item ++){
        
        var div = document.createElement("div");

        //adicionar estilo de formatação as div
        var canal = 11*item;
        div.style.backgroundColor="rgb(100,100,100)";
        div.style.width=(100*item)+"px";
        div.style.height="100px";
        div.style.margin="10px";

         //adicionar div ao body
         body.appendChild

    }


}        
            

    }

}