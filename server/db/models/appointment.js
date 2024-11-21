import mongoose, { Types } from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    customer: {
        _id: {
            type: Types.ObjectId
        },
        username: {
            type: String
        },
        email: {
            type: String
        },
    },
    package: {
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    walker: {
        _id: {
            type: Types.ObjectId
        },
        username: {
            type: String
        }
    }


})
const Appointment = mongoose.model("appointment", appointmentSchema)

export default Appointment