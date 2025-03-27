//Llamada a la API para obtener los datos

async function getDataStarWars(){
    try{
        const peliculasStarwars = await fetch("https://swapi.dev/api/films/");

        if(!peliculasStarwars.ok) {
            if (peliculasStarwars.status === 404) {
              throw new Error("Recurso no encontrado (404)");
            } else if (peliculasStarwars.status === 500) {
              throw new Error("Error en el servidor (500)");
            } else {
              throw new Error(`Error HTTP: ${peliculasStarwars.status}`);
            }
    }

    let datosPeliculas = await peliculasStarwars.json();
    pintarGrafica(datosPeliculas.results)

} catch (error){
    console.log(`ERROR: ${error.stack}`)}
}

getDataStarWars()

//Mapear los datos de las películas

async function pintarGrafica(insertarDatos){
    //Mapeo de los datos de las películas para quedarnos con los títulos y las fechas de estreno
    const nombresPeliculas = [];
    const anioPeliculas = [];

    insertarDatos.forEach((pelicula) => {
        nombresPeliculas.push(`${pelicula.title}`);
        anioPeliculas.push(`${pelicula.release_date}`)// con new Date y getFullYear se saca solo el año
    });


    //Pintar gráfica

    var data = {
        labels: nombresPeliculas,
        series: [soloAnio]
      };
      
      var responsiveOptions = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
          showPoint: false,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }],
        ['screen and (max-width: 640px)', {
          showLine: false,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }]
      ];
      
      new Chartist.Line('.peliculas', data, null, responsiveOptions);

}

pintarGrafica()
