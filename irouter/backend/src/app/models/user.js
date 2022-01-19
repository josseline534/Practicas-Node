'use strict'

let mongoose = require("mongoose")
let Schema = mongoose.Schema

let UserSchema = Schema({
    nombre: String,
    usuario: String,
    password: String
})

module.exports = mongoose.model('user', UserSchema)