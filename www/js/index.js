function consultacep()
{
 let campo = document.querySelector("#cep")  
 let requisao = new  XMLHttpRequest();
 let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
 requisao.open("GET", url);
 requisao.send();
 requisao.onload = function (){
   let objetocep = JSON.parse(requisao.response)
   let campoEndereco = document.querySelector("#logradouro")
   let campoLocalidade = document.querySelector("#localidade")
   let campoBairro = document.querySelector("#bairro")
   campoEndereco.value = objetocep.logradouro
   campoLocalidade.value = objetocep.localidade
   campoBairro.value = objetocep.bairro
 }

}
let botao = document.querySelector("#botao");
 botao.addEventListener("click", consultacep);
