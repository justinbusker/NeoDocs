const { Server } = require("socket.io");

const io = new Server(3001, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

io.on("connection", socket => {
	console.log("connected to 3001")
})

 
