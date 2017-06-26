import sql from 'mssql'
import _ from 'lodash'
import { config } from '../config'

export const MasterProvince = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterProvince")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterAmphur = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterAmphur")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterDistrict = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterDistrict")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterSourceType = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterSourceType")
        })
        .then(result => {
            let response = []
            _.mapKeys(_.groupBy(result.recordset, "GroupSourceCode"), (value, key) => {
                response.push({
                    GroupSourceCode: key,
                    GroupSourceName: value[0].GroupSourceName,
                    SourceItem: _.map(value, item => {
                        return {
                            SourceTypeCode: item.SourceTypeCode,
                            SourceTypeName: item.SourceTypeName,
                            SourceTypeDigit: item.SourceTypeDigit.trim()
                        }
                    })
                })
            })
            res.json(response)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterChannelType = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterChannelType")
        })
        .then(result => {
            let response = []
            _.mapKeys(_.groupBy(result.recordset, "GroupChannelCode"), (value, key) => {
                response.push({
                    ChannelTypeCode: key,
                    GroupChannelName: value[0].GroupChannelName,
                    ChannelItem: _.map(value, item => {
                        return {
                            ChannelTypeCode: item.ChannelTypeCode,
                            ChannelTypeName: item.ChannelTypeName
                        }
                    })
                })
            })
            res.json(response)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterBusinessType = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterBusinessType")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterInterestingProduct = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterInterestingProduct")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterOpportunityCustomer = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterOpportunityCustomer")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterPresentProductType = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterPresentProductType")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterBusinessPrefix = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterBusinessPrefix")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterAppointmentReason = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterAppointmentReason")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterPrefix = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterPrefix")
        })
        .then(result => {
            res.json(result.recordset)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

export const MasterBranchTemporary = (req, res) => {
    const pool = new sql.ConnectionPool(config.SQL_MASTER_CONFIG).connect()
        .then(pool => {
            return pool.request()
                .execute("sp_GetMasterBranch")
        })
        .then(result => {
            res.json(result.recordsets)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}