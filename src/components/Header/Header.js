
import "./header.css";
import logo from '../../assets/images/sharepassnewlogo.svg';
import whiteLogo from "../../assets/images/sharepass-white-logo.svg";
import { NavLink, useLocation } from 'react-router-dom';
import { useState, Fragment } from "react";

function Header() {

    let arrow = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.34131 0.6875C7.52881 0.520833 7.70589 0.520833 7.87256 0.6875L14.4038 7.25C14.5913 7.41667 14.5913 7.58333 14.4038 7.75L7.87256 14.3125C7.70589 14.4792 7.52881 14.4792 7.34131 14.3125L6.71631 13.6875C6.65381 13.625 6.62256 13.5417 6.62256 13.4375C6.62256 13.3333 6.65381 13.2396 6.71631 13.1562L11.5601 8.3125H0.903809C0.653809 8.3125 0.528809 8.1875 0.528809 7.9375V7.0625C0.528809 6.8125 0.653809 6.6875 0.903809 6.6875H11.5601L6.71631 1.84375C6.54964 1.65625 6.54964 1.47917 6.71631 1.3125L7.34131 0.6875Z" fill="#02F3A2"></path></svg>

    const [status, setStatus] = useState(false);

    const menuToggler = () => {
        setStatus(!status);
    };

    const closeMenu = () => {
        setStatus(false);
    };
    const location = useLocation();

    const currentPath = location.pathname;
    return (
        <Fragment>
            <div className={`header ${status ? 'dark' : ''}`}>
                <div className="header_content">
                    <div className="logo_wrap">
                        <NavLink to="/home">
                            <img src={status ? whiteLogo : logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="nav_wrap">
                        <NavLink to="/home" className={currentPath === '/' ? 'active' : ""}>Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/enterprise">Enterprise</NavLink>
                        <NavLink to="/roadmap">Roadmap</NavLink>
                        {false && <NavLink to="/pricing">Pricing</NavLink>}
                        {false && <NavLink to="/technology">Technology</NavLink>}
                        <a href="/signin" ><button type='button'>Sign in</button></a>
                    </div>
                    <div className={`menu ${status ? 'close' : 'open'}`} onClick={menuToggler} >
                        <div className="l fl"></div>
                        <div className="l cl"></div>
                        <div className="l sl"></div>
                    </div>

                </div>
            </div>
            {status && <div className="small_menu" >
                <svg viewBox="0 0 375 740" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg">
                    <mask
                        id="mobile-line_svg__a"
                        maskUnits="userSpaceOnUse"
                        x={-1114}
                        y={-1}
                        width={1490}
                        height={770}
                        style={{ maskType: "alpha" }}
                    >
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 0h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 0h24v24H15zM-9 24h24v24H-9zM15 24h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 48h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 48h24v24H15zM-9 72h24v24H-9zM15 72h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 96h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 96h24v24H15zM-9 120h24v24H-9zM15 120h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 144h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 144h24v24H15zM-9 168h24v24H-9zM15 168h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 192h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 192h24v24H15zM-9 216h24v24H-9zM15 216h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 240h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 240h24v24H15zM-9 264h24v24H-9zM15 264h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 288h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 288h24v24H15zM-9 312h24v24H-9zM15 312h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 336h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 336h24v24H15zM-9 360h24v24H-9zM15 360h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 384h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 384h24v24H15zM-9 408h24v24H-9zM15 408h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 432h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 432h24v24H15zM-9 456h24v24H-9zM15 456h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 480h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 480h24v24H15zM-9 504h24v24H-9zM15 504h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 528h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 528h24v24H15zM-9 552h24v24H-9zM15 552h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 576h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 576h24v24H15zM-9 600h24v24H-9zM15 600h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 624h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 624h24v24H15zM-9 648h24v24H-9zM15 648h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 672h24v24H-9z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M15 672h24v24H15zM-9 696h24v24H-9zM15 696h24v24H15z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M-9 720h24v24H-9z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M15 720h24v24H15z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 0h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 0h24v24H63zM39 24h24v24H39zM63 24h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 48h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 48h24v24H63zM39 72h24v24H39zM63 72h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 96h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 96h24v24H63zM39 120h24v24H39zM63 120h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 144h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 144h24v24H63zM39 168h24v24H39zM63 168h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 192h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 192h24v24H63zM39 216h24v24H39zM63 216h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 240h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 240h24v24H63zM39 264h24v24H39zM63 264h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 288h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 288h24v24H63zM39 312h24v24H39zM63 312h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 336h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 336h24v24H63zM39 360h24v24H39zM63 360h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 384h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 384h24v24H63zM39 408h24v24H39zM63 408h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 432h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 432h24v24H63zM39 456h24v24H39zM63 456h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 480h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 480h24v24H63zM39 504h24v24H39zM63 504h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 528h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 528h24v24H63zM39 552h24v24H39zM63 552h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 576h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 576h24v24H63zM39 600h24v24H39zM63 600h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 624h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 624h24v24H63zM39 648h24v24H39zM63 648h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 672h24v24H39z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M63 672h24v24H63zM39 696h24v24H39zM63 696h24v24H63z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M39 720h24v24H39z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M63 720h24v24H63z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 0h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 0h24v24h-24zM87 24h24v24H87zM111 24h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 48h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 48h24v24h-24zM87 72h24v24H87zM111 72h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 96h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 96h24v24h-24zM87 120h24v24H87zM111 120h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 144h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 144h24v24h-24zM87 168h24v24H87zM111 168h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 192h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 192h24v24h-24zM87 216h24v24H87zM111 216h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 240h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 240h24v24h-24zM87 264h24v24H87zM111 264h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 288h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 288h24v24h-24zM87 312h24v24H87zM111 312h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 336h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 336h24v24h-24zM87 360h24v24H87zM111 360h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 384h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 384h24v24h-24zM87 408h24v24H87zM111 408h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 432h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 432h24v24h-24zM87 456h24v24H87zM111 456h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 480h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 480h24v24h-24zM87 504h24v24H87zM111 504h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 528h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 528h24v24h-24zM87 552h24v24H87zM111 552h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 576h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 576h24v24h-24zM87 600h24v24H87zM111 600h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 624h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 624h24v24h-24zM87 648h24v24H87zM111 648h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 672h24v24H87z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M111 672h24v24h-24zM87 696h24v24H87zM111 696h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M87 720h24v24H87z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M111 720h24v24h-24z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 0h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 0h24v24h-24zM135 24h24v24h-24zM159 24h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 48h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 48h24v24h-24zM135 72h24v24h-24zM159 72h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 96h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 96h24v24h-24zM135 120h24v24h-24zM159 120h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 144h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 144h24v24h-24zM135 168h24v24h-24zM159 168h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 192h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 192h24v24h-24zM135 216h24v24h-24zM159 216h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 240h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 240h24v24h-24zM135 264h24v24h-24zM159 264h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 288h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 288h24v24h-24zM135 312h24v24h-24zM159 312h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 336h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 336h24v24h-24zM135 360h24v24h-24zM159 360h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 384h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 384h24v24h-24zM135 408h24v24h-24zM159 408h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 432h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 432h24v24h-24zM135 456h24v24h-24zM159 456h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 480h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 480h24v24h-24zM135 504h24v24h-24zM159 504h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 528h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 528h24v24h-24zM135 552h24v24h-24zM159 552h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 576h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 576h24v24h-24zM135 600h24v24h-24zM159 600h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 624h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 624h24v24h-24zM135 648h24v24h-24zM159 648h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 672h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M159 672h24v24h-24zM135 696h24v24h-24zM159 696h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M135 720h24v24h-24z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M159 720h24v24h-24z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 0h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 0h24v24h-24zM183 24h24v24h-24zM207 24h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 48h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 48h24v24h-24zM183 72h24v24h-24zM207 72h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 96h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 96h24v24h-24zM183 120h24v24h-24zM207 120h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 144h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 144h24v24h-24zM183 168h24v24h-24zM207 168h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 192h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 192h24v24h-24zM183 216h24v24h-24zM207 216h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 240h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 240h24v24h-24zM183 264h24v24h-24zM207 264h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 288h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 288h24v24h-24zM183 312h24v24h-24zM207 312h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 336h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 336h24v24h-24zM183 360h24v24h-24zM207 360h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 384h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 384h24v24h-24zM183 408h24v24h-24zM207 408h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 432h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 432h24v24h-24zM183 456h24v24h-24zM207 456h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 480h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 480h24v24h-24zM183 504h24v24h-24zM207 504h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 528h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 528h24v24h-24zM183 552h24v24h-24zM207 552h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 576h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 576h24v24h-24zM183 600h24v24h-24zM207 600h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 624h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 624h24v24h-24zM183 648h24v24h-24zM207 648h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 672h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M207 672h24v24h-24zM183 696h24v24h-24zM207 696h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M183 720h24v24h-24z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M207 720h24v24h-24z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 0h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 0h24v24h-24zM231 24h24v24h-24zM255 24h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 48h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 48h24v24h-24zM231 72h24v24h-24zM255 72h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 96h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 96h24v24h-24zM231 120h24v24h-24zM255 120h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 144h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 144h24v24h-24zM231 168h24v24h-24zM255 168h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 192h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 192h24v24h-24zM231 216h24v24h-24zM255 216h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 240h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 240h24v24h-24zM231 264h24v24h-24zM255 264h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 288h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 288h24v24h-24zM231 312h24v24h-24zM255 312h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 336h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 336h24v24h-24zM231 360h24v24h-24zM255 360h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 384h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 384h24v24h-24zM231 408h24v24h-24zM255 408h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 432h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 432h24v24h-24zM231 456h24v24h-24zM255 456h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 480h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 480h24v24h-24zM231 504h24v24h-24zM255 504h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 528h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 528h24v24h-24zM231 552h24v24h-24zM255 552h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 576h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 576h24v24h-24zM231 600h24v24h-24zM255 600h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 624h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 624h24v24h-24zM231 648h24v24h-24zM255 648h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 672h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M255 672h24v24h-24zM231 696h24v24h-24zM255 696h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M231 720h24v24h-24z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M255 720h24v24h-24z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 0h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 0h24v24h-24zM279 24h24v24h-24zM303 24h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 48h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 48h24v24h-24zM279 72h24v24h-24zM303 72h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 96h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 96h24v24h-24zM279 120h24v24h-24zM303 120h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 144h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 144h24v24h-24zM279 168h24v24h-24zM303 168h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 192h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 192h24v24h-24zM279 216h24v24h-24zM303 216h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 240h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 240h24v24h-24zM279 264h24v24h-24zM303 264h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 288h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 288h24v24h-24zM279 312h24v24h-24zM303 312h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 336h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 336h24v24h-24zM279 360h24v24h-24zM303 360h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 384h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 384h24v24h-24zM279 408h24v24h-24zM303 408h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 432h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 432h24v24h-24zM279 456h24v24h-24zM303 456h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 480h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 480h24v24h-24zM279 504h24v24h-24zM303 504h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 528h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 528h24v24h-24zM279 552h24v24h-24zM303 552h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 576h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 576h24v24h-24zM279 600h24v24h-24zM303 600h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 624h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 624h24v24h-24zM279 648h24v24h-24zM303 648h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 672h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M303 672h24v24h-24zM279 696h24v24h-24zM303 696h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M279 720h24v24h-24z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M303 720h24v24h-24z" />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 0h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 0h24v24h-24zM327 24h24v24h-24zM351 24h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 48h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 48h24v24h-24zM327 72h24v24h-24zM351 72h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 96h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 96h24v24h-24zM327 120h24v24h-24zM351 120h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 144h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 144h24v24h-24zM327 168h24v24h-24zM351 168h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 192h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 192h24v24h-24zM327 216h24v24h-24zM351 216h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 240h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 240h24v24h-24zM327 264h24v24h-24zM351 264h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 288h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 288h24v24h-24zM327 312h24v24h-24zM351 312h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 336h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 336h24v24h-24zM327 360h24v24h-24zM351 360h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 384h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 384h24v24h-24zM327 408h24v24h-24zM351 408h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 432h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 432h24v24h-24zM327 456h24v24h-24zM351 456h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 480h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 480h24v24h-24zM327 504h24v24h-24zM351 504h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 528h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 528h24v24h-24zM327 552h24v24h-24zM351 552h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 576h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 576h24v24h-24zM327 600h24v24h-24zM351 600h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 624h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 624h24v24h-24zM327 648h24v24h-24zM351 648h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 672h24v24h-24z"
                            opacity="0.8"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M351 672h24v24h-24zM327 696h24v24h-24zM351 696h24v24h-24z"
                        />
                        <path
                            stroke="#556072"
                            strokeWidth="0.5"
                            d="M327 720h24v24h-24z"
                            opacity="0.8"
                        />
                        <path stroke="#556072" strokeWidth="0.5" d="M351 720h24v24h-24z" />
                    </mask>
                    <g mask="url(#mobile-line_svg__a)">
                        <circle
                            opacity="0.5"
                            cx="295.5"
                            cy={540}
                            r="160.5"
                            fill="url(#mobile-line_svg__b)"
                        />
                        <circle
                            opacity="0.5"
                            cx="51.971"
                            cy="523.5"
                            r="160.5"
                            fill="url(#mobile-line_svg__c)"
                        />
                    </g>
                    <path fill="#7829F9" d="M63.471 552h24v24h-24z" />
                    <path fill="#02F3A2" d="M255.471 528h24v24h-24z" />
                    <defs>
                        <radialGradient
                            id="mobile-line_svg__b"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(0 160.5 -160.5 0 295.5 540)"
                        >
                            <stop stopColor="#556072" />
                            <stop offset={1} stopColor="#556072" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient
                            id="mobile-line_svg__c"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(0 160.5 -160.5 0 51.971 523.5)"
                        >
                            <stop stopColor="#556072" />
                            <stop offset={1} stopColor="#556072" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                </svg>

                <div className="navs">
                    <NavLink to="/" className={currentPath === '/' ? 'active' : ""} onClick={closeMenu} >
                        Home
                        {arrow}
                    </NavLink>
                    <NavLink to="/about" onClick={closeMenu} >
                        About
                        {arrow}
                    </NavLink>
                    <NavLink to="/resources" onClick={closeMenu} >
                        Resources
                        {arrow}
                    </NavLink>
                    <NavLink to="/enterprise" onClick={closeMenu} >
                        Enterprise
                        {arrow}
                    </NavLink>
                    <NavLink to="/roadmap" onClick={closeMenu} >
                        Roadmap
                        {arrow}
                    </NavLink>
                    {false && <NavLink to="/pricing" onClick={closeMenu} >
                        Pricing
                        {arrow}
                    </NavLink>}
                    {false && <NavLink to="/technology" onClick={closeMenu} >
                        Technology
                        {arrow}
                    </NavLink>}
                </div>
                <a href="/signin" >
                    <div className="btn_wrap">
                        <button type="button" className="small_btn">Sign in</button>
                        <div className="line"></div>
                        <div className="light_line"></div>
                    </div>
                </a>
            </div>}
        </Fragment>
    )
}

export default Header;