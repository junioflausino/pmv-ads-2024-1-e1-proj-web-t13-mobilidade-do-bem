//Função para printar no HTML
function exibeProdutos() {
  var produtosRegistrados = buscarProdutos(); // Busca os produtos cadastrados na memória
  var divRow = document.getElementById("div-row"); // Busca a div "div-row" que está declarada no index.html

  if (produtosRegistrados) {
    // Salve a imagem com o caminho relativo, exemplo: ../img/andador.png ou ../img/bengala.png
    // Se a variável produtosRegistrados estiver preenchidas com produtos
    var produtosParaMostrarNaTela = produtosRegistrados.map((elemento) => {
      // Array.map() funciona como um for, e para cada "elemento" ele ira executar uma instrução
      return `
      <div class="col-md-4 produto">
        <img src="${elemento.imagem}" class="img-fluid rounded" alt="${elemento.categoria}">
        <h3>${elemento.titulo}</h3>
        <p>${elemento.resumo}</p>
        <p>${elemento.modalidade}</p>
        <p>tempo: ${elemento.tempo} dias</p>
        <button type="button" class="btn btn-light" onclick="reservar()">Reservar</button>
      </div>
      `; // A instrução é criar uma div contendo todo o html de um produto
    }); // Clicar em Reservar ainda não foi implementado

    divRow.innerHTML = produtosParaMostrarNaTela.join(""); // Insere as divs criadas no HTML da pagina index.html
  } else {
    var nenhumProdutoCadastradoAinda = `
      <div style="position:center">
        <h3>Ainda não temos produtos cadastrados</h3>
      </div>
    `;

    divRow.innerHTML = nenhumProdutoCadastradoAinda;
  }
}

function reservar(id) {
  return alert("Em desenvolvimento!");
  
  verificaLogin();

  var produtoReservadoPeloId = converteBuscaProdutos.find(
    (element) => element.id === parseInt(id)
  );
  sessionStorage.setItem(
    "reservarProduto",
    JSON.stringify(produtoReservadoPeloId)
  );
}

function verificaLogin() {
  var verificaConexao = JSON.parse(localStorage.getItem("logging"));

  if (verificaConexao.conectado == true) {
    window.location.href = "../finalizacao_pedidos/index.html";
  } else {
    return alert("Você precisa estar logado para realizar uma reserva");
  }
}

exibeProdutos();
