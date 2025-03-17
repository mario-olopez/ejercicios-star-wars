const fotosBanner = [
    "./banner/1.jpg",
    "./banner/2.jpg",
    "./banner/3.jpg",
    "./banner/4.jpg",
    "./banner/5.jpg",
    "./banner/6.jpg",
    "./banner/7.jpg",
    "./banner/8.jpg"
]

const fotosViajes = [
    "./viajes/viajes-1.jpg",
    "./viajes/viajes-2.jpg",
    "./viajes/viajes-3.jpg",
    "./viajes/viajes-4.jpg",
    "./viajes/viajes-5.jpg",
    "./viajes/viajes-6.jpg",
    "./viajes/viajes-7.jpg"
]

// Foto principal

let galeriaBanner = document.querySelector(".foto-principal") //Seleccionamos el contenedor donde meter el banner principal

let fotoPrincipal = document.createElement("img") //Creamos el elemento imagen

fotoPrincipal.src = fotosBanner[0] //Seleccionamos del array la primera foto (que tiene el índice 0)

fotoPrincipal.classList.add("imagen-banner") //Creamos una clase para modificar sus parámetros en CSS

galeriaBanner.appendChild(fotoPrincipal) //Utilizamos appendChild para insetar en el contenedor la fotoPrincipal

// Fotos recomendados

let contenedorRecomendados = document.querySelector(".contenedor-recomendados") //Seleccionamos el contenedor donde almacenaremos las fotos

let fotosSeleccionadas = fotosViajes.slice(0, 3) //Seleccionamos las fotos que queremos

fotosSeleccionadas.forEach(url => { //Utilizamos un forEach para recorrer el array
    let fotoRecomendado = document.createElement("img"); //Creamos los elementos img
    fotoRecomendado.src = url; //Añadimos la fuente src
    fotoRecomendado.classList.add("fotografias-recomendados"); //Utilizamos classList para añadir una clase
    contenedorRecomendados.appendChild(fotoRecomendado); //Metemos las fotos como hijos del contenedor
})

// Seleccione destino

const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Granada", "Málaga", "Palma de Mallorca", "Alicante", "Zaragoza"] //Array con las ciudades

let contenedorSelect = document.getElementById("seleccione-destino"); //Variable donde metemos el contenedor

let select = document.createElement("select"); //Crear el elemento
select.id = "id-select"; //Le asignamos un id
contenedorSelect.appendChild(select) //Creamos el select como hijo del contenedor(div)

let opcionPorDefecto = document.createElement("option") //Variable para la opción por defecto (--Seleccione destino--)
opcionPorDefecto.textContent = "-- Seleccione un destino --"; //Lo primero que se verá en el desplegable
opcionPorDefecto.value = ""; //Le quitamos value porque es solo texto por defecto
select.appendChild(opcionPorDefecto); //Metemos la opción por defecto como hijo del select

ciudades.forEach(ciudad => { //Usamos forEach para recorrer el bucle y crear una opción para cada ciudad
    let opcionCiudad = document.createElement("option"); //Creamos primero el elemento option
    opcionCiudad.textContent = ciudad; //Cada ciudad la convertimos en una option
    opcionCiudad.value = "destino"; //Le asignamos un value al ser una opción "real"
    select.append(opcionCiudad) //Añadimos las ciudades como opciones al select
})

contenedorSelect.appendChild(select) //Metemos el select dentro del contenedor

//Otra opción con el DOMContentLoaded
/* document.addEventListener("DOMContentLoaded", function() {
    const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Granada", "Málaga", "Palma de Mallorca", "Alicante", "Zaragoza"];
    
    let contenedorSelect = document.getElementById("seleccione-destino"); //Seleccionamos el div donde meter el select
    
    let select = document.createElement("select") //Creamos el select con su id
    select.id = "select-destino";

    let opcionPorDefecto = document.createElement("option"); //Creamos opción predeterminada
    opcionPorDefecto.textContent = "-- Seleccione un destino --";
    opcionPorDefecto.disabled = true;
    opcionPorDefecto.selected = true;
    select.appendChild(opcionPorDefecto);

    ciudades.forEach(ciudad => { //Usamos un forEach para recorrer el bucle y crear las opciones
        let opcionCiudad = document.createElement("option");
        opcionCiudad.textContent = ciudad;
        opcionCiudad.value = ciudad;
        select.appendChild(opcionCiudad)
    });
    
    contenedorSelect.appendChild(select)
}) */
