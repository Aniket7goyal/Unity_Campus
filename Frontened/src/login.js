import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './login.css'

const Login = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        email : '',
        password : '' 
    })

    const fun2=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,[name]:value
        })
        console.log(data)
    
        // console.log(e.target.value)
    }

    const handleChange = ()=>{

        fetch('http://localhost:3001/login',{
            method : "POST",
            headers : {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            return res.json();
        }).then((resData)=>{
            console.log(resData, "resData");

            localStorage.setItem('myInfo',JSON.stringify(resData.data))
            navigate('/home');
        }).catch((err)=>{
            console.log(err, "err");
        })
        
    }

    return (    
        <div id='body1'>
            <div id='loginForm' action=''>
            <h1 className='heading'>Login to your account</h1>
            <input type='text' className = 'entry' id='username' onChange = {fun2} placeholder = "email" name='email' value={data.email}></input>
            <br></br>
            <input type='password' className = 'entry' id = 'password' onChange = {fun2} placeholder = "password" name='password' value={data.password}></input>  
            <br></br>  

            <Link to='/club'><button id = 'login' onClick={handleChange}>submit</button></Link>
            <Link id='toSignup' to = '/Signup'> Signup</Link>

            </div>
        </div>
    )
    
}

export default Login;