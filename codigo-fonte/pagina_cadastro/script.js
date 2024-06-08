
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener('submit',function(event){
        event.preventDefault();
        registro();   

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
        localizacaoCEP(cep).then(cidade=> {
            cepFormatado = formatarCEP(cep);
            let ListaRegistro={nome : nomeCompleto, email : email,cidade :cidade, telefone : telefone, cep : cepFormatado, Tipo_conta : tipoConta, senha : senha};
            localStorage.setItem(email,JSON.stringify(ListaRegistro));
            window.location.href = "../pagina_login/index.html";
        }).catch(error=>{
            console.error(error);
            alert("CEP invalido! Digite somente os numeros sem caracteres especiais")

        });
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
    const cep = document.getElementById("cep").value.replace(/\D/g, ''); 
    if (cep.length == 8) {
        let cepFormatado = cep.substring(0, 5) + '-' + cep.substring(5);
        return cepFormatado; 
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

function localizacaoCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error("CEP não encontrado");
            }
            return data.localidade; 
        });
}

