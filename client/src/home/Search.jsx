import {useState, useContext} from "react"
import {SocketContext} from "../context/socket.js"
export default function SearchBar(){

	const [searchterm, setSearchterm] = useState("");
	const socket = useContext(SocketContext)

	function handleSearchTerm (e){}

	return(
		<input type="text" 
			id="searchterm" 
			className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Search"
		onChange = {e => 
				socket.emit('get-documents', e.target.value)
			}
		></input>
	) 
}
