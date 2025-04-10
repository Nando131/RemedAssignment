import { useState } from 'react'
import '../Style/Header.css'
function Header() {
    const [showPopup, setShowPopup] = useState(false)


  return (
    <>
    <div className='header'>
        <div className="container-header">
            <div className="header-container">
                <div className='left-side'>
                    <div className='logo'>
                        <a href="/">
                            <img src="./Logo.svg" alt="logo" /></a>
                    </div>
                    <nav className='navigate'>
                        <ul className="list-menu">
                            <li className="link-nav">
                                <a href="https://brandingfoliotemplate-showcase.webflow.io/home-pages/home-v1">Home</a>
                            </li>
                            <li className="link-nav">
                                <a href="https://brandingfoliotemplate-showcase.webflow.io/company-pages/about">About</a>
                            </li>
                            <li className="link-nav">
                                <a href="https://brandingfoliotemplate-showcase.webflow.io/blog-pages/blog-v1">Blog</a>
                            </li>
                            <li className="link-nav">
                                <div className='dropdown'>
                                    <div className='dropdown-content' onClick={() => setShowPopup(!showPopup)}>
                                    <div>Pages</div>
                                    <div className='icon'>
                                        <img src="./DropDown.png" alt="Dropdown icon" />
                                    </div>
                                    </div>
                                    {showPopup && (
                                    <div className='popup-overlay' onClick={() => setShowPopup(false)} />
                                    )}
                                    {showPopup && (
                                    <div className='dropdown-popup'>
                                        <div className='main-item'>
                                        <div className='left-item'>
                                            <div className='menu-section'>
                                            <div className='section-title'>Main Pages</div>
                                            <div className='list-left'>
                                                <ul className='list'>
                                                    <li><a href="#">Preview</a></li>
                                                    <li><a href="#">Home V1</a></li>
                                                    <li><a href="#">Home V2</a></li>
                                                    <li><a href="#">Home V3</a></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Blog V1</a></li>
                                                    <li><a href="#">Blog V2</a></li>
                                                    <li><a href="#">Blog V3</a></li>
                                                    <li><a href="#">Blog Spot</a></li>
                                                </ul>
                                                <ul className='list'>
                                                    <li><a href="#">Blog Category</a></li>
                                                    <li><a href="#">Packages</a></li>
                                                    <li><a href="#">Packages single</a></li>
                                                    <li><a href="#">Contact V1</a></li>
                                                    <li><a href="#">Contact V2</a></li>
                                                    <li><a href="#">Contact V3</a></li>
                                                    <li><a href="#">Portfolio</a></li>
                                                    <li><a href="#">Portfolio single</a></li>
                                                    <li><a href="#">Team member</a></li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className='right-item'>
                                            <div className='menu-section'>
                                            <div className='section-title'>Utility pages</div>
                                            <ul className='list'>
                                                <li><a href="#">Style guide</a></li>
                                                <li><a href="#">Start here</a></li>
                                                <li><a href="#">404 Not found</a></li>
                                                <li><a href="#">Password protected</a></li>
                                                <li><a href="#">Licenses</a></li>
                                                <li><a href="#">Changelog</a></li>
                                                <li><a href="#">More Webflow <br/>Tempalate</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="right-side">
                    <div className='cart'>Cart (0)</div>
                    <div><button>Contact us</button></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;