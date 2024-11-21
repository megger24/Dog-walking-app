import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    firstName: {
        type: String
    },

    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
     password: {
        type: String
    },
    
    package: {
        type: String
    },
    type: {
        type: String
    }
})
const User = mongoose.model("user", userSchema)

export default User