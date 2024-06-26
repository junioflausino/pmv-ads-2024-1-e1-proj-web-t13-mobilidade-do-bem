function verificarCampos() {
    var titulo = document.getElementById('cad-titulo').value;
    var categoria = document.getElementById('cad-categoria').value;
    var modalidade = document.getElementById('cad-modalidade').value;
    var tempo = document.getElementById('cad-tempo').value;
    var resumo = document.getElementById('cad-resumo').value;
    var imagem = document.getElementById('cad-imagem').value;

    if (titulo === "" || categoria === "null" || modalidade === "null" || tempo === "" || resumo === "" || imagem === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      let ListaRegistro = {
        titulo : titulo,
        categoria : categoria,
        modalidade : modalidade,
        tempo : tempo,
        resumo :resumo,
        imagem : imagem
      };

      criarProduto(ListaRegistro);

      // localStorage.setItem('Produtos', JSON.stringify(ListaRegistro));
      mostrarMensagem();
    }
  }

  function mostrarMensagem() {
    alert("Produto cadastrado com sucesso!");

    document.getElementById('cad-titulo').value = "";
    document.getElementById('cad-categoria').value = "null";
    document.getElementById('cad-modalidade').value = "null";
    document.getElementById('cad-tempo').value = "";
    document.getElementById('cad-resumo').value = "";
    document.getElementById('cad-imagem').value = "";
  }

  buscarProdutos();

  function logout() {

    window.location.href = "http://127.0.0.1:5500/codigo-fonte/pagina_inicial/index.html";
  }