
const buscarCiudad=document.getElementById('buscar-city')
const lugarError=document.getElementById('error')


async function resultadosClima(city) {
    
    try {
        const URL= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=140571e2994c991508de47bc03622c96`)
        const datosClima= await URL.json()
    
        const nombreCiudad=datosClima.name
        const temperatura=(datosClima.main.temp)-273.15
        const humedad=datosClima.main.humidity
        const presionAtmosferica=datosClima.main.pressure
        const viento=datosClima.wind.speed
    
        const lugarNombre = document.getElementById("name-city")
        const lugarTemperatura = document.getElementById('temperatura')
        const lugarHumedad = document.getElementById('humedad')
        const lugarViento = document.getElementById('viento')
        const lugarPresion = document.getElementById('presion')
        
        lugarNombre.innerText=nombreCiudad
        lugarTemperatura.innerHTML=`${Math.round(temperatura)}°C`
        lugarHumedad.innerHTML=`${humedad}%`
        lugarViento.innerHTML=`${viento}m/s`
        lugarPresion.innerHTML=`${presionAtmosferica} hPa`
        lugarError.innerText=''
        
    } catch (error) {
        console.log(`Error encontrado en la ejecucion: ${error}`)
        lugarError.innerText='No se pudo completar la busqueda'
    }
}



buscarCiudad.addEventListener('click',()=>{
    const ciudadIngresada=document.getElementById('city')
    try {
        resultadosClima(ciudadIngresada.value)
    } catch (error) {
        console.log(`Error encontrado en la ejecucion: ${error}`)
    }
})









