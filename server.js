const express = require('express') //import express libray
var bodyParser = require('body-parser')

const app = express()  //app define

// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000 // define port

const authRouter = require('./router/authRouter')
const postRouter = require('./router/postRouter')

app.listen(PORT, () =>{
    console.log('server is running on ',{PORT}) //runing application in PORT
    // console.log(express)

})

app.use('/auth', authRouter)
app.use('/api', postRouter)

// app.get('/', (req, res, next) =>{
//     res.send('Helllo')
// })


