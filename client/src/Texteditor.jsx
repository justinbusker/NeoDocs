import { useCallback, useContext, useEffect, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css"
import {useParams} from 'react-router-dom'
import {SocketContext} from "./context/socket.js"



export default function  Texteditor(){
	const {id} = useParams()
	const [quill, setQuill] = useState()
	const socket = useContext(SocketContext)

	console.log(id)
	
		useEffect(() => {
		if (socket == null || quill == null) return;

			socket.emit('set-document', id)
	})

	useEffect(() => {
		if (socket ==null || quill == null) return;

		socket.on('get-contents', data =>{
			quill.setContents(data)
		})
			
	})

	useEffect(() => {
		if (socket == null || quill == null) return
		
		const interval = setInterval(() => {
			socket.emit('save-document', quill.getContents(), id)
		}, 1000);
		
		return () => {
			clearInterval(interval)
		};
		
	}, [id, quill, socket])

	useEffect(() => {
		if (quill == null) return
		quill.on('text-change', (delta, oldDelta, source) => {
			console.log(quill.getContents())

		})
	}, [quill, socket, id])
	

	const wrapperRef = useCallback(wrapper => {
		if (wrapper == null) return
		wrapper.innerHTML=''
		const editor = document.createElement('div');
		wrapper.append(editor)
		const q = new Quill(editor, {theme : "snow" })
		setQuill(q)
	}, [])
	
	return (<div className="editor" ref={wrapperRef}></div>);
}
