import Cart from "../db/models/cart.js"

const cartControllers = {
    addCart : (req, res) => {
        console.log(req.body)
        let { cart,cardname, cardnumber, expmonth, expyear, cvv } = req.body
        let data = {
            cart,cardname, cardnumber, expmonth, expyear, cvv
        }
        let newCart = new Cart(data)
        newCart.save()
            .then(() => {
                Cart.find()
                .then((cart)=> {
                 res.json(cart)
                })
                .catch(err=> console.log(err))
            })
            .catch(err=> console.log(err))
    },



}
export default cartControllers