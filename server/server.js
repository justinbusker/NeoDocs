import {Server} from 'socket.io'
import mongoose from 'mongoose'
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
})

 
