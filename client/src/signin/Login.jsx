import "../styling/LoginStyle.css";
import {useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {SocketContext} from "../context/socket.js"


export default function Login(){

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const socket = useContext(SocketContext)

	function handleSubmit(e){
		e.preventDefault()
		console.log("submitted form")

		socket.emit('user-signin', username, password)

		setUsername("")
		setPassword("")
	}

	return (
		<div className="login-box">
			<div className="title">
				<h1>NeoDocs</h1>
				<h2>Sign in</h2>
			</div>
			<div className="login-form">

				<form onSubmit={handleSubmit}>
					<h3>Username</h3>
					<input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)}></input>
					<h3>Password</h3>
					<input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
					<button>Login</button>

				</form>
			</div>
			<div className="create-account-button">
				<Link to="/createAccount">
					<button>Create Account</button>
				</Link>
			</div>
		</div>
	)
}
