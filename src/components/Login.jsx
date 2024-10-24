import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "vaibhav@gmail.com", password: "vaibhav@123" });

  const handleLoginClick = async () => {
    console.log(loginData)
     const body ={
      emailId:loginData.email,
      password:loginData.password
     }
    // call login APi 
    axios.post("http://localhost:3001/login", body,
      { withCredentials: true }

    ).then((res)=>{
      console.log("res==",res)
    })
  }
  return (
    <div className='flex justify-center mt-20'>
      <div className="card bg-neutral text-neutral-content w-96" >
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-3">Login!</h2>
          <input
            className="input input-bordered w-full max-w-xs m-2"
            type="email"
            value={loginData.email}
            placeholder="Email Id"
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
          <input
            className="input input-bordered w-full max-w-xs m-2"
            type="password"
            value={loginData.password}
            placeholder="Password"
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary"
              onClick={handleLoginClick}
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login