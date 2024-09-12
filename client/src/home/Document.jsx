
import {Link} from 'react-router-dom'

export default function Document({key, id, title}){
	return (
		<Link key={key} to={`texteditor/${id}`} >
			<div className="homeDocument">
				<p className="doc-title">{title}</p>
			</div>
		</Link>
	)
}
