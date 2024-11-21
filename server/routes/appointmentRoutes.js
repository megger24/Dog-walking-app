import express from 'express'
import appointmentControllers from '../controllers/appointmentControllers.js'


const router = express.Router()

// Add appointment
router.route('/appointments').post(appointmentControllers.addAppointment)
router.route('/appointments/:walkerId').get(appointmentControllers.getAppointment)



export default router

