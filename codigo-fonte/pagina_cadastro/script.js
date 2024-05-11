function registro()
{
    var nomeCompleto = document.getElementById("nome_completo").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cep = document.getElementById("cep").value;
    var tipoConta = document.getElementById("inputType").value;
    var senha = document.getElementById("senha").value;

    if (!localStorage.getItem(email))
        {

        let ListaRegistro={nome : nomeCompleto, email : email, telefone : telefone, cep : cep, Tipo_conta : tipoConta, senha : senha};
        localStorage.setItem(email,JSON.stringify(ListaRegistro));
        }
    else
        {
        alert("Email ja cadastrado");
        }
};
