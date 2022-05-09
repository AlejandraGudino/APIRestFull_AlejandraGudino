function generarId() {
    return `${Date.now()}`
}

const articulos = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "globe-earth-geograhy-planet-school-256.png",
      "id": 3
    },
    {
      "title": "book",
      "price": 36,
      "thumbnail": "http:ale",
      "id": 6
    }
  ]
  
const databaseArticulos = {
    obtenerTodos: () => {
        return [...articulos]
    },
    obtenerSegunRol: rol => {
        return articulos.filter(a => a.rol === rol)
    },
    obtenerSegunId: id => {
        const articuloBuscado = articulos.find(a => a.id === id)
        if(!articuloBuscado){
            throw new Error ('no existe una persona con ese id')
        }
        return personaBuscada
    },
    agregarArticulos: datos => {
        const articulo = datos
        articulo.id = generarId()
        articulo.push(articulo)
        return articulo
    },
    borrarArticuloSegunId: id => {
        const indiceBuscado = articulos.findIndex(a => a.id === id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }
        personas.splice(indiceBuscado, 1)
    },
    reemplazarArticuloSegunId: (id, datos) => {
        const indiceBuscado = articulos.findIndex(a => a.id === id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }
        const articulo = datos
        articulo.id = id
        articulo[indiceBuscado] = articulo
        return articulo
    }
}

module.exports = {databaseArticulos }