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


    var usuario = JSON.parse(localStorage.getItem('logging'))
    if(localStorage.getItem('logging'))
        {
        if(usuario.conectado == false)
            {
                document.getElementById("sair").style.display='none';
            }
        if(usuario.tipoConta == 'adquirir')
            {
                document.getElementById("anunciar").style.display='none';
            }
        }
    else
    {
        document.getElementById("sair").style.display='none';

    }
        
});

function sair()
{
    var usuario = JSON.parse(localStorage.getItem('logging'));
    usuario.conectado = false;
    localStorage.setItem('logging',JSON.stringify(usuario));
}

function naoLogado()
{
    var usuario = JSON.parse(localStorage.getItem('logging'))

    if(!usuario )
        {
            window.location.href="../pagina_login/index.html"
        }
    else
    {
        window.location.href="../cadastro_de_produto/index.html"
    }
}

function botaoPerfil()
{
    var usuario = JSON.parse(localStorage.getItem('logging'))

    if(!usuario || usuario.conectado == false )
        {
            window.location.href="../pagina_login/index.html"
        }
    else
    {
        window.location.href="../pagina_perfil/perfil.html"
    }
}

var botaoPesquisa = document.getElementById('botao_pesquisa');

// Ao clicar no botão pesquisa, o valor digitado pelo usuário é armazenado por parâmetro da URL na variável barraPesquisa e é feito o redirecionamento para página de produtos
botaoPesquisa.onclick = function() {
    console.log("clicado");
    var barraPesquisa = document.getElementById('barra_pesquisa').value;

    if (barraPesquisa !== null)
        window.location.href = `../pagina_produtos/index.html?pesquisa=${barraPesquisa}`;
}
