import {Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Texteditor from '../Texteditor.jsx'
import '../styling/HomeStyles.css'
import NewDocument from "./NewDocument.jsx"
import DocumentsView from "./DocumentView.jsx"
import {io} from 'socket.io-client'

export default function Home({}){

	const [socket, setSocket] = useState()
	const [documents, setDocuments] = useState([])

	useEffect(() => {
	const socket = io("http://localhost:3001")
		setSocket(socket)

		return () => {
			socket.disconnect()
		}
	}, [])

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
	}, [socket])


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
			<NewDocument updateDocuments={updateDocuments} />
			<DocumentsView documents={documents}/>
		</>
	)
}
