'use strict'
const express = require('express')
const mongoose = require('mongoose')
let bodyParser = require("body-parser")

const db = require('./config/dataBase')
const routes = require('./app/routes/routes')

// Ejecutar express
let app = express()

//Middlewares procesa datos antes de cargar ruta
app.use(bodyParser.urlencoded({extended:false})) //carga el body-parser
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', process.env.PORT || 3000)
let port = app.get('port')

// routes
app.use('/api', routes)

// conection

mongoose.connect(db.url, db.options)
.then((req, res) =>{
    console.log("conection Database success");
    app.listen(port, (req, res)=>{
        console.log(`Escuchando en http://localhost:${port}`);
    })
})
.catch((error) =>{
    console.error(error);
})