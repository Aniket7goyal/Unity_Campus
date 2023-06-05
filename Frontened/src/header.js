import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link} from 'react-router-dom';
import './mainPage.css';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';


const Header = ()=>{

const data=localStorage.getItem('myInfo')
const fdata = JSON.parse(data);
console.log(data)


    return (

        <div>
            
            {/* HEADER */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li id="minLogo" className="nav-link">
                    <img src="https://img.collegedekhocdn.com/media/img/institute/logo/cu_logo.png"></img>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link"  to = '/'> Home</Link>
                </li>
                <li className="nav-item">
                 {fdata?<h4>hello!! , {fdata.userData.fname}</h4>:<Link className="nav-link " to = '/login'>Login</Link>} 
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to = '/AboutUs'> About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-disabled to = '/AddClub'> Add Club</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Header;