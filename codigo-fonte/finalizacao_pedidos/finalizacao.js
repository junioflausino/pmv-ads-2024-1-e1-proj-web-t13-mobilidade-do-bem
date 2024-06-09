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

    if(usuario.conectado == false || !usuario )
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

    if(usuario.conectado == false || !usuario )
        {
            window.location.href="../pagina_login/index.html"
        }
    else
    {
        window.location.href="../pagina_perfil/perfil.html"
    }
}