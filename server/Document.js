
import mongoose from 'mongoose'

const {Schema, model} = mongoose;

const documentSchema = new Schema({
	id: String,
	title: String,
	data: {},
})

const Document = model('document', documentSchema)

export default Document;
