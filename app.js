let amigos = [];
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    if (!lista) {
        console.error('Elemento com id "listaAmigos" não encontrado.');
        return;
    }
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    if (!input) {
        console.error('Elemento com id "amigo" não encontrado.');
        return;
    }    
    let nomeAmigo = input.value.trim();
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarLista();
        input.value = '';
    } else {
        alert('Por favor, insira um nome válido.');
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`Amigo sorteado: ${amigoSorteado}`);
}