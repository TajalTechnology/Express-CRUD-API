const express = require('express') //import express libray
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()  //app define
app.use(cors());
// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001 // define port

const authRouter = require('./router/authRouter')
const postRouter = require('./router/postRouter')
const cartRouter = require('./router/cartRouter')

app.listen(PORT, () =>{
    console.log('server is running on ',{PORT}) //runing application in PORT
    // console.log(express)

})

app.use('/auth', authRouter)
// / Configurar cabeceras y cors Access-Control-Allow-Origin: http://localhost:3000

app.use('/api', postRouter)
app.use('/', cartRouter)



