import {useState, useContext,  useEffect} from 'react'
import {SocketContext} from "../context/socket.js"

export default function NewDocument({updateDocuments}){

	const [title, setTitle] = useState("")
	const socket = useContext(SocketContext)

	function handleSubmit(e){
		e.preventDefault()
		if (title === "") return

		const id = crypto.randomUUID();

		updateDocuments(title, id)

		console.log(socket)

		socket.emit("new-document", title, id)


		setTitle("")
	}

	return (
		<form onSubmit={handleSubmit}>
		<input value={title} 
				onChange={e => setTitle(e.target.value)}
				type="text" id="title" />
		<button>Create</button>
		</form>
	)
}
