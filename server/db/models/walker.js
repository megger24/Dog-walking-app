import mongoose from 'mongoose'

const walkerSchema = new mongoose.Schema({
  
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
   
     password: {
        type: String
    },
    schedule: [
        {
            day: {
                type: Date
            },
            start: {
                type: Date
            },
            end: {
                type: Date
            }
        }
    ]
})
const Walker = mongoose.model("walker", walkerSchema)

export default Walker