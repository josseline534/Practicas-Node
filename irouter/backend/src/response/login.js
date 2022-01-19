'use strict'
const User = require ('../app/models/user')

const responseLogin = {
    success:{
        code: Number,
        status: String,
        message: String,
        usuario: {
            type: User
        }
    }
}

module.exports = responseLogin