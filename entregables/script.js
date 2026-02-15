
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



//EJERCICIO 2: OCULTAR EXPERIENCIA LABORAL
document.getElementById("hideexperience").onclick = function () { //cuando hagan clic en el boton con id de hideexperience en este boton, ejecuta esto
  document.getElementById("experiencialaboral").classList.toggle("d-none");          //classList es la parte del elemento HTML que deja ver y cambiar las clases desde JavaScript en esye caso a dn
                                                                                    //el toggle es como un ON/OFF
                                                                                    //d none es display none

};


//EJERCICIO 3: MODO
document.getElementById("modo").onclick = function () {
  const body = document.body;
  const edu = document.getElementById("educacion");
  const exp = document.getElementById("experiencialaboral");
  const lenguajes = document.getElementById("lenguajes");
  const softskills = document.getElementById("softskills");
  const idiomas = document.getElementById("idiomas");
  const contacto = document.getElementById("contacto");
  const quiensoy = document.getElementById("quiensoy");
  const tEdu = document.getElementById("tedu");
  const tExp = document.getElementById("texp");
  const btnmodo = document.getElementById("modo");
  const btnhideexperience = document.getElementById("hideexperience");
  const btnhidecontact = document.getElementById("hidecontact");

  body.classList.toggle("dark-mode");

  
  if (body.classList.contains("dark-mode")) {
  
    //Fondo
    body.classList.add("bg-dark", "text-white");
    body.classList.remove("bg-light");
  
    
    // Botón
    btnmodo.classList.remove("btn-outline-success");
    btnmodo.classList.add("btn-light");
    btnhideexperience.classList.remove("btn-outline-success");
    btnhideexperience.classList.add("btn-light");
    btnhidecontact.classList.remove("btn-outline-success");
    btnhidecontact.classList.add("btn-light");



    // Cajas (sections)
    edu.classList.add("bg-dark", "text-white");
    exp.classList.add("bg-dark", "text-white");
    lenguajes.classList.add("bg-dark", "text-white");
    softskills.classList.add("bg-dark", "text-white");
    idiomas.classList.add("bg-dark", "text-white");
    contacto.classList.add("bg-dark", "text-white");
    quiensoy.classList.add("bg-dark", "text-white");



    // Tablas
    tEdu.classList.remove("table-success", "table-striped-columns");
    tEdu.classList.add("table-dark");

    tExp.classList.remove("table-success", "table-striped-columns");
    tExp.classList.add("table-dark");



  } 

  else {
    // Botón
    btnmodo.classList.remove("btn-light");
    btnmodo.classList.add("btn-outline-success");
    btnhideexperience.classList.remove("btn-light");
    btnhideexperience.classList.add("btn-outline-success");
    btnhidecontact.classList.remove("btn-light");
    btnhidecontact.classList.add("btn-outline-success");

    // Cajas
    edu.classList.remove("bg-dark", "text-white");
    exp.classList.remove("bg-dark", "text-white");
    lenguajes.classList.remove("bg-dark", "text-white");
    softskills.classList.remove("bg-dark", "text-white");
    idiomas.classList.remove("bg-dark", "text-white");
    contacto.classList.remove("bg-dark", "text-white");
    quiensoy.classList.remove("bg-dark", "text-white");

    // Tablas
    tEdu.classList.remove("table-dark");
    tEdu.classList.add("table-success", "table-striped-columns");
    tExp.classList.remove("table-dark");
    tExp.classList.add("table-success", "table-striped-columns");

    //Fondo
    body.classList.remove("bg-dark", "text-white");
    body.classList.add("bg-light");
  }
};

//EJERCICIO 4: BUSCADOR

document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador"))

        if(e.key ==="Escape")e.target.value = ""

    document.querySelectorAll(".skills").forEach(skills=>{

        skills.textContent.toLowerCase().includes(e.target.value.toLowerCase())

        ?skills.classList.remove("filtro")
        :skills.classList.add("filtro") 


    })
})



//EJERCICIO 5: OCULTAR INFORMACION DE CONTACTO
document.getElementById("hidecontact").onclick = function () { //cuando hagan clic en el boton con id de hidecontacte en este boton, ejecuta esto
document.getElementById("contacto").classList.toggle("d-none");          //classList es la parte del elemento HTML que deja ver y cambiar las clases desde JavaScript en esye caso a dn
                                                                                    //el toggle es como un ON/OFF
                                                                                    //d none es display none
};


