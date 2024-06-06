var produtos = [];

function criarProduto(novoProduto) {
  console.log("Criar Produto");

  var buscaProdutos = JSON.parse(localStorage.getItem("Produtos"));
  var indiceAtual = JSON.parse(localStorage.getItem("Indice"));

  if (!indiceAtual) {
    indiceAtual = 0;
  }

  var novoProduto = {
    id: indiceAtual,
    ...novoProduto
  };

  if (buscaProdutos) {
    produtos = buscaProdutos;
  }
  produtos.push(novoProduto);

  localStorage.setItem("Produtos", JSON.stringify(produtos));
  localStorage.setItem("Indice", JSON.stringify((indiceAtual += 1)));
}

function buscarProdutos() {
  console.log("Buscar Produtos");

  var buscaProdutos = JSON.parse(localStorage.getItem("Produtos"));

  if (buscaProdutos) {
    console.log(JSON.stringify(buscaProdutos));
    return buscaProdutos;
  } else {
    return console.log("Nenhum registro em memória");
  }
}

function buscarUmProduto(registroParaEncontrar) {
  console.log("Buscar Um Produto");

  var buscaProdutos = JSON.parse(localStorage.getItem("Produtos"));

  if (buscaProdutos) {
    var registroEncontrado = buscaProdutos.find((elemento) => {
      return (
        elemento.titulo == registroParaEncontrar.titulo &&
        elemento.descricao == registroParaEncontrar.descricao
      );
    });

    if (registroEncontrado) {
      console.log(registroEncontrado);
      return registroEncontrado;
    } else {
      return console.log("Produto não encontrado");
    }
  } else {
    return console.log("Nenhum registro em memória");
  }
}

function atualizarProduto() {
  console.log("Atualizar Produto");

  var registroParaEncontrar = {
    titulo: "titulo1",
    descricao: "descricao1",
  };

  var dadosDeAtualizacao = {
    titulo: "teste",
    descricao: "teste",
  };

  produtos = buscarProdutos();
  var registroEncontrado = buscarUmProduto(registroParaEncontrar);

  if (registroEncontrado) {
    var indiceDoProduto = produtos.findIndex((elemento) => {
      return elemento.id === registroEncontrado.id;
    });

    produtos[indiceDoProduto] = {
      id: registroEncontrado.id,
      titulo: dadosDeAtualizacao.titulo,
      descricao: dadosDeAtualizacao.descricao
    };

    localStorage.setItem("Produtos", JSON.stringify(produtos));
    buscarProdutos();
  }
}

function removerProduto() {
  console.log("Remover Produto");

  registroParaSerRemovido = {
    titulo: "teste",
    descricao: "teste",
  };

  produtos = buscarProdutos();
  var registroEncontrado = buscarUmProduto(registroParaSerRemovido);

  if(registroEncontrado) {
    var indiceDoProduto = produtos.findIndex((elemento) => {
      return elemento.id === registroEncontrado.id;
    });

    produtos.splice(indiceDoProduto, 1);

    localStorage.setItem("Produtos", JSON.stringify(produtos));
    buscarProdutos();
  }
}
