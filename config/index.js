export const config = {
    SECRET_KEY: 'P@ssw0rd1234',
    MONGO_ENDPOINT: 'mongodb://TC001PCIS1P/users',
    MONGO_OPTIONS: {
        user: 'sa',
        pass: 'P@ssw0rd1234',
        auth: {
            authdb: 'admin'
        }
    },
    API_PORT: 5555,
    GRAPHQL_PORT: 8081,
    AD_CONFIG: {
        url: 'ldap://172.17.9.24',
        baseDN: 'dc=domain,dc=com'
    },
    SQL_MASTER_CONFIG: {
        user: "sa",
        password: "P@ssw0rd1234",
        server: "TC001PCIS1P",
        database: "PCIS_Master"
    }
}

export const configAccessHeader = (req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'x-access-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}