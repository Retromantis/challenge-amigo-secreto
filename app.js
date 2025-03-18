
let nombresIngresados = [];
let mensajeDeAlerta = "Por favor, ingrese un nombre válido";

function agregarAmigo() {
    let entrada = document.getElementById("amigo").value;
    let valorEntrada = entrada.trim();
    if (valorEntrada === "") {
        alert(mensajeDeAlerta);
    } else {
        nombresIngresados.push(valorEntrada);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    document.getElementById("resultado").innerHTML = "";
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";
    for (let i = 0; i < nombresIngresados.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = nombresIngresados[i];
        lista.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if (nombresIngresados.length === 0) {
        alert(mensajeDeAlerta);
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombresIngresados.length);
        let nombreSorteado = nombresIngresados[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `${nombreSorteado} es tu amigo secreto `;
        borrarLista(false);
    }

}

function borrarLista(resultado) {
    if (resultado) document.getElementById("resultado").innerHTML = "";
    nombresIngresados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("amigo").value = "";
}