//Função que envia os dados para o servidor JSON SERVER
//GET - CREATE

function fazerLogin() {
  //Obter os valores do input
  let nome = document.getElementById('nome').value
  let senha = document.getElementById('senha').value

  //Fazer uma requisição GET - READ e buscar a pessoa
  fetch('http://localhost:3000/pessoas').then(resposta => resposta.json())
  .then(dados => {
    //Buscar o usuário e senha que foram digitados e existente 
    let usuario = dados.find(pessoas => pessoas.nome == nome && pessoas.senha == senha)
    //Se existir a pessoa, redirecionar para a página BEM VINDO.html
    if(usuario) {
        window.location.href = 'bemvindo.html'
    } else {
        alert("Usuário/Senha Incorreta! Tente novamente!!")
    }
  })
}