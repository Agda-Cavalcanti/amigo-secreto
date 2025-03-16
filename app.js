//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array vazio para armazenar os nomes
let amigos = []

// Função para inserir um nome no campo de texto e adicioná-lo à lista de amigos, possui também verificação se o campo está ou não vazio.
function adicionarAmigo(){

let amigo = (document.querySelector('input').value);

if (amigo == ""){
    //console.log(amigos);    
    alert("Por favor, insira um nome.");

}else{
    //console.log(amigos);
    amigos.push(amigo);
    atualizarListaDeAmigos()
    limparCampo();
    resultado.innerHTML = "";// Limpando a lista, para que não tenha nomes duplicados  
}


}

// Função que percorre o array e adiciona cada amigo em um elemento <li> dentro de uma lista HTML.
function atualizarListaDeAmigos(){ //
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";// Limpando a lista, para que não tenha nomes duplicados
    for(let i = 0; i < amigos.length; i++){
        
        let li = document.createElement("li"); // Cria um novo elemento <li> para cada item do array
        li.textContent = amigos[i]; // Define o conteúdo do <li> como o texto do item atual do array.
        lista.appendChild(li); // Insere o <li> recém-criado dentro da lista <ul>
    }
}

function sortearAmigo(){

    if (amigos.length > 0){
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[indiceSorteado]}!`;
    }else{

        let li = document.createElement("li");
        li.textContent = "ADICIONE UM NOME!";
        resultado.appendChild(li);
        
    }
   
}
// Limpar campo onde é colocado o nome
function limparCampo(){
    a = document.querySelector('input');
    a.value = '';
}

