// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres ingresados
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    
    amigos.push(amigo); // Agregar el nombre al arreglo
    
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";

    // Actualizar la lista visible
    actualizarLista();
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos amigos

    // Agregar cada amigo a la lista
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

