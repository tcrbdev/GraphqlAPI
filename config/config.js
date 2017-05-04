const config = {
    SECRET_KEY: 'P@ssw0rd1234',
    MONGO_ENDPOINT: 'mongodb://TC001PCIS1P/users',
    MONGO_OPTIONS: {
        user: 'sa',
        pass: 'P@ssw0rd1234',
        auth: {
            authdb: 'admin'
        }
    },
    API_PORT: 8080,
    GRAPHQL_PORT: 8081
}

export default config