//Função que envia os dados para o servidor JSON SERVER
//POST - CREATE

function enviarDados() {
  //Obter os valores do input
  let nome = document.getElementById('nome').value
  let senha = document.getElementById('senha').value

  //Envia os dados para o servidor utilizando o FETCH
  fetch('http://localhost:3000/pessoas', {
    method: 'POST', //Método HTTP utilizando POST
    headers: {
      'Content-Type': 'applicantion/json' //Tipo de conteúdo enviado JSON
    },
    body: JSON.stringify({ nome: nome, senha: senha }) //Dados a serem enviados parao JSON
  }).then(resposta => resposta.json()) //Converter a resposta para o JSON
}
