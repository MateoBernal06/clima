
const buscarCiudad = document.getElementById("buscar-city");

const lugarError = document.getElementById("error");

async function resultadosClima(city) {
  try {
    const URL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=140571e2994c991508de47bc03622c96`
    );
    const datosClima = await URL.json();
    const nombreCiudad = datosClima.name;
    const temperatura = datosClima.main.temp - 273.15;
    const humedad = datosClima.main.humidity;
    const presionAtmosferica = datosClima.main.pressure;
    const viento = datosClima.wind.speed;
    const id_icono= datosClima.weather[0].icon;
    const estado = datosClima.weather[0].main

    const lugarNombre = document.getElementById("name-city");
    const lugarTemperatura = document.getElementById("temperatura");
    const lugarHumedad = document.getElementById("humedad");
    const lugarViento = document.getElementById("viento");
    const lugarPresion = document.getElementById("presion");
    IconoClima(id_icono)
    const estadoClima = document.getElementById('estado-clima')

    lugarNombre.innerText = nombreCiudad;
    lugarTemperatura.innerHTML = `${Math.round(temperatura)}°C`;
    lugarHumedad.innerHTML = `${humedad}%`;
    lugarViento.innerHTML = `${viento}m/s`;
    lugarPresion.innerHTML = `${presionAtmosferica} hPa`;
    estadoClima.innerHTML = `${estado}`
    lugarError.innerText = "";
  } catch (error) {
    console.log(`Error encontrado en la ejecucion: ${error}`);
    lugarError.innerText = "ERROR, No se pudo completar la busqueda";
  }
}

buscarCiudad.addEventListener("click", () => {
  const ciudadIngresada = document.getElementById("city");
  try {
    resultadosClima(ciudadIngresada.value);

  } catch (error) {
    console.log(`Error encontrado en la ejecucion: ${error}`);
  }
});


async function IconoClima(id_clima) {
  
  const lugarIcono= document.getElementById("icono")
  try {
    const URL= `https://openweathermap.org/img/wn/${id_clima}@4x.png`
    const icono = document.createElement('img')
    icono.src=URL
    icono.alt='no se pudo cargar la imagen'
    lugarIcono.innerHTML = '';
    lugarIcono.appendChild(icono);
    
  } catch (error) {
    console.log(`Error encontrado en la ejecucion: ${error}`);
  }
  
}











