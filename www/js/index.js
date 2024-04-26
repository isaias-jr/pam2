function consultacep()
{
 let requisao = new  XMLHttpRequest();
 let url = "https://viacep.com.br/ws/17055210/json/";
 requisao.open("GET", url);
 requisao.send();
 requisao.onload = function (){
    alert(JSON.parse(requisao.response).logradouro);
 }

}
let botao = document.querySelector("#botao");
 botao.addEventListener("click", consultacep);
