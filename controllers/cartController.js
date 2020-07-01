const Product = require('./../models').Product
const User = require('./../models').User
const Cart = require('./../models').Cart

module.exports = {
    addToCart: (req, res, next) => {
        let { product_id, name, quantity, price } = req.body
        let { id } = req.user
        let user_id = id

        Cart.findOne({ where: { user_id: user_id } })
            .then(cart => {
                if (cart) {
                    const cart_object = JSON.parse(cart.product)
                    let products = cart_object.products
                    // console.log(16,{products})
                    

                    for (i = 0; i < products.length; i++) {
                        // const cart_object = JSON.parse(cart.product)
                        // let products = cart_object.products
                        console.log(16,{products}) 
                        if (products[i].product_id === product_id) {
                            console.log(20,{products})
                            if (quantity < 1) {
                                products.splice(i, 1)
                                let cart_string = JSON.stringify(cart_object)
                                cart.update({ product: cart_string })
                                .then(cart => {
                                    return res.status(200).json({
                                        "message": "updated from quantity",
                                        "cart": cart
                                    })
                                }).catch(error => { return res.status(400).json({ "error": error }) })
                                
                            }//if{update complete when qty==0}
                        }// if
                        // else{
                        //     const found = products.some(el => el.product_id === product_id)
                        //     if (!found) products.push({ product_id, name, quantity, price })
                        //     // console.log(41)
                        //     products.includes()
                        //     cart_object.products.push({product_id, name, quantity, price})
                        //     let cart_string = JSON.stringify(cart_object)
                        //     console.log(43,cart_string)
                        //     cart.update({ product: cart_string })
                        //     .then(cart => {
                        //         return res.status(200).json({
                        //             "message": "updated",
                        //             "cart": cart
                        //         })
                        //     }).catch(error => { return res.status(400).json({ "error": error }) })

                        // }
                    }// for
 
                    const found = products.some(el => el.product_id === product_id)
                    if (!found) products.push({ product_id, name, quantity, price })

                    products.includes()

                    cart_object.products.push({product_id, name, quantity, price})

                    console.log(41)
                    let cart_string = JSON.stringify(cart_object)
                    console.log(43,cart_string)

                    cart.update({ product: cart_string })
                        .then(cart => {
                            return res.status(200).json({
                                "message": "updated",
                                "cart": cart
                            })
                        }).catch(error => { return res.status(400).json({ "error": error }) })
                }// if

                else {
                    let carts = {}
                    let products = []

                    products.push({ product_id, name, quantity, price })
                    carts.products = products

                    let cart_str_obj = JSON.stringify(carts)

                    Cart.create({ user_id: user_id, product: cart_str_obj })
                        .then(new_cart => {
                            return res.status(400).json({
                                "message": "created",
                                "cart": new_cart
                            })
                        }).catch(error => { return res.status(400).json({ "error": error }) })
                }// else

            }).catch(error => {
                return res.status(400).json({ "error": error })
            })
    },// addToCart

    // addToCart: (req, res) => {
    //     let {user_id, product_id} = req.body

    //     Cart.findOne({where: {user_id: user_id}})
    //         .then(cart => {
    //             // cart = true
    //             if (cart) {
    //                 cart.update({product_id: cart.product_id + ',' + product_id})
    //                     .then(cart => {
    //                         return res.status(200).json({
    //                             "message": "updated",
    //                             "cart": cart
    //                         })
    //                     })// then
    //             }// if
    //             else {
    //                 Cart.create({user_id: user_id, product_id: product_id})
    //                     .then(cart => {
    //                         return res.status(201).json({
    //                             "message": "created",
    //                             "cart": cart
    //                         })
    //                     })// then
    //             }// else

    //         }).catch(error => {return res.status(400).json({"error": error})
    //     })
    // },// addToCart

    // // addToCartArray: (req, res) => {
    // //     let {product_id, name, quantity, price} = req.body
    // //     let {id} = req.user
    // //     let user_id = id

    // //     Cart.findOne({where: {user_id: user_id}})
    // //         .then(cart => {
    // //             if (cart) {
    // //                 const cart_object = JSON.parse(cart.product)
    // //                 cart_object.products.push({product_id, name, quantity, price})

    // //                 let cart_string = JSON.stringify(cart_object)

    // //                 cart.update({product: cart_string})
    // //                     .then(cart => {
    // //                         return res.status(200).json({
    // //                             "message": "updated",
    // //                             "cart": cart
    // //                         })
    // //                     }).catch(error => {return res.status(400).json({"error": error})})
    // //             }// if

    // //             else {
    // //                 let carts = {}
    // //                 let products = []
    // //                 products.push({product_id, name, quantity, price})
    // //                 carts.products = products
    // //                 let cart_str_obj = JSON.stringify(carts)

    // //                 Cart.create({user_id: user_id, product: cart_str_obj})
    // //                     .then(new_cart => {
    // //                         return res.status(400).json({
    // //                             "message": "created",
    // //                             "cart": new_cart
    // //                         })
    // //                     }).catch(error => {return res.status(400).json({"error": error})})
    // //             }// else

    // //         }).catch(error => {return res.status(400).json({"error": error})
    // //     })
    // // },// addToCart



    // addToCartArray: (req, res) => {
    //     let {p_id, name, quantity, price} = req.body
    //     //cart checking
    //     let {id} = req.user
    //     let user_id = id

    //     // console.log({product_id, name, quantity, price})
    //     // console.log({user_id})
    //     let carts = {}
    //     let products = []

    //     products.push({p_id, name, quantity, price})
    //     // console.log(products, products.length)

    //     // prototype
    //     carts.products = products
    //     // console.log({carts})

    //     // obj = Str (save DB)
    //     const carts_str = JSON.stringify(carts);
    //     // console.log(carts_str)

    //     Cart.create({user_id: user_id, product_id: carts_str})
    //         .then(cart => {
    //             return res.status(201).json({
    //                 "message": "created",
    //                 "cart": cart
    //             })
    //         })

    // },



    // cartUpdate: (req, res) => {
    //     if (req.method === "PUT") {
    //         const id = req.params.id



    //     }// if-end
    //     if (req.method === "POST") {
    //         let { user_id, product_id } = req.body;

    //         Cart.create({ user_id, product_id })
    //             .then(cart => {
    //                 return res.status(201).json({
    //                     "cart": " cart added!"

    //                 })

    //             })

    //     }//if

    // },// cartUpdate


    /*
   router.get('/cart/:id', cartController.cartGet)
   router.get('/cart', cartController.cartGet)
   */
    cartGet: async (req, res) => {
        /* GET */
        if (req.method === "GET") {

            /* single cart */
            if (req.params.id) {
                let id = req.params.id
                Cart.findOne({ where: { id: id } })
                    .then(data => {
                        return res.status(200).json({
                            data
                        })
                    })
            }// if

            /* all cart */
            else {
                Cart.findAll({})
                    .then(data => {
                        return res.status(200).json({
                            data
                        })
                    }
                    )
            }// else
        }// if
    },// cartGet

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