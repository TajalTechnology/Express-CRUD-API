/ importing packages /
const jwt = require('jsonwebtoken');


module.exports = {

    Auth: (req, res, next) => {
        try {
            let header = req.headers['authorization']
            console.log('Header',header)

            let token = header.split(' ')
            console.log('Token',token)

            const SECRET_KEY = 'RANDOM_SECRET_KEY'
            jwt.verify(token[1], SECRET_KEY, function (err, decoded) {
                console.log('JWT PAYLOADS: ', decoded)
                if (!err) {
                    req.user = decoded
                    next()
                }
            })
        }
        catch (e) {
            return res.status(403).json({
                "message": "Access Denied"
            })
        }

    }// Auth
}