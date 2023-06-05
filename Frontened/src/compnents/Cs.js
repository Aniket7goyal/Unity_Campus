import React from 'react'
import './Cs.css'
import custody from '../../src/compnents/images/custody.png'
import dhwani from '../../src/compnents/images/dhwani.png'
import lgs from '../../src/compnents/images/Lgs.png'
import literal from '../../src/compnents/images/literal.png'
import panache from '../../src/compnents/images/panache.png'
import natraj from '../../src/compnents/images/natraj.png'
import natsamrat from '../../src/compnents/images/natsamrat.png'
import reflection from '../../src/compnents/images/reflection.png'
import tasveer from '../../src/compnents/images/tasveer.png'
import tbr from '../../src/compnents/images/Tbr.png'
const Cs = () => {
  return (
    <React.Fragment>
    {/* <h4> jhfuwfgsb jdbu7dstfiefhpsdi</h4> */}
        <div className="grid-container">
  <div className="grid-item"><img className='image' src={custody} height={180} width={280}  /></div>
  <div className="grid-item"><img className='image' src={dhwani} height={180} width={280} /></div>
  <div className="grid-item"><img className='image' src={lgs} height={180} width={280} /></div>  
  <div className="grid-item"><img  className='image'src={literal} height={180} width={280} /></div>
  <div className="grid-item"><img className='image' src={panache} height={180} width={280} /></div>
  <div className="grid-item"><img className='image' src={natraj} height={180} width={280} /></div>  
  <div className="grid-item"><img className='image' src={natsamrat} height={180} width={280} /></div>  
  <div className="grid-item"><img  className='image'src={reflection} height={180} width={280} /></div>
  <div className="grid-item"><img className='image' src={tasveer} height={180} width={280} /></div>
  <div className="grid-item"><img className='image' src={tbr} height={180} width={280} /></div>  
 
</div>

    </React.Fragment>
  )
}

export default Cs