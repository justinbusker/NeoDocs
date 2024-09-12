import { useState } from 'react'
import Texteditor from './Texteditor.jsx'
import DocumentView from './home/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./home/Home.jsx"



function App() {

  return (
    <>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
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
