import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link} from 'react-router-dom';
import './mainPage.css';
import Header from "./header";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Front = ()=>{

    return (
        <div id="body">
            <Header/>
            {/* middle */}

            <h2 id="heading1">Welcome to the world of clubs!!</h2>
            <div id="logo"><img src="https://img.collegedekhocdn.com/media/img/institute/logo/cu_logo.png"></img></div>

        </div>
    )
}

export default Front;