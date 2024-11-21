import 'dotenv/config'
import MongoStore from 'connect-mongo'
const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    corsConfig: {
    origin:'http://localhost:3000',
    optionSuccessStatus: 200,
    Credential: true
    },
    sessionConfig: {
        secret: process.env.SESSION_SECRET,
        resave:true,
        saveUninitialized:true,
        cookie: {secure:false},
        key: 'express.sid',
        store: MongoStore.create({mongoUrl:process.env.MONGO_URI})

    }

}
export default config