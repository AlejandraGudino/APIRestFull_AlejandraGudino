const { databaseArticulos } = require("../databases/databaseArticulos.js")
const serverInfo = {
    os: 'windows',
    framework: 'express'
}

const controladoresApi = {
    getinfo: (req, res) => {
        res.json(serverInfo);
    },
    getArticulos: (req, res) => {
        if(Object.entries(req.query).length > 0){
            res.json(databaseArticulos.obtenerSegunRol(req.query.rol))
        } else{
            res.json(databaseArticulos.obtenerTodos())
        }
    },
    getArticulo: (req, res) => {
        const id = req.params.idPersona
        try {
            const ArticuloBuscado = databaseArticulos.obtenerSegunId(id)
            res.json(ArticuloBuscado)
        } catch (error) {
            if (error === 'db not found'){
                res.status(404).json({error: error.message})
            }else{
                res.status(500).json({error: error.message})
            }
            
        }
    },
    postArticulo: (req, res) => {
        const articuloAgregado = databaseArticulos.agregarArticulos(req.body)
        res.status(201).json(articuloAgregado)
    },
    deleteArticulo: (req, res) => {
        const id = req.params.idArticulo
        try {
            databaseArticulos.borrarArticuloSegunId(id);
            res.sendStatus(204)
        } catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    },
    putArticulo: (req, res) => {
        const id = req.params.idArticulo
        const datos = req.body
        try {
            const articuloReemplazado = databaseArticulos.reemplazarArticuloSegunId(id, datos)
            res.json(articuloReemplazado)
        } catch (error) {
            if (error.tipo === 'db not found') {
                res.status(404).json({ error: error.message })
            } else {
                res.status(500).json({ error: error.message })
            }
        }
    }
}

module.exports = { controladoresApi }