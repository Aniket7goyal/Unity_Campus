import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './addRest.css'

const AddRest = () =>{

    const [data, setData] = useState({
        restName : '',
        city : '' 
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

        // fetch('https://localhost:3000/login',{
        //     method : "POST",
        //     headers : {
        //         'Content-type' : 'application/json'
        //     },
        //     body : JSON.stringify(input)
        // }).then((res)=>{
        //     return res.json();
        // }).then((resData)=>{
        //     console.log(resData, "resData");

        //     localStorage.setItem('myInfo', JSON.stringify(resData.data))
        //     Navigate('/home');
        // }).catch((err)=>{
        //     console.log(arr, "err");
        // })
        
    }

    return (    
        <div className='body'>
            <div id='restForm' action=''>
            <h1 className='heading'>Login to your account</h1>
            <input type='text' className = 'entryField' id='restName' onChange = {fun2} placeholder = "Restaurant Name" name='restName' value={data.restName}></input>
            <br></br>
            <input type='text' className = 'entryField' id = 'city' onChange = {fun2} placeholder = "City" name='city' value={data.city}></input>  
            <br></br>  

            <button id = 'addRest' onClick={handleChange}>ADD</button>
            {/* <Link id='toHome' to = '/toHome'> Signup</Link> */}

            </div>
        </div>
    )
    
}

export default AddRest;