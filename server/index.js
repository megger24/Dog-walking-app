import express from 'express'
import cors from 'cors'
import dbConnect from './db/index.js'
import config from './config.js'
import auth from './passport/index.js'

import appRoutes from './routes/appRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'

const app = express()
app.use(cors(config.corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
auth(app)
app.use(appRoutes)
app.use(appointmentRoutes)

dbConnect(app)