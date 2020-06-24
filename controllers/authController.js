const Product = require('./../models').Product
const User = require('./../models').User
const bcrypt = require('bcrypt');
module.exports = {
    register : (req, res) =>{
        return res.status(200).json({
            name:"get req"
        })
    },
    update : (req, res) =>{
        let old = req.body.old_password
        let newp = req.body.new_password
        
        return res.status(200).json({
            name:"post req",
            old,
            newp,
            
        })
    },
    addProduct: (req, res) =>{
        let {name, price,image} = req.body
        Product.create({name, price,image}).then(p => console.log({p}))

        return res.status(200).json({
            "product":"okk"
            
        })

    },
    getProduct: (req, res) =>{
        Product.findAll({"id":1})
        .then(products =>{
                return res.status(200).json({
                    products
                    
                })

            })  
    },

    // productUpdate: (req, res) => {
    //     const id = req.params.id;
      
    //     Product.update(req.body, {
    //       where: { id: id }
    //     })
    //       .then(num => {
    //         if (num == 1) {
    //           res.send({
    //             message: "Product was updated successfully."
    //           });
    //         } else {
    //           res.send({
    //             message: `Cannot update Product with id=${id}. Maybe Tutorial was not found or req.body is empty!`
    //           });
    //         }
    //       })
    //       .catch(err => {
    //         res.status(500).send({
    //           message: "Error updating Product with id=" + id
    //         });
    //       });
    //   }


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
    registration: (req, res) =>{
        let {username, password,firstName,lastName,email} = req.body

        let hash=bcrypt.hashSync('password', 10, function(err, hash) {
            // Store hash in database
          });
        User.create({username, password:hash,firstName,lastName,email}).then(p => {
            return res.status(200).json({
                "product":"okk"
                
            })

        }
            )

       

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
       
        //   .then(num => {
        //     if (num == 1) {
        //       res.send({
        //         message: "Tutorial was deleted successfully!"
        //       });
        //     } else {
        //       res.send({
        //         message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        //       });
        //     }
        //   })
        //   .catch(err => {
        //     res.status(500).send({
        //       message: "Could not delete Tutorial with id=" + id
        //     });
        //   });
      }
    // productDelete: (req, res) =>{
    //     const id = req.params.id; 
    //     Product.destroy(req.body, {
            
    //         where: { 
                
    //             id: id 
    //         }
    //     })
    //     return res.status(200).json({
    //         "product":"delete ok"
            
    //     })
    // }
}