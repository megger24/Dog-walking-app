import LocalStrategy from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import User from '../db/models/user.js'
import bcryptjs from 'bcryptjs'
import 'dotenv/config'


const strategy = (passport) => {
    passport.use('login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, (username, password, done) => {
        console.log("login", username, password, done)
        User.findOne({ username })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'incorrect username or password' })
                }
                if (!bcryptjs.compareSync(password, user.password)) {
                    return done(null, false, { message: 'incorrect username or password' })
                }
                else {
                    return done(null, user)
                }
            }).catch(err => done(err))
    })),

       


        passport.use('register', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, (req, username, password, done) => {
            // console.log("req: ", req, "username:", username, "password:", password, "done:", done)
            let { firstname, lastname, email } = req.body
            console.log(req.body)
            User.findOne({ $or: [{ username }, { email }] })
                .then((foundUser) => {
                    console.log("foundUser", foundUser)
                    if (foundUser) {
                        if (foundUser.username === username && foundUser.email === email) {
                            
                            return done(null, false, { message: 'Username or Email is already taken' })
                        }
                        else if (foundUser.username === username) {
                          
                            return done(null, false, { message: 'Username  is already taken' })
                        }
                        else if (foundUser.email === email) {
                            
                            return done(null, false, { message: 'Email is already taken' })
    
                        }
                    }
                    else {
                        const hash = bcryptjs.hashSync(password, 10)
                        let userData = { firstname, lastname, email, username, password: hash }
                        let newUser = new User(userData)
                        newUser.save()
                            .then((user) => done(null, user, { message: 'Registration Successful' }))
                            .catch((err) => {
                                console.log(err)
                                done(err)
                            })
                    }
    
                })
        }))



    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromBodyField('token'),
        secretOrKey: process.env.JWT_SECRET
    }, (jwt_payload, done) => {
        User.findById(jwt_payload.id).then((user) => {
            if (user) {
                console.log('success')
                return done(null, user)
            }
        }).catch(err => done(err, false))
    }))

    passport.serializeUser((user, done) => {
        console.log('serialize: ', user)
        return done(null, user._id)
    })

    passport.deserializeUser((_id, done) => {
        User.findById(_id).then(user => {
            console.log('deserialize: ', user)
            return done(null, user)
        }).catch(err => console.log(err));
    })
}
export default strategy

