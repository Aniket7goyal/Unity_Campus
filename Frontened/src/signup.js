import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';


const Signup = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        fname : '',
        lname : '',
        email : '',
        password : ''
    })
    const fun1=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,[name]:value
        })
        console.log(data)

        // console.log(e.target.value)

    }

    const handleChange = ()=>{
        console.log('skdugfugifg')

        fetch('http://localhost:3001/register' , {
            method : "POST",
            headers : {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(()=>{
            console.log("chal gya");
            navigate('/login')
        }).catch((err)=>{
            console.log(err, "err");
        })
    }
    return (    
        <div id='body2'>
            <div id='signupForm'>
                <h1 className='heading'>Signup to your account</h1>
                <input className='entry' type='text'  onChange={fun1} placeholder = "firstName" name='fname' value={data.fname}></input>
                <br></br>
                <input className='entry' type='text' onChange={fun1} placeholder = "lastName" name='lname' value={data.lname}></input>  
                <br></br>
                <input className='entry' type='text' onChange={fun1} placeholder = "email" name='email' value={data.email}></input> 
                <br></br> 
                <input className='entry' type='password' onChange={fun1} placeholder = "password" name='password' value={data.password}></input>    
                <br></br>
                <button id = 'signup' onClick={handleChange}>submit</button>
                <Link id='toLogin' to = '/'> Login</Link>
            </div>
        </div>
    )
    
}

export default Signup;