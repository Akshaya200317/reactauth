
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Config'

const Login = () => {
    const [user, setuser] = useState([])
    const [pass, setpass] = useState([])

    const navigate = useNavigate()

    const loginfunc = () => {
        signInWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("loggedin")
                navigate('/landing')
            })
            .catch(() => console.log("failed to login"))
    }

    return (
        <div>
            <h1>Login:</h1>
            <input onChange={(e) => { setuser(e.target.value) }}></input>
            <input onChange={(e) => { setpass(e.target.value) }}></input>
            <button onClick={loginfunc}>Login</button>
            <p>If you dont have an account signup here:<Link to={'/signup'}>Signup</Link></p>
        </div>
    )
}

export default Login