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
    mostrarAutos(autos)//muestra los autos a cargar
    //llena las opciones de años
    llenarSelect()
})
//event listener para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})
precioMin.addEventListener('change', (e) => {
    datosBusqueda.precioMin = e.target.value
    filtrarAuto()
})
precioMax.addEventListener('change', (e) => {
    datosBusqueda.precioMax = e.target.value
    filtrarAuto()
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value
    console.log(datosBusqueda);
    filtrarAuto()
})

// functions
function mostrarAutos(autos) {
    limpiarHTML()//elimina el html previo
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

//limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
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
        .filter(filtrarYear)
        .filter(filtrarMin)
        .filter(filtrarMax)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor)
    if (resultado.length) {
        mostrarAutos(resultado)
    } else {
        noHayResultado()
    }
}

function noHayResultado() {
    limpiarHTML()
    const sinResultados = document.createElement('div')
    sinResultados.classList.add('alerta', 'error')
    sinResultados.textContent = 'NO HAY RESULTADOS DE BUSQUEDA'
    resultado.appendChild(sinResultados)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda
    if (marca) {
        return auto.marca === marca
    } else {
        return auto
    }
}
function filtrarYear(auto) {
    const { year } = datosBusqueda
    if (year) {
        return auto.year === year
    } else {
        return auto
    }
}
function filtrarMin(auto) {
    const { precioMin } = datosBusqueda
    if (precioMin) {
        return auto.precio >= precioMin
    } else {
        return auto
    }
}
function filtrarMax(auto) {
    const { precioMax } = datosBusqueda
    if (precioMax) {
        return auto.precio <= precioMax
    } else {
        return auto
    }
}
function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda
    if (puertas) {
        return auto.puertas = puertas
    } else {
        return auto
    }
}
function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda
    if (transmision) {
        return auto.transmision === transmision
    } else {
        return auto
    }
}
function filtrarColor(auto) {
    const { color } = datosBusqueda
    if (color) {
        return auto.color === color
    } else {
        return auto
    }
}