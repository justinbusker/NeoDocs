import {useState} from "react"
export default function SearchBar(){

	const [searchterm, setSearchterm] = useState("");
	return(
		<input type="text" id="searchterm"></input>

	)
}
