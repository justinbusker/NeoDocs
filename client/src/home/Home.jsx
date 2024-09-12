import {Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import Texteditor from '../Texteditor.jsx'
import '../styling/HomeStyles.css'
import NewDocument from "./NewDocument.jsx"
import DocumentsView from "./DocumentView.jsx"
export default function Home({updateDocuments, documents}){
	
	return(
		<>
			<NewDocument updateDocuments={updateDocuments}/>
			<DocumentsView documents={documents}/>
		</>
	)
}
