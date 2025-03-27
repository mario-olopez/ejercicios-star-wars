// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA30CL06O3b_S6FYkF1sxmtSXG8oBLykHI",
    authDomain: "datos-usuario-formulario.firebaseapp.com",
    projectId: "datos-usuario-formulario",
    storageBucket: "datos-usuario-formulario.firebasestorage.app",
    messagingSenderId: "610069122044",
    appId: "1:610069122044:web:f87656f4d4c2afac420079"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//Almacenar los valores del formulario en variables
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const mensajeInput = document.getElementById("mensaje");
const urlImagenInput = document.getElementById("urlImagen");
const botonSave = document.getElementById("botonSave");

//Función para guardar inputs en base de datos
async function guardarDatos() {

    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const mensaje = mensajeInput.value;
    const urlImagen = urlImagenInput.value;

    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
            nombre,
            correo,
            mensaje,
            urlImagen,
        });
        console.log("Documento escrito con ID: ", docRef.id);
        alert("Datos guardados con éxtio");

        // Limpiar el formulario tras rellenarlo
        nombreInput.value = "";
        correoInput.value = "";
        mensajeInput.value = "";
        urlImagenInput.value = "";

    } catch (error) {
        console.error("Error añadiendo documento: ", error);
        alert("Error al guardar los datos.");
    }
}

//Pintar datos en el DOM

//Función para borrar el album previo
const limpiarAlbum = () => {
    const album = document.getElementById("album");
    album.innerHTML = "";
}

//Función para imprimir los datos
const imprimirTarjeta = (nombre, correo, mensaje, url) => {
    let tarjeta = document.createElement("div");

    let nameElemento = document.createElement("h2");
    nameElemento.innerHTML = nombre;

    let correoElemento = document.createElement("h3");
    correoElemento.innerHTML = correo;

    let mensajeElemento = document.createElement("h3");
    mensajeElemento.innerHTML = mensaje;

    let imagenElemento = document.createElement("img");
    imagenElemento.setAttribute("src", url);
    imagenElemento.setAttribute('style', "max-width:200px");

    tarjeta.appendChild(nameElemento);
    tarjeta.appendChild(correoElemento);
    tarjeta.appendChild(mensajeElemento);
    tarjeta.appendChild(imagenElemento);

    const album = document.getElementById("album");
    album.appendChild(tarjeta);
}

async function obtenerDatos() {
    limpiarAlbum();
    
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        imprimirTarjeta(data.nombre, data.correo, data.mensaje, data.urlImagen);
    });
}

window.addEventListener("load", () => {
    obtenerDatos();
});

botonSave.addEventListener("click", guardarDatos)

//Para borrar todos los contactos
async function borrarDatos(){
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc(db, "usuarios", doc.id))
    })

    limpiarAlbum();
    alert("Todos los usuarios han sido eliminados")
}

document.getElementById("botonBorrar").addEventListener("click", borrarDatos);





