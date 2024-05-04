function enviar(){


    const dbParam = JSON.stringify(
        {
            "nome": document.querySelector("#nome").value,
            "documento": document.querySelector("#documento").value,
            "celular": document.querySelector("#celular").value,
            "cep": document.querySelector("#cep").value,
            "endereco": document.querySelector("#logradouro").value,
            "bairro": document.querySelector("#bairro").value,
            "cidade": document.querySelector("#localidade").value,
            "numero": document.querySelector("#numero").value,
            "estado": document.querySelector("#estado").value
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        
        console.log(this.response);
        
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}
