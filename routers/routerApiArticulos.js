const express = require('express')
const {Router} = require('express')
const { controladoresApi } = require('../controllers/controladoresApi.js')

const routerApiArticulos = new Router()

routerApiArticulos.use(express.json())
routerApiArticulos.use(express.urlencoded({ extended: true}))

routerApiArticulos.get('/api/articulos', controladoresApi.getArticulos)
routerApiArticulos.get('/api/articulo/:idarticulo', controladoresApi.getArticulo)
routerApiArticulos.post('/api/articulos', controladoresApi.postArticulo)
routerApiArticulos.delete('/api/articulos/:idarticulo', controladoresApi.deleteArticulo)
routerApiArticulos.put('/api/articulos/:idarticulo', controladoresApi.putArticulo)

module.exports = { routerApiArticulos }