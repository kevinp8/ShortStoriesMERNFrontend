import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';

type Props = {};

const Login = (props: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function loginUser(e: any){
      e.preventDefault()
      const response = await fetch("https://tired-gaiters-worm.cyclic.app/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await response.json()
      if(data.user){
        localStorage.setItem('token', data.user)
        window.location.href = '/dashboard'
      } else{
        alert('Please check your username and/or password')
      }
    }

    useEffect(() => {
      if (localStorage.getItem('token')) window.location.replace('/publicStories')
    }, [])
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
}

export default Login