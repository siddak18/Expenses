import React, { useContext, useState } from 'react'
import '../css/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom'
import { validate } from '../api/apis';
let usename="";
const Login = () => {
  const [view,setview]=useState(false);
  const navigate=useNavigate();
  const handelclick=()=>{
    setview(!view);
  }
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const handelchange=(e)=>{
    const name=e.target.name;
    switch(name){
        case "username1":
        setusername(e.target.value);
        break;
        case "password1":
        setpassword(e.target.value);
        break;
        default:
        return null;
    }
  }

  const submit=async()=>{
    const user={
         username:username.toLowerCase(),
         password:password
    };
    //console.log(user);
    
    if(username.length==0||password.length==0){
        alert("Please fill all the fields");
    }else{
      const res= await validate(user);
      if(res!=="notthere"&&res!=="notmatch"){
        usename=username;
        navigate(`/home/${res}`, { state: { usename: username } });
      }
     
    }
    setusername("");
    setpassword("");

  }
  return (
    <div className='login'>
      <div className='head1'>
      Sign in
      </div>
      <div className='head2'>
      sign in to manage your finances !!
      </div>
      <div className='inpu'>
      <input type="text" placeholder='username' required='true' onChange={handelchange} name='username1' value={username}/>
      <div>
      <div className='input'>
      <input type={view?'text':'password'} placeholder='password' onChange={handelchange} name='password1' value={password}/>
      <p className='icons' onClick={handelclick}>
        <FontAwesomeIcon icon={ view? faEye:faEyeSlash}></FontAwesomeIcon>
      </p>
      </div>
      <Link to="/signup" className='switch'>sign up</Link> 
      </div>
      <button onClick={submit}>Login</button>
      </div>
      <div className='login-bottom'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="112"  viewBox="0 0 1280 111" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L53 4.17052C107 8.34104 213 16.6821 320 30.7977C427 45.2341 533 65.7659 640 69.9364C747 74.1069 853 61.5954 960 57.7457C1067 53.5751 1173 57.7457 1227 59.6705L1280 61.5954V111H1227C1173 111 1067 111 960 111C853 111 747 111 640 111C533 111 427 111 320 111C213 111 107 111 53 111H0V0Z" fill="#20DF7F" fill-opacity="0.09"/>
      </svg>
      </div>
      <div className='login-bottom'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="112" viewBox="0 0 1280 111" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 44.4L42.6667 53.28C85.3333 62.16 170.667 79.92 256 75.48C341.333 71.04 426.667 44.4 512 26.64C597.333 8.88 682.667 0 768 0C853.333 0 938.667 8.88 1024 24.42C1109.33 39.96 1194.67 62.16 1237.33 73.26L1280 84.36V111H1237.33C1194.67 111 1109.33 111 1024 111C938.667 111 853.333 111 768 111C682.667 111 597.333 111 512 111C426.667 111 341.333 111 256 111C170.667 111 85.3333 111 42.6667 111H0V44.4Z" fill="#E5E5E5" fill-opacity="0.13"/>
      </svg>
      </div>
    </div>
  )
}

export default Login
export {usename}