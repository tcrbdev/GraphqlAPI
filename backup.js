mongoose.Promise = bluebird

const mongo = mongoose.connect(config.MONGO_ENDPOINT, config.MONGO_OPTIONS, (err, result) => {
    if (err)
        console.log(err)
})

apiRoutes.get('/', (req, res) => {
    res.json({ message: 'Test API RUNNING..' })
})

apiRoutes.get('/users', (req, res) => {
    UserModel.find({}, (err, users) => {
        res.json(users)
    })
})

apiRoutes.get(['/bomb', '/bomb/:count'], (req, res) => {
    let api_all = [];
    let count = req.params.count || 100

    for (let i = 0; i < count; i++) {
        api_all.push(request.getAsync('http://TC001PCIS1P:3333/api/users'))
        // api_all.push(request.getAsync('http://TC001PCIS1P:3333/api/setup'))
        // api_all.push(request.getAsync('http://TC001PCIS1P:3333/api/pcis/collectionfooter'))
    }

    bluebird.all(api_all)
        .then((reqResultArray) => {
            res.json({
                transaction: count,
                status: true,
                result: reqResultArray
            })
        }).catch(error => {
            res.json({
                transaction: count,
                status: false,
                error: error
            })
        })

})

apiRoutes.get(['/master/province'], (req, res) => {
    const sqlConfig = {
        user: "sa",
        password: "P@ssw0rd1234",
        server: "TC001PCIS1P",
        database: "PCIS_Master"
    }

    const pool = new sql.ConnectionPool(sqlConfig).connect()
        .then(pool => {
            return pool.request()
                .query("SELECT * FROM MasterProvince")
        })
        .then(result => {
            res.json(result.recordsets)
        })
        .catch(err => {
            console.log(err)
        })
})

apiRoutes.get(['/pcis/collectionfooter', '/pcis/collectionfooter/:empcode', '/pcis/collectionfooter/:empcode/:filter'], (req, res) => {
    const sqlConfig = {
        user: "sa",
        password: "P@ssw0rd1234",
        server: "TC001PCIS1P",
        database: "PCIS"
    }

    const pool = new sql.ConnectionPool(sqlConfig).connect()
        .then(pool => {
            return pool.request()
                .input("EmpCode", sql.NVarChar, req.params.empcode)
                .input("Fliter", sql.NVarChar, req.params.filter)
                .execute("PCIS_COLLECTION_OS")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
        })
})

apiRoutes.get('/branch/owner/:digit', (req, res) => {
    let regionCode = null
    switch (req.params.digit) {
        case 'e':
            regionCode = 'REG002'
            break;
        case 'ne':
            regionCode = 'REG003'
            break;
        case 'c':
            regionCode = 'REG004'
            break;
        case 's':
            regionCode = 'REG006'
            break;
        case 'n':
            regionCode = 'REG007'
            break;
    }

    const sqlConfig = {
        user: "sa",
        password: "P@ssw0rd1234",
        server: "TC001PCIS1P",
        database: "PCIS"
    }

    const origins = ['13.5503070,100.2771750']
    const destinations = ['13.7560243,100.4986793', '13.7726943,100.5099262']

    distance.apiKey = 'AIzaSyAPILiLJ9f3LL_0jZ-ReqaOVp_t7lvCvvY'
    distance.proxyUrl = 'http://t58385:Paoally0702@172.17.9.241:8080'
    // console.log('get')
    // console.log(distance)
    // const api = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=13.5503070,100.2771750&destinations=13.7560243,100.4986793|13.7726943,100.5099262&key=AIzaSyAPILiLJ9f3LL_0jZ-ReqaOVp_t7lvCvvY'
    // const options = {
    //     method: 'GET',
    //     uri: api
    // }

    // rqp(options)
    //     .then(body => {
    //         console.log("Response : ", body)
    //         res.json(body)
    //     })
    //     .catch(err => {
    //         console.log("Error : ", err)
    //         res.json(err)
    //     })
    // rq.get(api, (err, res, body) => {
    //     console.log(err)
    //     console.log(res)
    //     console.log(body)
    // })
    distance.get({
        origins: origins,
        destinations: destinations
    }, (err, distances) => {
        console.log('yeah', err)
        if (!err) {
            console.log(distances)
            res.json(distances)
        }
    })

    // const pool = new sql.ConnectionPool(sqlConfig).connect()
    //     .then(pool => {
    //         return pool.request()
    //             .input("RegionCode", sql.NVarChar, regionCode)
    //             .execute("GetOwnerLocation_Temp")
    //     })
    //     .then(result => {
    //         let items = _.map(result.recordsets[0], item => {
    //             console.log(item)
    //             return item.Lattitude + ',' + item.Longitude
    //         })
    //         console.log(items)

    //         res.json(items.join('|'))
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

})


apiRoutes.get('/pcis/nano', (req, res) => {
    const sqlConfig = {
        user: "sa",
        password: "P@ssw0rd1234",
        server: "TC001PCIS1P",
        database: "PCIS"
    }

    const pool = new sql.ConnectionPool(sqlConfig).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_PCIS_Button_Menu_Nano")
        })
        .then(result => {
            res.json(result.recordsets)
        })
        .catch(err => {
            console.log(err)
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
