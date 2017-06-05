import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import sql from 'mssql'

import jwt from 'jsonwebtoken'
import { UserModel } from './models/user'
import middleware from './middleware'
import { config, configAccessHeader } from './config'
import md5 from 'md5'

import {
    MasterProvince,
    MasterAmphur,
    MasterDistrict,
    MasterSourceType,
    MasterChannelType
} from './Master'

const app = express()
const apiRoutes = express.Router()

// app.set('trust proxy', '127.0.0.1');

app.set('skey', config.SECRET_KEY)

app.use(configAccessHeader)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))
app.use('/api/', apiRoutes)

apiRoutes.use(middleware(app, jwt))

app.get('/master/province', MasterProvince)
app.get('/master/amphur', MasterAmphur)
app.get('/master/district', MasterDistrict)
app.get('/master/sourcetype', MasterSourceType)
app.get('/master/channeltype', MasterChannelType)

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
            if (md5(user.password) != req.body.password) {
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


app.listen(config.API_PORT, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(`listen on port ${config.API_PORT}`)
    }
})
