import { useCallback, useEffect } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client'


export default function  Texteditor(){

	useEffect(() => {
	const socket = io("http://localhost:3001")

		return () => {
			socket.disconnect()
		}
	}, [])
	

	const wrapperRef = useCallback(wrapper => {
		if (wrapper == null) return
		wrapper.innerHTML=''
		const editor = document.createElement('div');
		wrapper.append(editor)
		new Quill(editor, {theme : "snow" })
	}, [])
	
	return (<div className="editor" ref={wrapperRef}></div>);
}
