'use strict'

let mongoose = require("mongoose")
let Schema = mongoose.Schema

let CarSchema = Schema({
    codigo: String,
    modelo: String,
    color: String,
    anio: Number,
    precio: String
})

module.exports = mongoose.model('car', CarSchema)