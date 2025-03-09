import {SocketContext} from "../context/socket.js"
import {useContext} from "react"
import {Link} from 'react-router-dom'

export default function Document({key, id, title}){

	const itemData = {id:id, title:title}
	const socket = useContext(SocketContext)

	function deleteDocument(id){
		socket.emit("delete-document", id)
		socket.emit("get-documents")
	}

	return (
		<ul className="flex items-center p-2 border-b border-gray-200">
			<div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
			<Link key={key} to={{
				pathname: `texteditor/${id}`,
				state: { itemData },	
			}} className="flex-grow">
				<div className="p-2 rounded">
					<p className="text-lg font-semibold">{title}</p>
				</div>
			</Link>
			<button onClick={() => deleteDocument(id)} className="cursor-pointer ml-7 font-bold text-xl text-red-500">X</button>
		</ul>
	)
}
