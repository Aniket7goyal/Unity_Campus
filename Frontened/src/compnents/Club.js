import React from 'react'
import './Club.css'
import iste from '../../src/compnents/images/iste.png'
import ecell from '../../src/compnents/images/ecell.png'
import iee from '../../src/compnents/images/iee.png'
import acm from '../../src/compnents/images/acm.png'
import C2S2 from '../../src/compnents/images/C2S2.png'
import debsoc from '../../src/compnents/images/debsoc.jpg'
import { Link } from 'react-router-dom'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Image from 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png'

const Club = () => {
  return (
    <React.Fragment>
        <div className="grid-container">
  <div className="grid-item"><img className='image' src={iste} height={180} width={280} borderRadius="10%" /></div>
  <div className="grid-item"><Link to='/ecell'> <img className='image' src={ecell} height={180} width={280} /></Link></div>
  <div className="grid-item"><img className='image' src={iee} height={180} width={280} /></div>  
  <div className="grid-item"><img  className='image'src={acm} height={180} width={280} /></div>
  <div className="grid-item"><Link to='/c2s2'><img className='image' src={C2S2} height={180} width={280} /></Link></div>
  <div className="grid-item"><img className='image' src={debsoc} height={180} width={280} /></div>  
  {/* <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>   */}
</div>

    </React.Fragment>
  )
}

export default Club