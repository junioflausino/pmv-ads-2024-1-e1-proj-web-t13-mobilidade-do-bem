function registro()
{
    var nomeCompleto = document.getElementById("nome_completo").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cep = document.getElementById("cep").value;
    var tipoConta = document.getElementById("inputType").value;
    var senha = document.getElementById("senha").value;

    if (verificaoUsuarioRegistrado == true)
        {

        let ListaRegistro={nome : nomeCompleto, email : email, telefone : telefone, cep : cep, Tipo_conta : tipoConta, senha : senha};
        localStorage.setItem(email,JSON.stringify(ListaRegistro));
        let item = JSON.parse(localStorage.getItem("registroUsuario"));
        }
    else
        {
            alert("Email ja cadastrado");
        }
};

function verificaoUsuarioRegistrado(email)
{
    if(localStorage.getItem(email))
        {
            return false;
        }
    else
        {
            return true;
        }
}