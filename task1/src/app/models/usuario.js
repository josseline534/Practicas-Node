'use strict'

let mongoose = require("mongoose")
let Schema = mongoose.Schema

let UsuarioSchema = Schema({
    nombre: String,
    apellido: String,
    redes_sociales: [
        {
            nombre_red: String,
            username: String,
            url: String,
            icono: String
        }
    ],
    identificacion: String

})
module.exports= mongoose.model('usuario', UsuarioSchema)