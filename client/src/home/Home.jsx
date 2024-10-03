import {useState, useContext, useEffect} from 'react'
import '../styling/HomeStyles.css'
import NewDocument from "./NewDocument.jsx"
import DocumentsView from "./DocumentView.jsx"
import Title from './Title'
import {SocketContext} from "../context/socket.js"
import SearchBar from "./Search.jsx"

export default function Home(){

	const [documents, setDocuments] = useState([])
	const socket = useContext(SocketContext)

	useEffect(() => {
		if (socket == null) return

		socket.emit('get-documents')
	}, [socket])

	useEffect(() => {
		if (socket == null) return
		socket.on('pull-documents', docs => {
			console.log(docs)

			setAllDocuments(docs)

		})
	})


	function setAllDocuments(docs){
		console.log(docs)
		setDocuments(docs)
		console.log(documents)
	}

	function updateDocuments(title, id){
		setDocuments((documents) => {
			return [...documents, {id, title}]
		})
	}
	

	return(
		<>
			<Title />
			<SearchBar />
			<NewDocument updateDocuments={updateDocuments} />
			<DocumentsView documents={documents}/>
		</>
	)
}
