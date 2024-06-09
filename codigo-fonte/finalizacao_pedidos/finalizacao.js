var VetorDeReservas = [];

function voltarParaPaginaDeProdutos() {
    return window.location.href = "../pagina_produtos/index.html";
}

function verificaLogin() {
    var verificaConexao = JSON.parse(localStorage.getItem("logging"));
    if (verificaConexao) {
      if (verificaConexao.conectado == true) {
        return verificaConexao;
      } else {
        return false;
      }
    }
  }

function reservarProduto() {
    var parametrosDePathUrl = new URLSearchParams(window.location.search);
    var idDoProduto = parametrosDePathUrl.get("id_do_produto");

    if (idDoProduto) {
        var produtoEncontradoPeloId = buscarUmProdutoPeloId(idDoProduto);
        var usuarioConectado = verificaLogin();

        var reserva = {
            produto: {
                ...produtoEncontradoPeloId,
            },
            usuario: {
                ...usuarioConectado
            }
        };

        console.log(reserva);

        var tabelaProdutosReservados = JSON.parse(localStorage.getItem('ProdutosReservados'));

        if (tabelaProdutosReservados) {
            VetorDeReservas = tabelaProdutosReservados;
            VetorDeReservas.push(reserva);
            localStorage.setItem('ProdutosReservados', JSON.stringify(VetorDeReservas));
        }
        else {
            VetorDeReservas.push(reserva);
            localStorage.setItem('ProdutosReservados', JSON.stringify(VetorDeReservas));
        }
        window.location.href = `../retorno_finalizacao_pedidos/index.html?id_do_produto=${idDoProduto}`;
    }
}

function main() {
    var divDoProduto = document.getElementById("div-do-produto"); 

    var parametrosDePathUrl = new URLSearchParams(window.location.search);
    var idDoProduto = parametrosDePathUrl.get("id_do_produto");

    if (idDoProduto) {
        var produtoEncontradoPeloId = buscarUmProdutoPeloId(idDoProduto);
        var produtoParaMostrarNaTela = `
            <div class="text-1">Produto</div>
            <div class="text-2">Período</div>
            <div class="text-3">Quantidade</div>
            <div class="text-4"><img src=${produtoEncontradoPeloId.imagem} alt=${produtoEncontradoPeloId.categoria}></div>
            <div class="text-adicional">${produtoEncontradoPeloId.resumo}</div>
            <div class="text-5">${produtoEncontradoPeloId.tempo}</div>
            <div class="text-6">1</div>
        `;

        divDoProduto.innerHTML = produtoParaMostrarNaTela;
    }
}

main();