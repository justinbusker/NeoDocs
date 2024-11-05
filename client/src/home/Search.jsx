import {useState, useContext} from "react"
import {SocketContext} from "../context/socket.js"
export default function SearchBar(){

	const [searchterm, setSearchterm] = useState("");
	const socket = useContext(SocketContext)

	function handleSearchTerm (e){}

	return(
		<input type="text" id="searchterm"
		onChange = {e => 
				socket.emit('get-documents', e.target.value)
			}
		></input>
	)
}
