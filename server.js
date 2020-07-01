const express = require('express') //import express libray
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()  //app define
app.use(cors());

// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001 // define port

//import router
const productRouter = require('./router/productRouter')
const cartRouter = require('./router/cartRouter')
const authenticationRouter = require('./router/AuthenticationRouter')
// const productRouter = require('./router/productRouter')


app.listen(PORT, () =>{
    console.log('server is running on ',{PORT}) //runing application in PORT
    // console.log(express)

})

app.use('/', productRouter)
app.use('/', cartRouter)
app.use('/',authenticationRouter)



