function enviar(){


    const dbParam = JSON.stringify(
        {
            "Nome ": document.querySelector("#Nome").value,
            "Documemento": document.querySelector("#Documento").value,
            "Celular": document.querySelector("#Celular").value,
            "Cep ": document.querySelector("#Cep").value,
            "Endereço ": document.querySelector("#Endereço").value,
            "Bairro ": document.querySelector("#Bairro").value,
            "Localidade ": document.querySelector("#Localidade").value,
        }
    );
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    }
    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados="+dbParam );

}
