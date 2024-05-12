// Criando o mock de produtos
var produtos = [
    produto1 = {
      titulo: "Andador",
      categoria: "Andadores",
      modalidade: "Doação",
      tempoEmprestimo: "1 ano",
      endereco: "Curitiba PR",
      descricao: "Andador semi-novo, em ótimo estado de uso",
      imagem: "caminho_da_imagem"
    }
  ];
  //Salva e recupera os dados do pedido no localStorage
  localStorage.setItem('produtos', JSON.stringify(produtos));
  var buscaProdutos = localStorage.getItem('produtos');
  var converteBuscaProdutos = JSON.parse(buscaProdutos);
  console.log(converteBuscaProdutos);
  console.log(converteBuscaProdutos[0].titulo);   


    //Função para printar no HTML
    var divDadosProdutosTitulo = document.getElementById("dadosProdutosTitulo");
    function teste(converteBuscaProdutos){
    divDadosProdutosTitulo.innerHTML = converteBuscaProdutos[0].titulo;
}

teste(converteBuscaProdutos);
   



  


 