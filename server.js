
const { urlencoded } = require('express')
const express = require('express')

const { routerArticulos } = require('./routers/routerApiArticulos.js')
const app = express()

app.use(routerArticulos)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error.message) })