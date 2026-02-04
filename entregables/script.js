
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



//EJERCICIO 2: SALUDO
document.getElementById("hideexperience").onclick = function () { //cuando hagan clic en el boton con id de hideexperience en este boton, ejecuta esto
  document.getElementById("experiencialaboral").classList.toggle("d-none");          //classList es la parte del elemento HTML que deja ver y cambiar las clases desde JavaScript en esye caso a dn
                                                                                    //el toggle es como un ON/OFF
                                                                                    //d none es display none

};


//EJERCICIO 3: MODO
const toggleButton = document.getElementById('modo');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Guardar preferencia (opcional)
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

