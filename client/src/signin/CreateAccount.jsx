import "../styling/LoginStyle.css";
import {useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {SocketContext} from "../context/socket.js"


export default function CreateAccount(){

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [text, setText] = useState("")

	const socket = useContext(SocketContext)

	function handleSubmit(e){
		e.preventDefault()
		console.log("submitted form")

		if (username.length < 4)
			setText("Please enter a valid username/password!")

		if (password.length < 6)
			console.log("password not long enough")

		setUsername("")
		setPassword("")

		socket.emit('create-user')
	}

	return (
		<div className="login-box">
			<div className="title">
				<h1>NeoDocs</h1>
				<h2>Create Account</h2>
			</div>
			<div className="login-form">

				<form onSubmit={handleSubmit}>
					<h3>Username</h3>
					<input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)}></input>
					<h3>Password</h3>
					<input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
					<button>Create New Account</button>
					<p>{text}</p>

				</form>
			</div>
			<div className="create-account-button">
				<Link to="/login">
					<button>Go to Login</button>
				</Link>
			</div>
		</div>
	)
}
