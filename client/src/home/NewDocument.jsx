import {useState, useEffect} from 'react'
import {io} from 'socket.io-client'

export default function NewDocument({updateDocuments}){

	const [title, setTitle] = useState("")
	const [socket, setSocket] = useState()

	useEffect(() => {
	const socket = io("http://localhost:3001")
		setSocket(socket)

		return () => {
			socket.disconnect()
		}
	}, [])

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
