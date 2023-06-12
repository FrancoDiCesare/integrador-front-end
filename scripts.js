//console.log("Eventos");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const expRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 


const botonEnviar = document.getElementById("enviar");


function validarNombre() {
    if (nombre.value.length<3) {
        document.getElementById("errorNombre").innerHTML = "El nombre no es correcto";
    } else{

        document.getElementById("errorNombre").innerHTML = "";
    }
}

function validarApellido() {
    if (nombre.value.length<3) {
        document.getElementById("errorApellido").innerHTML = "El apellido no es correcto";
    } else{

        document.getElementById("errorApellido").innerHTML ="";
    }
}

function validarEmail(){
    if(!expRegular.test(email.value)){
        document.getElementById("errorEmail").innerHTML = "El correo no es valido";
    } else{
        document.getElementById("errorEmail").innerHTML = "";
    }
}

/*const selCategoria = document.getElementById("categoria").value;
const cantidad = document.getElementById("cantiadad");
const estudiantes = document.getElementById("estudiantes");


function totalAPagar(){
    let total = cantidad.value * 200
    return total;
}


console.log(total);*/


botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", validarEmail);
botonEnviar.addEventListener("click", categoriaEntradas);

//FUNCION DE PAGAR ENTRADAS 

/*
const estudiante = document.getElementById("estudiante");
const trainee = document.getElementById("trainee");
var cantEstu = estudiante;

function pagoEstudiante(){
    if (estudiante<=10) {
        document.getElementById("totalEstudiante").innerHTML=("El precio total es " + cantEstu*40);        
    }else{
        document.getElementById("totalEstudiante").innerHTML= ("El numero de entradas es incorrecto");
    }
}
*/

const cantidadTicket = document.getElementById("cantidad.ticket");
const categoriaEntrada = document.getElementById("categoria-entrada");
const totalPago = document.getElementById("total-pago");

let total = 0 ;

function categoriaEntradas(){
switch (categoriaEntrada.value) {
    case "General":
        total = parseInt(cantidadTicket.value)*200
        break;

    case "Estudiante":
        total = parseInt(cantidadTicket.value)*40
        break;
    case "Trainee":
        total = parseInt(cantidadTicket.value)*100
        break;
    case "Junior":
        total = parseInt(cantidadTicket.value)*170
        break;
}
totalPago.innerHTML = "El total es : + "total" ";
}