function lerclientes(){
    let requisao = new  XMLHttpRequest();
    let url = "https://etec.fernandograciano.com.br/listarclientes.php" + campo.value + "/json/";
    requisao.open("GET", url);
    requisao.send();
    requisao.onload = function (){
      letcorpotabela = document.querySelector("#corpotabela") 
      let dados = JSON.parse(this.response)
      dados.forEach(function(valor,chave)
      {
        let novalinha = document.createElement("tr")
        let celulanome = document.createElement("tr")
        let novalinha = document.createElement("tr")
      }
     console.log(this.response)
    }
   
}