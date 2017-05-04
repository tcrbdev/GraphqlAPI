import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean
})

const UserModel = mongoose.model('User', UserSchema)

export { UserModel }