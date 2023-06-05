import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Home = ()=>{
    const navigate = useNavigate();
 const data =  localStorage.getItem('myInfo')
//  console.log(data, "saved data");
//  console.log(data.fname)
const object = JSON.parse(data);
console.log(object.userData.fname, "mynartmy");



const fun = ()=>{
   
    localStorage.removeItem('myInfo');
    console.log("dhishfkawei")
    navigate('/login')
}



    return (
        <div>
            <h1>hello!! , {object.userData.fname}</h1>
            <button onClick={fun}>Clear Data</button>
        </div>
    )
}

export default Home;