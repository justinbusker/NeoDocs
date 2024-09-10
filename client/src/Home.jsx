import {Routes, Route, Link} from 'react-router-dom'
import Texteditor from './Texteditor.jsx'
import './HomeStyles.css'
export default function DocumentsView({documents}){
	return(
		<>
				{	
				documents.map(document => {
					const {id, title} = document
					return (
						<Link key={id} to={`texteditor/${id}`} >
							<div className="homeDocument">
								<p>{title}</p>
							</div>
						</Link>
					)
				})
		}
		</>
		

	)
}
