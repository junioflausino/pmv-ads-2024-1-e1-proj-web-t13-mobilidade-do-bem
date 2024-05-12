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
        if(usuario.conectado == false || usuario.tipoConta == 'adquirir')
            {
                document.getElementById("anunciar").style.display='none';
                document.getElementById("sair").style.display='none';
            }
        }
    else
    {
        document.getElementById("sair").style.display='none';
        document.getElementById("anunciar").style.display='none';
    }
        
});

function sair()
{
    var usuario = JSON.parse(localStorage.getItem('logging'));
    usuario.conectado = false;
    localStorage.setItem('logging',JSON.stringify(usuario));
}