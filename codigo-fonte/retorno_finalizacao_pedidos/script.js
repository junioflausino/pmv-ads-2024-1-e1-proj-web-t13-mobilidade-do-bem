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

/* COMO INSERIR UM USUARIO NOVO *
usuario2 = {
  nomeCompleto: "b",
  email: "b",
  telefone: "b",
  cep: "b",
  tipoConta: "b",
  senha: "b"
}
usuarios.push(usuario2);
***********************************/

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

/* COMO INSERIR UM PRODUTO NOVO *
  produto2 = {
    titulo: "jodisclayton",
    categoria: "jodisclayton@hotmail.com",
    modalidade: "123",
    tempoEmprestimo: "123",
    endereco: "adquirir",
    descricao: "123",
    imagem: "caminho_da_imagem"
  }
produtos.push(produto2);
***********************************/

// Criando o mock de pedidos
var pedidos = [
  pedidos1={
    usuario: usuarios[0],
    produto: produtos[0]
  }
];

console.log(pedidos);

/* COMO INSERIR UM PEDIDO NOVO *
  pedidos2={
    usuario: usuarios[1],
    produto: produtos[1]
  }
pedidos.push(pedidos2);
***********************************/

//Função para printar no HTML
function teste(converteBuscaPedidos){
  var divDadosPedidosNome = document.getElementById("dadosPedidosNome");
  divDadosPedidosNome.innerHTML = converteBuscaPedidos[0].usuario.nomeCompleto;

  var divDadosPedidosEmail = document.getElementById("dadosPedidosEmail");
  divDadosPedidosEmail.innerHTML = converteBuscaPedidos[0].usuario.email;
  
  var divDadosPedidosTelefone = document.getElementById("dadosPedidosTelefone");
  divDadosPedidosTelefone.innerHTML = converteBuscaPedidos[0].usuario.telefone;
}

//Salva e recupera os dados do pedido no localStorage
localStorage.setItem('pedidos', JSON.stringify(pedidos));
var buscaPedidos = localStorage.getItem('pedidos');
var converteBuscaPedidos = JSON.parse(buscaPedidos);

teste(converteBuscaPedidos);

/* Teste no console
console.log(converteBuscaPedidos[0]);
console.log(converteBuscaPedidos[0].nomeCompleto);
console.log(converteBuscaPedidos[0].email);
console.log(converteBuscaPedidos[0].telefone);*/

