alert("Exemplo de comando alert");
console.log("Mensagem enviado pelo console");
    function myFunction(){
    var x = document.getElementById("contextText");
    /* a variável x é o texto dentro da div com id="contextText" */
    if (x.style.display ==="none"){
        /* se o sytle da div for none, ou seja, estiver invisível... */
        x.style.display = "block";
        /* ... então faça o style ser block, ou seja, ficar visível... */
       }
    else {
        x.style.display = "none";
        /* ... caso contrário, (se já estiver visível) faça sumir.*/
       }
     }

     $('#button').click(function(){
        if($('#feminino').is(':checked')){
          alert("Você escolheu feminino");
        }else if($('#masculino').is(':checked')){
          alert('Você escolheu masculino');
        }else{
          alert('Você não escolheu');
        }
      });
