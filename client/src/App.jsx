import Texteditor from './Texteditor.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./home/Home.jsx"
import Login from "./signin/Login.jsx"
import CreateAccount from "./signin/CreateAccount.jsx"
import {socket, SocketContext} from "./context/socket.js"



function App() {
	
  return (
		<>
			<SocketContext.Provider value={socket}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/texteditor/" >
							<Route path=":id" element={<Texteditor />} />
							<Route path="new" element={<Texteditor />} />
						</Route> 
						<Route path="/login/" element={<Login />} />
						<Route path="/createAccount/" element={<CreateAccount />} />
					</Routes>
				</BrowserRouter>
			</SocketContext.Provider>
		</>
  )
}

export default App
