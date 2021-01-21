const express = require('express')
const cors = require('cors')
const route = require('./src/routes/index')
const { sequelize } = require('./config/database')
const app = express()
const morgan = require('morgan')

// permiso para peticiones externas
app.use(cors())

//visualiza las petiicones hechas al servidor
app.use(morgan('dev'));

//permito que el servidor reciba peticiones JSON a traves de post
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use( '/api',route )

//conexion a la base de datos

// puerto de conneccion
const PORT = process.env.PORT || 4000

app.listen( PORT, ()=>{
    console.log('server port ',PORT)
})