import 'dotenv/config'
console.log(process.env)
import {Server} from 'socket.io'
import mongoose from 'mongoose'
import Document from './Document.js'
import User from './User.js'

const dbUsername = process.env.PRIVATE_USER
const dbPassword = process.env.PRIVATE_PASSWORD

mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@neodocs.bac4o.mongodb.net/?retryWrites=true&w=majority&appName=NeoDocs`)

const io = new Server(3001, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});



io.on("connection", socket => {
	console.log("connected to 3001")

	//****** DOCUMENTS ******//
	socket.on("new-document", async (title, id) => {
		const document = new Document({
			title: title,
			id: id,
			data: {}
		})

		await document.save();
		
	})

	socket.on('get-documents', async (searchTerm) =>{
		const term = searchTerm ? {title: {$regex: new RegExp(searchTerm, 'i')}} : {};
		const documents = await Document.find(term)
		console.log(documents)

		socket.emit('pull-documents', documents)
	})

	socket.on('save-document', async (contents, id) => {
		const doc = await Document.findOne({id: id})
		doc.data = contents;
		await doc.save()
	})


	socket.on('set-document', async (id) => {
		const doc = await Document.findOne({id: id})
		socket.emit('get-contents', doc.data)
	})

	socket.on('delete-document', async (id) => {
		Document.deleteOne({id: id}).then((result) => {
		})
	})

	//****** USERS ******//
	socket.on('create-user', async(username, password) => {
		console.log("got socket emission for create user")
		const user = new User ({
			username: username,
			password: password,
			documents: []
		})

		await user.save();
	})

	socket.on('user-signin', async(username, password)=>{
		const user = await User.findOne({username: username})
		if (user) {
			if (user.password === password) console.log('password correct')
			console.log(`Found user ${user.username}`)
		} else {
			console.log(`Could not find user ${username}`)
		}
		console.log("got socket emission for user signin")
	})
	
})

 
