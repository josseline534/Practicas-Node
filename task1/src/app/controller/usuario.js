'use strict'
const Usuario = require('../models/usuario')

let controller = {
    getUsuarios : async (req, res) => {
        let usuarios = await Usuario.find({})
        return res.status(200).send({
            usuarios
        })
    },
    getUsuario : async (req, res) => {
        let id = req.params.id
        console.log("id", id);
        let usuario = await Usuario.findById({_id: id})
        console.log("usuario:", usuario);
        return res.status(200).send({
            usuario
        })
    }
    ,
    getUsuarioIdentificacion : async (req, res) => {
        let identificacion = req.params.identificacion
        const usuario = await Usuario.findOne({'identificacion': identificacion})
        
        console.log("usuario:", usuario);
        return res.status(200).send({
            usuario
        })
    }
}
module.exports = controller