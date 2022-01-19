'use strict'

const express = require('express')
const route = express.Router()
const controller = require('../controller/usuario')

route.get('/usuarios', controller.getUsuarios)
route.get('/usuario/:id', controller.getUsuario)
route.get('/usuario/ident/:identificacion', controller.getUsuarioIdentificacion)
module.exports = route