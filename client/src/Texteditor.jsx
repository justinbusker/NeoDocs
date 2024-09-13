import { useCallback, useEffect, useState } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client'


export default function  Texteditor(){

	const [socket, setSocket] = useState()
	const [quill, setQuill] = useState()
	


	useEffect(() => {
	const socket = io("http://localhost:3001")
		setSocket(socket)

		return () => {
			socket.disconnect()
		}
	}, [])

	useEffect(() => {
		if (socket == null || quill == null) return
		

		const interval = setInterval(() => {
			console.log("saved")
		}, 2000);
		
		return () => {
			clearInterval(interval)
		};
		
	}, [quill, socket])

	useEffect(() => {
		if (quill == null) return
		quill.on('text-change', (delta, oldDelta, source) => {
			console.log(quill.getContents())
		})
	}, [quill])
	

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
