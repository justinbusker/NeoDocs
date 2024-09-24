import "../styling/LoginStyle.css";
import {useState} from "react";


export default function Login(){

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	function handleSubmit(e){
		e.preventDefault()
		console.log("submitted form")

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
					<input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
					<button>Login</button>

				</form>
			</div>
			<div className="create-account-button">
				<button>Create Account</button>
			</div>
		</div>
	)
}
