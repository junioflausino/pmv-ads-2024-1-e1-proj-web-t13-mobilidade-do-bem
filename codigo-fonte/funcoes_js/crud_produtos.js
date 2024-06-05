var produtos = null;

export function printarNaTela(){ 
    console.log('fui exportado');
}

export function createProduto(produto) {
let ultimoId = parseInt(localStorage.getItem("ultimo_id_produto")) || 0;
let novoId = ultimoId + 1;
produto.id = novoId;
localStorage.setItem("ultimo_id_produto", novoId);

let produtos = readProdutos();
produtos.push(produto);
updateProdutos(produtos);
}

export var variavelGlobal = 0;