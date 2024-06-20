// import Toggler from "./toggler";
// import Logo from "./logo"
// import NavMenu from "./navmenu";
// import SearchBar from "./searchbar";
// import RegistrationButton from "./registrationbutton";
// import searchIcon from "./searchIcon";

import "./header.css"
import Image from '../../assets/Logo.png'
function Header() {
    return (
        <>
            <div className="mobilenav">
                <div className="logo">
                    <a href="#">
                        <img src={Image} alt="Kreativan Technologies" />
                    </a>
                </div>
                <div className="menubar">
                    <div className="searchbutton">
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </div>
                    </div>
                    <div className="togglermobile">
                        <div className="toggler">
                            <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
                                    fillRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="navtoggle" style={{ cursor: "pointer" }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div >
            <div className="sidebar menu">
                <div className="close button"></div>
                <div className="sidebar icon">
                </div>
            </div>

            <header id="navbar" className="mobile-mode navigation">

                <div className="toggler-logo-container">

                    <div className="toggler">
                        <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
                                fillRule="evenodd" />
                        </svg>
                    </div>
                    <div className="logo">
                        <a href="#">
                            <img width="60px" height="20px" src={Image} alt="Kreativan Technologies" />
                        </a>
                    </div>
                </div>
                <div className="mobilenavclosebutton close butn">
                </div>

                <nav>
                    <ul className="nav-items nav-menu">
                        <li className="nav-item active selectednavmenu">
                            <a href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item ser">
                            <a href="#">SERVICES</a>
                            <div className="services-menu">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>Web</span>
                                            <span>Development/Designing</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">App Development</a>
                                    </li>
                                    <li>
                                        <a href="#">Digital Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#">Content Writing</a>
                                    </li>
                                    <li>
                                        <a href="#">UI/UX Designing</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#">TRAINING</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">PLACEMENT DRIVE</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">CONTACT US</a>
                        </li>
                    </ul>
                </nav>

                <div className="search-and-form">
                    <div className="searchbar">
                        <div></div>
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </div>
                        <div className="search-input">
                            <form>
                                <input placeholder="Type Your Search..." type="text" name="search" id="SearchInput" />
                            </form>
                        </div>
                        <div className="close butn search-bar" >
                        </div>
                    </div>

                    <div className="search-icon">
                        <button className="search butn"></button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>
                    <div className="registration-form-button">
                        <a href="#">registration form</a>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;