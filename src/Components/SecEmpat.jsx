import React from 'react'
import '../Style/SecEmpat.css'

function SecEmpat() {
    return (
        <>
        <div className="section4">
            <div className="section4-container">
                <div className="header-section4">
                    <h2>Utility pages</h2>
                    <p>Take a look at the utility pages included in the Brandingfolio X Template.</p>
                </div>
                <div className='card-section4'>
                    <div className='card4'>
                        <img src="404.png" alt="" />
                        <div>
                            <p>404 Not found</p>
                        </div>
                    </div>
                    <div className='card4'>
                        <img src="Passwrod.png" alt="" />
                        <div>
                            <p>Password protected</p>
                        </div>
                    </div>
                </div>
                <div className='btn-section4'>
                    <button>Buy template</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default SecEmpat;