//console.log("Eventos");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const expRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 


const botonEnviar = document.getElementById("enviar");

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

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

//FUNCION DE PAGAR ENTRADAS 

let valorGeneral = 200;
let cantidadEntradas = document.getElementById("cantidadEntradas");
let selectCategoria = document.getElementById("selectCategoria");  

function totalAPagar() { 
    switch (selectCategoria.value) {
      case "1":
        valorGeneral = valorGeneral * 0.2 * cantidadEntradas.value;
        document.getElementById('total').innerHTML= "Total a pagar: $" + valorGeneral;
        break;
      case "2":
        valorGeneral = 200 * 0.5 * cantidadEntradas.value;
        document.getElementById('total').innerHTML= "Total a pagar: $" + valorGeneral;
        break;
      case "3":
        valorGeneral = 200 * 0.85 * cantidadEntradas.value;
        document.getElementById('total').innerHTML= "Total a pagar: $" + valorGeneral;
        break;
        case "4":
            valorGeneral = 200 * cantidadEntradas.value;
            document.getElementById('total').innerHTML= "Total a pagar: $" + valorGeneral;    
            break;
      default:
        break;
    }
   
 }  


function borrarTotal(){
    document.getElementById('total').innerHTML= "Total a pagar: $" ;
    
}

botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", validarEmail);
botonEnviar.addEventListener("click", totalAPagar); 
botonBorrar.addEventListener("click" , borrarTotal)


