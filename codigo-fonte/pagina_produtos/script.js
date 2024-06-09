//var botaoPesquisa = document.getElementById("botao_pesquisa");

//botaoPesquisa.onclick = pesquisaProdutoDoInput();

function pesquisaProdutoDoInput(pesquisa) {
  var inputPesquisa = pesquisa;
  var produtoEncontrado = buscarUmProduto(inputPesquisa);

  if (produtoEncontrado) exibeProdutos(produtoEncontrado);
  else {
    var divRow = document.getElementById("div-row"); // Busca a div "div-row" que está declarada no index.html
    var nenhumProdutoCadastradoAinda = `
      <div style="position:center">
        <h3>Não temos este produto no momento</h3>
      </div>
    `;

    divRow.innerHTML = nenhumProdutoCadastradoAinda;
  }
}

//Função para printar no HTML
function exibeProdutos(produtoEncontrado) {
  var produtosRegistrados = buscarProdutos(); // Busca os produtos cadastrados na memória
  var divRow = document.getElementById("div-row"); // Busca a div "div-row" que está declarada no index.html

  if (produtoEncontrado) {
    return (divRow.innerHTML = `
      <div class="col-md-4 produto">
        <img src="${produtoEncontrado.imagem}" class="img-fluid rounded" alt="${produtoEncontrado.categoria}">
        <h3>${produtoEncontrado.titulo}</h3>
        <p>${produtoEncontrado.resumo}</p>
        <p>${produtoEncontrado.modalidade}</p>
        <p>tempo: ${produtoEncontrado.tempo} dias</p>
        <button type="button" class="btn btn-light" onclick="reservar()">Reservar</button>
      </div>
      `); // Insere as divs criadas no HTML da pagina index.html
  }

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

//Função main verifica se há parâmetros de pesquisa, se sim, eles são armazenados na variável pesquisa, se não, a página de produtos é exibida com os produtos do cadastro através da função exibeProdutos()
function main() {
  var parametrosDePathUrl = new URLSearchParams(window.location.search);
    var pesquisa = parametrosDePathUrl.get("pesquisa");
    if (pesquisa != null){
      console.log("if do if do main");
      pesquisaProdutoDoInput(pesquisa);
    }
   else {
    console.log("else do main");
    exibeProdutos();
  }
}

main();
