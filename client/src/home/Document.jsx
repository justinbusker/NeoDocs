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
		<ul>
			<button onClick={() => deleteDocument(id)}>X</button>
			<Link key={key} to={{
				pathname: `texteditor/${id}`,
				state: { itemData },	
			}} >
				<div className="homeDocument">
					<p className="doc-title">{title}</p>
				</div>
			</Link>
		</ul>
	)
}
