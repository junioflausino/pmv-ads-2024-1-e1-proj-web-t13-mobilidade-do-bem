// Criando o mock de produtos
var produtos = [
  produto1 = {
    id: 1,
    titulo: "Andador",
    categoria: "Andadores",
    modalidade: "Doação",
    tempoEmprestimo: "1 ano",
    endereco: "Poços de Caldas MG",
    descricao: "Andador semi-novo, em ótimo estado de uso",
    imagem: "caminho_da_imagem"
  }
];
//Salva e recupera os dados do pedido no localStorage
localStorage.setItem('produtos', JSON.stringify(produtos));
var buscaProdutos = localStorage.getItem('produtos');
var converteBuscaProdutos = JSON.parse(buscaProdutos);
//console.log(converteBuscaProdutos[0].titulo);   

//Função para printar no HTML
var divDadosProdutosTitulo = document.getElementById("dadosProdutosTitulo");
var divDadosProdutosEndereco = document.getElementById("dadosProdutosEndereco");
var divDadosProdutosModalidade = document.getElementById("dadosProdutosModalidade");

function exibeProdutos(converteBuscaProdutos) {
  divDadosProdutosTitulo.innerHTML = converteBuscaProdutos[0].titulo;
  divDadosProdutosEndereco.innerHTML = converteBuscaProdutos[0].endereco;
  divDadosProdutosModalidade.innerHTML = converteBuscaProdutos[0].modalidade;
}


function reservar(id) {
  verificaLogin();

  var produtoReservadoPeloId = converteBuscaProdutos.find((element) => element.id === parseInt(id));
  sessionStorage.setItem('reservarProduto', JSON.stringify(produtoReservadoPeloId));
}

function verificaLogin() {
  var verificaConexao = JSON.parse(localStorage.getItem('logging'));

  if (verificaConexao.conectado == true) {
    window.location.href = "../finalizacao_pedidos/index.html";
  } else {
    return alert('Você precisa estar logado para realizar uma reserva');
  }
}

exibeProdutos(converteBuscaProdutos);
