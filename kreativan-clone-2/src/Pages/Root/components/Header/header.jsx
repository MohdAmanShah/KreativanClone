import { useEffect } from 'react';
import LogoImage from '../../../../../public/Logo.png'
import './header.css';
import {Link } from "react-router-dom"



export function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img width="60px" height="20px" src={LogoImage} alt="Kreativan Technologies" />
            </Link>
        </div>
    )
}


export function Toggler() {

    function handlertogglerclick() {
        document.documentElement.style.setProperty('--sidebar-position', '0%');
    }


    return (
        <div className="toggler" onClick={() => { handlertogglerclick() }}>
            <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
                    fillRule="evenodd" />
            </svg>
        </div>
    );
}


export function Services() {
    return (
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
    );
}

export function NavMenu() {

    return (
        <ul className="nav-items nav-menu">
            <li className="nav-item active selectednavmenu">
                <Link to="/">HOME</Link>
            </li>
            <li className="nav-item">
                <Link to="aboutus">ABOUT US</Link>
            </li>
            <li className="nav-item ser">
                <Link to="services">SERVICES</Link>
                <Services></Services>
            </li>
            <li className="nav-item">
                <a href="#">TRAINING</a>
            </li>
            <li className="nav-item">
                <a href="#">PLACEMENT DRIVE</a>
            </li>
        </ul>
    );
}

export function SearchIcon() {
    function searchclickhandler() {
        document.documentElement.style.setProperty("--searchbar-position", '0%');
    }
    return (
        <div className="search-icon">
            <button onClick={() => { searchclickhandler() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"} fill="currentColor"
                    className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </div>
    );
}


export function RegistrationButton() {
    return (
        <div className="registration-form-button">
            <a href="#">registration form</a>
        </div>
    )
}
function handlemenuclose() {
    document.documentElement.style.setProperty('--mobile-menu-position', '100%');
}
export function CloseButton() {

    function handlesearchclose() {
        document.documentElement.style.setProperty("--searchbar-position", '-100%');
    }

    return (
        <div className="close butn search-bar" onClick={() => { handlesearchclose() }}>
        </div>
    );
}


export function SearchBar() {

    return (
        <div className="searchbar">
            <div></div>
            <SearchIcon></SearchIcon>
            <div className="search-input">
                <form>
                    <input placeholder="Type Your Search..." type="text" name="search" id="SearchInput" />
                </form>
            </div>
            <CloseButton></CloseButton>
        </div>
    );
}

export function Hamburger() {

    function handlerhamrburgerclick() {
        document.documentElement.style.setProperty('--mobile-menu-position', '0%');
    }

    return (
        <div className="navtoggle" onClick={() => { handlerhamrburgerclick(); }}>
            <span></span>
            <span></span>
            <span></span>
        </div >
    );
}

export function Sidebar() {

    function handlersiderbarclose() {
        document.documentElement.style.setProperty('--sidebar-position', '-100%');
    }
    return (
        <div className="sidebar menu">
            <div className="close button" onClick={() => { handlersiderbarclose() }}></div>
            <div className="sidebar icon">
            </div>
        </div>
    );
}

function Header() {

    useEffect(() => {
        const navBarLinks = document.querySelectorAll('.nav-item > a');
        const ServicesMenuOptions = document.querySelectorAll('.services-menu>ul>li')
        const navItems = document.querySelectorAll(".nav-item");
        const Nav = document.querySelector("header");
        const App = document.getElementById('root');

        let time = 70;
        let delay = 0;
        Array.from(ServicesMenuOptions).forEach(item => {
            item.style.transition = `opacity ${time}ms ease-in ${delay}ms`;
            delay += time;
        })


        window.addEventListener('scroll', () => {
            let Bounds = App.getBoundingClientRect();
            if (Math.abs(Bounds.top) > window.innerHeight * .75) {
                Nav.style.top = "0";
            }
            if (Math.abs(Bounds.top) < window.innerHeight * .25) {
                Nav.style.top = "-500px";
            }
        })


        Array.from(navBarLinks).forEach(link => {
            link.addEventListener('click', navButtonHandler);
        })

        function navButtonHandler(event) {
            navItems.forEach(item => {
                item.classList.remove('active');
                item.ne
            })
            event.target.parentElement.classList.add('active');

        }

    })

    return (
        <header>
            <SearchBar></SearchBar>
            <Sidebar></Sidebar>
            <div className='desktop'>
                <div className='togglerwrapper'>
                    <Toggler></Toggler>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavMenu></NavMenu>
                </nav>
                <div className='searchwrapper'>
                    <SearchIcon></SearchIcon>
                    <RegistrationButton></RegistrationButton>
                </div>
            </div>

            <div className='mobile'>
                <div>
                    <Logo></Logo>
                </div>
                <div className='mobilemenu'>
                    <SearchIcon></SearchIcon>
                    <Toggler></Toggler>
                    <Hamburger></Hamburger>
                </div>
                <nav>
                    <div className="close butn search-bar" onClick={() => {
                        handlemenuclose();
                    }}>
                    </div>
                    <div className='menuitems'>
                        <NavMenu></NavMenu>
                    </div>
                    <RegistrationButton></RegistrationButton>
                </nav>
            </div>


        </header>
    )
}
export default Header;