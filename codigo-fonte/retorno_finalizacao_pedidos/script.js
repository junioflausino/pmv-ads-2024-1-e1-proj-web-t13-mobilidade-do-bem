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

async function bancoDados () {
   localStorage.setItem("userName","Leticia teste");
}

localStorage.setItem("userName","Leticia teste");

function teste(userName){
  var divDadosReserva = document.getElementById("dadosReserva");
  divDadosReserva.innerHTML = userName;
}

const userName = window.localStorage.getItem('userName')
if (userName) {
  //const userNameTeste = JSON.parse(userName);
  console.log(userName);
  teste(userName);
}

var userObject = { 'name': 'Leticia', 'email': 'leticia@hotmail.com', 'phone': '35999999999' };
localStorage.setItem('userObject', JSON.stringify(userObject));

var retrievedUserObject = localStorage.getItem('userObject');

var parsedRetrievedUserObject = JSON.parse(retrievedUserObject);
console.log(parsedRetrievedUserObject);
console.log(parsedRetrievedUserObject.name);
