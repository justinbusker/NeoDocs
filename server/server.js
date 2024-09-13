import {Server} from 'socket.io'
import mongoose from 'mongoose'
import Document from './Document.js'
const uri = "mongodb+srv://jtbusker:Curbgames25@neodocs.bac4o.mongodb.net/?retryWrites=true&w=majority&appName=NeoDocs";


mongoose.connect("mongodb+srv://jtbusker:Curbgames25@neodocs.bac4o.mongodb.net/?retryWrites=true&w=majority&appName=NeoDocs")

const io = new Server(3001, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

io.on("connection", socket => {
	console.log("connected to 3001")

	socket.on("new-document", async (title, id) => {
		const document = new Document({
			title: title,
			id: id,
			data: {}
		})

		await document.save();
		
	})


	socket.on('get-documents', async () =>{
		const documents = await Document.find()
		console.log(documents)

		socket.emit('pull-documents', documents)
	})

	socket.on('save-document', async (contents, id) => {
		const doc = await Document.findOne({id: id})
		doc.data = contents;
		await doc.save()
		console.log(doc.data)
	})


	socket.on('set-document', async (id) => {
		const doc = await Document.findOne({id: id})
		socket.emit('get-contents', doc.data)
	})

})

 
