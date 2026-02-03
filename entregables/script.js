
//EJERCICIO 1: SALUDO
// Obtener la hora actual
const hora = new Date().getHours();
let saludo;

// Determinar el saludo según la hora
if (hora >= 5 && hora < 12) {
  saludo = "Buenos días bienvenido al CV de Sofia Bilbao";
} 
else if (hora >= 12 && hora < 18) {
  saludo = "Buenas tardes bienvenido al CV de Sofia Bilbao";
} 
else {
  saludo = "Buenas noches bienvenido al CV de Sofia Bilbao";
}

// Mostrar el saludo en un elemento HTML
document.getElementById('saludo').innerText = saludo;