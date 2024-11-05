
import Document from "./Document.jsx"
export default function DocumentsView({documents, filter}){
	return(
		<>
				{
				documents.map(document => {
					const {id, title} = document
					return (
						<Document key={id} id={id} title={title}/>
					)
				})
		}
		</>
	)
}
