import {Routes, Route, Link} from 'react-router-dom'
import Texteditor from '../Texteditor.jsx'
import '../styling/HomeStyles.css'
import Document from "./Document.jsx"
export default function DocumentsView({documents}){
	return(
		<>
				{	
				documents.map(document => {
					const {id, title} = document
					return (
						<Document id={id} title={title}/>
					)
				})
		}
		</>
		

	)
}
