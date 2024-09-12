import { useState } from 'react'
import Texteditor from './Texteditor.jsx'
import DocumentView from './home/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const documents = [
	{id : 1, title: "test note"},
	{id : 2, title: "iphone "},
	{id : 3, title: "new note"},
	{id : 4, title: "untitled"},
]

function App() {

  return (
    <>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DocumentView documents={documents}/>} />
					<Route path="/texteditor/" >
						<Route path=":id" element={<Texteditor />} />
						<Route path="new" element={<Texteditor />} />
					</Route> 
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
