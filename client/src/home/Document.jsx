
import {Link} from 'react-router-dom'

export default function Document({key, id, title}){

	const itemData = {id:id, title:title}

	return (
		<Link key={key} to={{
			pathname: `texteditor/${id}`,
			state: { itemData },	
		}} >
			<div className="homeDocument">
				<p className="doc-title">{title}</p>
			</div>
		</Link>
	)
}
