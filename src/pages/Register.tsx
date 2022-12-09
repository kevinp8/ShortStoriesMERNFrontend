import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e: any) {
    e.preventDefault();
    const response = await fetch("https://tired-gaiters-worm.cyclic.app/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data:{status:string; error?:string} = await response.json();
    if (data.status === "ok") {
      window.location.replace("/login");
    } else{
      alert('email already in use')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) window.location.replace('/publicStories')
  }, [])

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Display Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
