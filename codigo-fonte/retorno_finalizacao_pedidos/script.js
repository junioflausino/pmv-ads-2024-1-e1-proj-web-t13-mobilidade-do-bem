/* const produtoReservado = {

  ,user {    
  userName: "Leticia teste",
  userEmail: "leticiamoreira789@gmail.com",
  userTel: "35997442500",
  userCategory: "tomador",
  userPassword: "7788le",
  notification: "true",
},

  product {
    productName: "cadeira de rodas 2000",
    productType: "cadeira de rodas",
    productCategory: "emprestimo",
    productLoanTime: "2 anos",
    productAdress: "37714-477",
    productDescription: "A cadeira de rodas 2000 é semi-nova, regulável e automática, é dobrável e está em perfeitas condições de uso.",
    productImg: "img class="img-fluid fotocadeirarodas" src="img/Screenshot_1.png"",

  }, 
}*/

var pedido = new Object();
var user = new Object();
var product = new Object();

locaStorage.setItem("userName","Leticia teste");

function(){
  var divdadosReserva = document.getElementById("dadosReserva");
  divdadosReserva.innerHTML = userNameTeste;
}

const userName = window.localStorage.getItem('userName')
if (userName) {
  const userNameTeste = JSON.parse(userName);
}