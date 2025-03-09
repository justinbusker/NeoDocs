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
				placeholder="Create a new document"
				className="border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				type="text" id="title" />
		<button className="cursor-pointer m-1 border border-gray-300 p-1 rounded">Create</button>
		</form>
	)
}
