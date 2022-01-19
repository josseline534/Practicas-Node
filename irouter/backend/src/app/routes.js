'use strict'

const express = require('express')
const route = express.Router()

const controllerLogin = require('./controller/login')
const controllerCar = require('./controller/car')
const { Router } = require('express')

route.post('/login', controllerLogin.signIn)

route.post('/crear-vehiculo', controllerCar.create)

route.get('/vehiculos', controllerCar.getCars)
route.get('/actualizar-vehiculo/:id', controllerCar.getCar)

route.put('/actualizar-vehiculo/:id', controllerCar.update)

route.delete('/eliminar-vehiculo/:id', controllerCar.delete)

module.exports = route