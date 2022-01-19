'use strict'
const Car = require ('../app/models/car')

const responseCar = {
    success:{
        code: Number,
        status: String,
        message: String,
        car: {
            type: Car
        }
    },
    successAll:{
        code: Number,
        status: String,
        cars: [{
            type: Car
        }]
    },
    failed:{
        code: Number,
        status: String,
        message: String,
    }
}

module.exports = responseCar