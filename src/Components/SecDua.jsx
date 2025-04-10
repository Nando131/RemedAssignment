import React from 'react'
import '../Style/SecDua.css'

function SecDua() {
  return (
    <>
    <div className='section2'>
        <div className='section2-container'>    
            <div className='section2-content'>
                <div className='Header-section2'>
                    <h2>What is included in <br/>Brandingfolio X</h2>
                    <p><strong>Brandingfolio X Webflow</strong> Template includes over <strong>19 pages</strong> <br/>in total, with more than <strong>35 sections.</strong></p>
                </div>
                <div className='grid-section2'>
                    <div className='card-section2'>
                        <img src="/Card1.png" alt="" className='img-section2'/>
                        <div className='text-card'>
                            <p> 19+ Pages</p>
                        </div>
                    </div>
                    <div className='card-section2'>
                        <img src="/Card2.png" alt="" className='img-section2'/>
                        <div className='text-card'>
                            <p> 35+ Sections</p>
                        </div>
                    </div>
                    <div className='card-section2'>
                        <img src="/Card3.png" alt="" className='img-section2'/>
                        <div className='text-card'>
                            <p> 25 Styles & Symbols</p>
                        </div>
                    </div>
                </div>
                <div className='figma'>
                    <div className='text-figma'>
                        <div className='logo-figma'>
                            <img src="/FigmaLogo.svg" alt="" />
                        </div>
                        <div className='Header-figma'>
                            <h3>Figma file included</h3>
                        </div>
                        <div className='text-figma'>
                            <p>Send us an email to <br/> <a href="#">brandingfoliox@brixtemplates.com</a> with your <br/> purchase receipt, and we will send you the editable <br/>Figma file for the Brandingfolio X template.</p>
                        </div>
                        <div className='btn-figma'>
                            <button>Request figma file</button>
                        </div>
                    </div>
                    <div className='img-figma'>
                        <img src="/Figma.png" alt="" />
                    </div>
                </div>
                <div className='layer2'>
                    <img src="/Layer2.png" alt="" />
                    <div className='layer2-content'>
                        <img src="Logo2.svg" alt="" />
                        <h3>Looking for more <br/> amazing Webflow <br/> Templates??</h3>
                        <p>Take a look at our collection of 100+ <br/> premium Webflow Templates at BRIX <br/> Templates.</p>
                        <button>Browse tempaltes</button>
                    </div>
                </div>
                <div className='button-layer2'>
                    <button>Buy template</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SecDua;