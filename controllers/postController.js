module.exports = {

    get_controller : (req, res) =>{
        res.status(200).json({
            "Name":" Get request",
            "type":"Blog",
            "division":"Mirpur",
        })
    },

    post_controller: (req, res) =>{
        res.status(200).json({
            "Name":"Post Request",
            "type":"Blog",
            "division":"Mirpur",

        })
    },
    
    put_controller: (req, res) =>{
        res.status(200).json({
            "Name":"Update Request",
            "type":"Blog",
            "division":"Mirpur",

        })
    },

    delete_controller: (req, res) =>{
        res.status(200).json({
            "Name":"Delete Request",
            "type":"Blog",
            "division":"Mirpur",

        })
    }

}
