'use strict'
const Car = require('../models/car')
const responseCar = require('../../response/car')

let controllerCar = {
    create: async(req, res)=>{
        let params = req.body
        if(params.codigo!="" && params.modelo!="" && params.color!="" && params.anio>0 && params.precio!=""){
            let car = new Car()
            car.codigo = params.codigo
            car.modelo = params.modelo
            car.color = params.color
            car.anio = params.anio
            car.precio = params.precio
            car.save((err, carStored) => {
                if(err || !carStored){
                    responseCar.failed = {
                        code: 400,
                        status: "failed",
                        message: "Ocurrio un error a guardar el vehículo"
                    }
                    return res.status(404).send(responseCar.failed)
                }else{
                    responseCar.success = {
                        code: 200,
                        status: "success",
                        message: "Vehiculo guardado correctamente",
                        car: carStored
                    }
                    return res.status(200).send(responseCar.success)
                }
            })
        }
        else{
            responseCar.failed = {
                code: 400,
                status: "failed",
                message: "Faltan datos por ingresar"
            }
            return res.status(400).send(responseCar.failed)
        }
    },
    getCars: async(req, res)=>{
        let cars = await Car.find()
        responseCar.successAll = {
            code: 200,
            status: "success",
            car: cars
        }
        return res.status(200).send(responseCar.successAll)
    },
    getCar: async (req, res)=>{
        let idCar = req.params.id
        console.log(idCar);
        Car.findById(idCar, (err,car)=>{
            if(err || !car){
                responseCar.failed = {
                    code: 400,
                    status: "failed",
                    message: "Ocurrio un error al obtener el vehículo"
                }
                return res.status(404).send(responseCar.failed)
            }
            responseCar.success = {
                code: 200,
                status: "success",
                message: "Vehiculo para actualizar",
                car: car
            }
            return res.status(200).send(responseCar.success)
        })
    },
    update: async(req, res)=>{
        let idCar = req.params.id
        let params = req.body
        if(params.codigo!="" && params.modelo!="" && params.color!="" && params.anio>0 && params.precio!=""){
            Car.findOneAndUpdate({_id:idCar},params,{new:true},(err, carUpdate)=>{
                console.log();
                if(err || !carUpdate){
                    responseCar.failed = {
                        code: 400,
                        status: "failed",
                        message: "Ocurrio un error al actualizar el vehículo"
                    }
                    return res.status(404).send(responseCar.failed)
                }
                responseCar.success = {
                    code: 200,
                    status: "success",
                    message: "Vehículo actualizado correctamente",
                    car:carUpdate
                }
                return res.status(200).send(responseCar.success)
            })
        }else{
            responseCar.failed = {
                code: 400,
                status: "failed",
                message: "Faltan datos por ingresar"
            }
            return res.status(400).send(responseCar.failed)
        }
    },
    delete: async(req, res)=>{
        let idCar= req.params.id
        Car.findOneAndDelete({_id: idCar},(err, carDelete)=>{
            if(err || !carDelete){
                responseCar.failed = {
                    code: 400,
                    status: "failed",
                    message: "Ocurrio un error al eliminar el vehículo"
                }
                return res.status(404).send(responseCar.failed)
            }
            responseCar.success = {
                code: 200,
                status: "success",
                message: "Vehículo eliminado correctamente",
                car:carDelete
            }
            return res.status(200).send(responseCar.success)
        })
    }
}

module.exports = controllerCar