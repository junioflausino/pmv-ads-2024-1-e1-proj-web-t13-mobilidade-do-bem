/*
PRODUTOS
ListaRegistro = {
    string: titulo
    string: categoria
    string: modalidade
    number: tempo
    string: resumo
    string: imagem
  };
*/
var produtos = ListaRegistro;

function createProduto(produto) {
  let ultimoId = parseInt(localStorage.getItem("ultimo_id_produto")) || 0;
  let novoId = ultimoId + 1;
  produto.id = novoId;
  localStorage.setItem("ultimo_id_produto", novoId);

  let produtos = readProdutos();
  produtos.push(produto);
  updateProdutos(produtos);
}

function readProdutos() {
  return JSON.parse(localStorage.getItem("produtos")) || [];
}

function readProduto(idProduto) {
  let produtos = readProdutos();
  return produtos.find((produto) => produto.id == idProduto);
}

function updateProdutos(produtos) {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

function updateProduto(produtoAtualizado) {
  let produtos = readProdutos();
  let indice = produtos.findIndex(
    (produtos) => produto.id == produtoAtualizado.id
  );
  produtos[indice] = produtoAtualizado;
  updateProdutos(produtos);
}

function deleteProduto(idExcluido) {
  let produtos = readProdutos();
  let indice = produtos.findIndex((produto) => produto.id == idExcluido);
  produtos.splice(indice, 1);
  updateProdutos(produtos);
}
