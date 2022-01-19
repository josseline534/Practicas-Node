'use strict'

// modules
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

const db = require('./config/dataBase')
const routes = require('./app/routes')

// settings
let app = express()
app.set('port', process.env.PORT || 3000)
let port = app.get('port')

// middleware
app.use(morgan('dev')) // sms (respuestas del servidor) por consola
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false})) // procesar datos
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(session({
    secret:'sdxcfvgbhuinjokm',
    resave:true,
    saveUninitialized: true
}))
app.use(passport.initialize()) // autenticación
app.use(passport.session()) // guarda la sesión

// routes
app.use('/carRouter', routes)


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