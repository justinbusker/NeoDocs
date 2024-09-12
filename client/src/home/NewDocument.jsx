import {useState} from 'react'
export default function NewDocument({updateDocuments}){
	const [title, setTitle] = useState("")

	function handleSubmit(e){
		e.preventDefault()
		if (title === "") return

		updateDocuments(title)

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
