import mongoose from 'mongoose'


const CartSchema = new mongoose.Schema({
    cart: {
        type: {},

    },
    cardname: {
        type: String,
    
    },
    cardnumber: {
        type: String
    },

    expmonth: {
        type: String
    },
    expyear: {
        type: String,

    },
    cvv: {
        type: String
    },
})
const Cart = mongoose.model("Cart", CartSchema)

export default Cart