
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener('submit',function(event){
        event.preventDefault();
        registro();
        this.submit();

    });
});

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
        window.location.href = "../pagina_login/index.html";
        }
    else
        {
        alert("Email ja cadastrado");
        }
};


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("link-sobre").addEventListener("click",function(event){
        event.preventDefault();
        var sobre= document.getElementById("sobre");
        if(sobre)
        {   
            document.getElementById("sobre").scrollIntoView({behavior:"smooth"});
        }
        else
        {
            window.location.href = "../pagina_inicial/index.html#sobre";
        }
    });
});


function formatarCEP(input) {
    const cep = input.value.replace(/\D/g, ''); 
    if (cep.length == 8) {
        input.value = cep.substring(0, 5) + '-' + cep.substring(5); 
    } else {
        input.value = '';
        alert("O CEP nao está no formato correto, formato correto  XXXXXXXX")
    }
}

function formatarTelefone(input)
{
    const telefone = input.value.replace(/\D/g,'');
    if(telefone.length !== 11)
        {
            input.value = '';
            alert("O telefone nao está no formato correto, formato correto  319xxxxxxxx")
        }
}