import React from 'react'
import '../Style/SecSatu.css'


function SecSatu() {
  return (
    <div className='body-container'>
      <div className='body-content'>
        <h1>Brandingfolio X <br/>Webflow Template</h1>
        <p>Presenting Brandingfolio X, the ultimate Branding Agency Webflow Template.</p>


      </div>

      <div className='image-wrapper'>
        <div className='image-container'>
          <img className='image-border' src="/Image1.png" alt="" />
          <img className='image-border' src="/Image2.png" alt="" />
          <img className='image-border' src="/Image3.png" alt="" />
        </div>
        <div className='image-container'>
          <img className='image-border' src="/Image4.png" alt="" />
          <img className='image-border' src="/Image5.png" alt="" />
          <img className='image-border' src="/Image6.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SecSatu;