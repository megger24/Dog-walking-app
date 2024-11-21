import 'dotenv/config'
import jwt from 'jsonWebtoken'
import passport from 'passport'
import User from '../db/models/user.js'

const appControllers = {
    register: (req, res) => {

        passport.authenticate('register', (err, user, info) => {
            console.log(err, user, info)
            const response = { isAuth: false }
            if (err) {
                response.err = err
                res.status(500).json(response)
            }
            if (!user) {
                response.info = info
                return res.status(200).json(response)
            }

            else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
                response.token = token
                response.auth = true
                response.userInfo = user
                return res.status(200).json(response)

            }
        })(req, res)

    },

    login: (req, res) => {
        console.log(req.body)
        passport.authenticate('login', (err, user, info) => {
            const response = { isAuth: false }
            if (err) {
                response.err = err
                res.status(500).json(response)
            }
            if (!user) {
                response.info = info
                return res.status(200).json(response)
            }
            else {
                req.login(user, (err) => {
                    if (err) {
                        return res.status(500).json(err)
                    }
                    else {
                        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
                        response.token = token
                        response.auth = true
                        response.userInfo = user
                        return res.status(200).json(response)
                    }
                })
            }
        })(req, res)
    },
    validateAuth: (req, res) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                console.log(err)
                return res.status(401).json({ auth: false, message: "an error has occurred" })
            }
            if (!user) {
                return res.status(401).json({ auth: false, message: "Unauthorized" })
            }
            else {
                return res.status(200).json({ auth: true, userInfo: { id: user._id, username: user.username, email: user.email } })
            }
        })(req, res)
    },

    getWalkers: async (req, res) => {
        const walkers = await User.find({ type: "walker" })
        res.status(200).json(walkers)
    }

}


export default appControllers



















