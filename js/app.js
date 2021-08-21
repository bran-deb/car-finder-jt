// variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const precioMin = document.querySelector('#minimo')
const precioMax = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
// contenedor para los resultados
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear()
const min = max - 10//la agencia solo vende autos con 10 años de antiguedad

//generar un objeto para la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: '',

}
// events
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos()//muestra los autos a cargar
    //llena las opciones de años
    llenarSelect()
})
//event listener para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value
})
precioMin.addEventListener('change', (e) => {
    datosBusqueda.precioMin = e.target.value
})
precioMax.addEventListener('change', (e) => {
    datosBusqueda.precioMax = e.target.value
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value
    console.log(datosBusqueda);
})

// functions
function mostrarAutos() {
    autos.forEach((auto) => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} -Precio: ${precio} - Color:${color}
        `
        //insertar en el HTML
        resultado.appendChild(autoHTML)
    })
}

function llenarSelect() {
    for (let i = max; i > min; i--) {
        const option = document.createElement('option')
        option.value = i
        option.textContent = i
        year.appendChild(option)
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca)
    console.log(resultado);
}
function filtrarMarca(auto) {
    const { marca } = datosBusqueda
    if (marca) {
        return auto.marca === marca
    } else {
        return auto
    }
}