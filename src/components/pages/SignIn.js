import React from 'react';
import { Link } from 'react-router-dom'

import { useState } from "react"
import '../../App.css';
import axios from "axios";
import './Signin.css';


export default function SignIn() {
  const [username,setusername] = useState(null)
  
  const eventhandler = async () => {
    const results = await axios.get(`/.netlify/functions/getAuthentication?username=${username}`)
    const account = Object.values(results)[0]
    console.log(account)
    }
  return (
    <div className="base">
    <div className="base-container">
      <h1 className='title'>Netro login</h1>
      <div className="login">
        <div className="content">
          <div className="form">
            <div className="fromGroup">
              <input className="input" type="text" name="sername" placeholder="Username" onChange={e => setusername(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="footer">
        <Link to='/account' className='btn-mobile'>
          <button 
            onClick={ () => { eventhandler()}} className="btn">
            Login
           </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  )
}