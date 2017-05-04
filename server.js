import config from './config/config'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import casual from 'casual'

import jwt from 'jsonwebtoken'
import { UserModel } from './models/user'
import middleware from './middleware'

const app = express()
const apiRoutes = express.Router()

mongoose.Promise = bluebird
const mongo = mongoose.connect(config.MONGO_ENDPOINT, config.MONGO_OPTIONS, (err, result) => {
    if (err)
        console.log(err)
})

app.set('skey', config.SECRET_KEY)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))
app.use('/api/', apiRoutes)

apiRoutes.use(middleware(app, jwt))

apiRoutes.get('/', (req, res) => {
    res.json({ message: 'Test API RUNNING..' })
})

apiRoutes.get('/users', (req, res) => {
    UserModel.find({}, (err, users) => {
        res.json(users)
    })
})

apiRoutes.post('/authenticate', (req, res) => {
    UserModel.findOne({
        name: req.body.name
    }, (err, user) => {
        if (err) throw err

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            })
        }
        else {
            if (user.password != req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                })
            }
            else {

                const token = jwt.sign(user, app.get('skey'), {
                    expiresIn: 60 * 60 * 24
                })

                res.json({
                    success: true,
                    message: "Authentication success. that's your token key",
                    token: token
                })
            }
        }
    })
})

apiRoutes.get('/setup', (req, res) => {
    const first_name = casual.first_name
    const user = new UserModel({
        name: first_name,
        password: 'password',
        admin: true
    })

    user.save(err => {
        if (err)
            console.log("New user error")

        console.log(`New user ${first_name} success.`)
        res.json({ success: true })
    })
})


app.listen(config.API_PORT, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(`listen on port ${config.API_PORT}`)
    }
})
