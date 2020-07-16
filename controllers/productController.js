const Product = require('../models').Product
const User = require('../models').User
// const User = require('/../m')
const bcrypt = require('bcrypt');
module.exports = {

    addProduct: (req, res) =>{
        let {name, category,price,quantity} = req.body
        Product.create({name, category,price,quantity}).then(p => console.log({p}))

        return res.status(200).json({
            "product":"okk"
            
        })

    },
    getProduct: (req, res) =>{
      
        Product.findAll({})
        .then(products =>{
                return res.status(200).json({
                    products
                    
                })

            })  
    },


    // / system-1 /
    
    // getProduct: async (req, res) => {
    //     let products = await Product.findAll({})
    //     return res.status(200).json({
    //         products 
    //     })
    // },

    productUpdate: (req, res) =>{
        const id = req.params.id;
        
        Product.update(req.body, {
            
            where: { 
                id: id 
            }
        })
        return res.status(200).json({
            "product":"okkupdate okkk"
            
        })
    }, 
 
    productDelete:  (req, res) => {
        const id = req.params.id;
      
        Product.destroy({
          where: { id: id }
        }
        ).then(p =>{
            return res.status(200).json({
                "product":"delete okkk",
                p
                
            })
        })
    
      }
 
}