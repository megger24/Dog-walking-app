import jwt from 'jsonWebtoken'
import passport from 'passport'
import Appointment from '../db/models/appointment.js'
import 'dotenv/config'

const isValidDateString = (datestring) => {
    const parsed_Date = new Date(datestring);
    return (parsed_Date.toISOString().slice(0,10) == datestring) && !isNaN(parsed_Date)
  }

const appointmentControllers = {
    addAppointment: async (req, res) => {
        console.log('addAppointment', req.body)
        let { start, end } = req.body
        console.log(typeof start, isValidDateString(start), typeof end, isValidDateString(end))
        // If request is valid
        // if ((start && isValidDateString(start)) && (end && isValidDateString(end))) {
        //     const appt = Appointment.create(req.body)
        //     res.status(200).json({ message: 'Appointment created successfully', data: appt })
        // }
        // // If request is not valid
        // else {
        //     res.status(200).json({ message: 'Request is not valid' })
        // }
        try {
            const appt = await Appointment.create(req.body)
            res.status(200).json({ message: 'Appointment created successfully', data: appt })
        }
        catch (err) {
            console.log(err)
            res.status(200).json({ message: 'Request is not valid' })
        }



    },
    getAppointment: async (req, res) => {
        try {
            const appointment = await Appointment.find({ 'walker._id': req.params.walkerId })
            res.status(200).json(appointment)
        }
        catch(err) {
            console.log(err)
            res.status(200).json({ message: 'There was a problem.' })
        }
    }

}


export default appointmentControllers



















