import { useCallback, useEffect, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client'
import {useParams} from 'react-router-dom'



export default function  Texteditor(){
	const {id} = useParams()
	const [socket, setSocket] = useState()
	const [quill, setQuill] = useState()
	
	console.log(id)
	


	useEffect(() => {
	const socket = io("http://localhost:3001")
		setSocket(socket)

		return () => {
			socket.disconnect()
		}
	}, [])

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
