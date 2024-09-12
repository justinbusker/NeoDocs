
import {Link} from 'react-router-dom'

export default function Document({id, title}){
	return (
		<Link key={id} to={`texteditor/${id}`} >
			<div className="homeDocument">
				<p className="doc-title">{title}</p>
			</div>
		</Link>
	)
}
