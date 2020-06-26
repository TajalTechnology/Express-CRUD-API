// const Product = require('./../models').Product
// const User = require('./../models').User
const Cart = require('./../models').Cart

module.exports = {

    addToCart: (req, res) => {
        let { user_id, product_id } = req.body;

        Cart.findOne({ where: { user_id: user_id } })
            .then(cart => {
                if (cart) {
                    console.log("13",{ cart })
                    let product_ids = cart.dataValues.product_id
                    product_ids = product_ids.split(',')
                    product_ids = product_ids.push(product_id)

                    product_ids = product_ids.join(',')
                    console.log("19",{ product_ids })

                    Cart.update({ product_id: product_ids }, {where: { user_id: user_id }})
                        .then(cart => {
                            return res.status(200).json({
                                "cart": cart
                            })
                        })
                }//if

                else {
                    Cart.create({ user_id, product_id })
                        .then(cart => {
                            return res.status(200).json({
                                "cart": " cart added!"

                            })

                        })

                }
            }).catch(error => {
                return res.status(400).json({ "error": error })
            })





    },

    //     cartUpdate: (req, res) => {
    //         const id = req.params.id;

    //         // let { email, password } = req.body
    //         Cart.findOne({ where: { id: id } })
    //             .then(cart => {
    //                 if (cart) {
    //                     Cart.update(req.body)
    //                         .then(cart => {
    //                             return res.status(200).json({
    //                                 "cart": "okkupdate okkk"
    //                             })
    //                         })


    //                 }//if

    //                 else {
    //                     return res.status(200).json({
    //                         "data": {
    //                             "message": "password doesn't match",
    //                             "type": "ok",
    //                         }
    //                     })
    //                 }// else

    //             }// if

    //                 else {
    //         return res.status(200).json({
    //             "data": {
    //                 "message": "email not matched",
    //                 "type": "ok",
    //             }
    //         })
    //     }// else

    // })}     


    cartUpdate: (req, res) => {
        if (req.method === "PUT") {
            const id = req.params.id



        }// if-end
        if (req.method === "POST") {
            let { user_id, product_id } = req.body;

            Cart.create({ user_id, product_id })
                .then(cart => {
                    return res.status(201).json({
                        "cart": " cart added!"

                    })

                })

        }//if

    },// cartUpdate


    cartGet: (req, res) => {
        const id = req.params.id;

        Cart.findOne({
            where: {
                id: id
            }
        })
            .then(cart => {
                return res.status(200).json({
                    cart

                })

            })
    },

    cartDelete: (req, res) => {
        const id = req.params.id;

        Cart.destroy({
            where: { id: id }
        }
        ).then(p => {
            return res.status(200).json({
                "product": "delete okkk",
                p

            })
        })
    }
}