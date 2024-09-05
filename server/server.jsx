const { Server } = require("socket.io");

const io = new Server(3001, {
	cors: {
		origin: "http://localhost:5173"
		methods: ["GET", "POST"],
	},
});

io.on("connection", socket => {
	console.log("connected to port 3001")

})

io.listen(3001);
 
