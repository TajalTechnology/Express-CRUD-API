const express = require('express') //import express libray
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()  //app define


// const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:3002/', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });
app.use(cors());
// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001 // define port

const authRouter = require('./router/authRouter')
const postRouter = require('./router/postRouter')

app.listen(PORT, () =>{
    console.log('server is running on ',{PORT}) //runing application in PORT
    // console.log(express)

})

app.use('/auth', authRouter)
// / Configurar cabeceras y cors Access-Control-Allow-Origin: http://localhost:3000

app.use('/api', postRouter)

// app.get('/', (req, res, next) =>{
//     res.send('Helllo')
// })


