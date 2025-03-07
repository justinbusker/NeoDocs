import mongoose from 'mongoose'
import Document from './Document.js'

const {Schema, model} = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	documents: []
})

const User = model('user', userSchema)

export default User;
