///Formulario

const claveFormulario = document.getElementById("formulario")

claveFormulario.addEventListener("submit", function (recogerDatos){
    recogerDatos.preventDefault(); //Previene la recarga de la web al enviar el formulario

    //Guardar los datos en variables
    let datoNombre = document.getElementById("input-nombre").value;
    let datoCorreo = document.getElementById("input-correo").value;
    let datoMensaje = document.getElementById("input-mensaje").value;
    let urlImagen = document.getElementById("input-url").value;

    //Introducirlos en un objeto
    let objetoDatos = {
        nombre: datoNombre,
        correo: datoCorreo,
        mensaje: datoMensaje,
        imagen: urlImagen
    };

    /* let objetoDatos = [nombre: "Mario", 
                       correo: "mariolopezclav@gmail.com", 
                       mensaje: "Hola", 
                       imagen: "https://e00-xlk-ue-marca.uecdn.es/uploads/2025/03/20/67dc2eaa8b3ca.jpeg"]*/

    let datosGuardados = JSON.parse(localStorage.getItem("Datos usuario")) || []; //Recuperamos los datos de usuario de LS y los convertimos en un array vacío "|| []""
    datosGuardados.push(objetoDatos) //Metemos los datos guardados en el objeto
    localStorage.setItem("Datos usuario", JSON.stringify(datosGuardados)) //Volvemos a meter los datos de usuario y los guardamos los mandamos como string
    
    let divContenedor = document.getElementById("datos-introducidos"); //Limpiar DIV de la lista
    divContenedor.innerHTML = "";
    
    let lista = document.createElement("ul"); //Crear las etiquetas (ul y li)

    Object.entries(objetoDatos).forEach(([clave, valor]) => { //Iteramos sobre el objeto con Object.entries y un forEach para 
        let item = document.createElement("li");              // crear los li dentro de los ul
        item.textContent = `${clave}: ${valor}`;
        lista.appendChild(item);
    })

    divContenedor.appendChild(lista); //Creamos la lista como hijo del contenedor DIV

    let inputs = document.querySelectorAll("input, textarea"); //Seleccionamos los inputs y los vaciamos
    inputs.forEach(input => input.value = "")

    console.table(objetoDatos);
})

//Reiniciar formulario (acumular datos en Local Storage)
document.getElementById("reiniciar-formulario").addEventListener("click", reiniciarFormulario)
function reiniciarFormulario(){
    // Limpiar los inputs después de guardar los datos
    let inputs = document.querySelectorAll("input, textarea"); // Seleccionamos todos los inputs y el textarea
    inputs.forEach(input => input.value = ""); // Vaciar los inputs

    // Limpiar el contenedor de la lista previa si existe
    let contenedorLista = document.getElementById("datos-introducidos");
    if (contenedorLista) {
        contenedorLista.innerHTML = ""; // Borrar la lista previa
    }
}


//Botón borrar todo lo almacenado en Local Storage
function borrarContactos(){
    localStorage.clear()
    let listaEliminada = document.getElementById("datos-introducidos")
    if(listaEliminada){
        listaEliminada.innerHTML = ""
    }
}

//Botón eliminar contacto
/*let datosRecuperados = JSON.parse(localStorage.getItem("Datos usuario")) || []; //Recuperamos los datos de Local Storage

let strinConvertido = datosRecuperados.map(function(clave){ //Convertivos el string en un array con map
    return `${clave.nombre} ${clave.correo} ${clave.mensaje} ${clave.imagen}`;
})

let promptUsuario = "Mario"

let datosFiltrados = strinConvertido.filter(nombre => nombre !== promptUsuario)

localStorage.setItem("Datos usuario", JSON.stringify(datosFiltrados))*/














