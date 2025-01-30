// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let nombres = [];
    let inputamigo = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");
    let ganadorDisplay = document.getElementById("resultado");


    function agregarAmigo() {
      let nombre = inputamigo.value.trim();

      if (nombre) {
        nombres.push(nombre);
        
        let ul = document.createElement("ul");
        ul.textContent = nombre;
        listaAmigos.appendChild(ul);
        inputamigo.value = "";
        inputamigo.focus();
      } else {
        alert("Por favor, ingresa un nombre válido.");
      }
    };

      
  
function sortearAmigo(){
    
    if (nombres.length === 0) {
      alert("La lista está vacía. Agrega amigos antes de sortear.");
    } else {
      let indiceAleatorio = Math.floor(Math.random() * nombres.length);
      let nombreGanador = nombres[indiceAleatorio];
      ganadorDisplay.textContent = `El nombre ganador es: ${nombreGanador}`;

      // Limpiar la lista y el arreglo
      nombres.length = 0;
      listaAmigos.innerHTML = "";
    }

   
}


    