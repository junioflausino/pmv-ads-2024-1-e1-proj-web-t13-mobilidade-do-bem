// Criando o mock de usuarios
var usuarios = [
  usuario1 = {
    nomeCompleto: "jodisclayton",
    email: "jodisclayton@hotmail.com",
    telefone: "123",
    cep: "123",
    tipoConta: "adquirir",
    senha: "123"
  }
];

// Criando o mock de produtos
var produtos = [
  produto1 = {
    titulo: "jodisclayton",
    categoria: "jodisclayton@hotmail.com",
    modalidade: "123",
    tempoEmprestimo: "123",
    endereco: "adquirir",
    descricao: "123",
    imagem: "caminho_da_imagem"
  }
];

// Criando o mock de pedidos
var pedidos = [
  pedidos1={
    usuario: usuarios[0],
    produto: produtos[0]
  }
];

//Função para printar no HTML
function mostraNaTela(idDoProduto){
  var produto = buscarUmProdutoPeloId(idDoProduto);
  console.log(produto);

  var divDadosPedidosNome = document.getElementById("dadosPedidosNome");
  divDadosPedidosNome.innerHTML = produto.nome;

  var divDadosPedidosEmail = document.getElementById("dadosPedidosEmail");
  divDadosPedidosEmail.innerHTML = produto.email;
}

function main() {
  var parametrosDePathUrl = new URLSearchParams(window.location.search);
  var idDoProduto = parametrosDePathUrl.get("id_do_produto");

  mostraNaTela(idDoProduto);
}

main();
