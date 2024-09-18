import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../Config'


const Signup = () => {
    const [user, setuser] = useState([])
    const [pass, setpass] = useState([])

    const navigate = useNavigate()


    const signupfunc = () => {
        createUserWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("registered")
                navigate('/')
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h1>Signup:</h1>
            <input onChange={(e) => { setuser(e.target.value) }}></input>
            <input onChange={(e) => { setpass(e.target.value) }}></input>
            <button onClick={signupfunc}>Signup</button>
            <p>If already have an account login here: <Link to={'/'}>Login</Link></p>
        </div>
    )
}

export default Signup