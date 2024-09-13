
import {Link} from 'react-router-dom'

export default function Document({key, id, title}){
	return (
		<Link key={key} to={{
			pathname: `texteditor/${id}`,
			state: { id:{id}, title:{title} },	
		}} >
			<div className="homeDocument">
				<p className="doc-title">{title}</p>
			</div>
		</Link>
	)
}
