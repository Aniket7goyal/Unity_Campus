import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link} from 'react-router-dom';
import './mainPage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = ()=>{



    return (
        <div>

            {/* FOOTER */}

            <footer className="page-footer font-small cyan darken-3 footer">
            <div className="container footer">
                <div className="row">
                <div className="col-md-12 py-5">
                    <div className="mb-5 flex-center icons">
                    <a className="fb-ic facbook">
                        <i className="fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">facebook</i>
                    </a>
                    <a className="tw-ic">
                        <i className="fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">Twitter</i>
                    </a>
                    <a className="li-ic">
                        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">linkedin </i>
                    </a>
                    <a className="ins-ic">
                        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> instagram</i>
                    </a>
                    <a className="pin-ic">
                        <i className="fab fa-pinterest fa-lg white-text fa-2x">pinterest </i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
            </div>
            </footer>
        </div>
    )
}

export default Footer;