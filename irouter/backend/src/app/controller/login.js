'use strict'
const User = require('../models/user')
const { db } = require('../models/user')
const responseLogin = require('../../response/login')

let controllerLogin = {
    signIn:async(req, res)=>{
        //console.log(req.body);
        await db.collection('user').findOne({'usuario': req.body.usuario}, (err, user) => {
            if(err){
                console.log(err);
            }else{
                if(!user){
                    responseLogin.success = {
                        code: 404,
                        status: "FAILED",
                        message: "Usuario no registrado",
                        usuario: null
                    }
                    return res.status(200).send(responseLogin.success)
                }
                if(user.password != req.body.password){
                    responseLogin.success = {
                        code: 200,
                        status: "FAILED",
                        message: "Contraseña incorrecta",
                        usuario: null
                    }
                    return res.status(200).send(responseLogin.success)
                }
                else{
                    responseLogin.success = {
                        code: 200,
                        status: "OK",
                        message: "Bienvenido",
                        usuario: user
                    }
                    return res.status(200).send(responseLogin.success)
                }
            }
        })

    },
}

module.exports = controllerLogin
