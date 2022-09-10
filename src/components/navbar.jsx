import React from 'react';
import menu from '../assets/menu.svg';
import logo from '../assets/Group 7077.png';
import whatsapp from '../assets/Group 1655.png';
import phone from '../assets/Phone.png';
import down from '../assets/down.png';
import cart from '../assets/cart.png';

const Navbar = () => {
    return (
        <nav className="w-screen flex justify-between items-center px-3 py-2 md:border-b shadow-sm">
            <a href="!#" className="w-7 h-7 md:hidden">
                <img src={menu} alt="menu" />
            </a>
            <a href="!#" className="w-10 h-10 flex items-center md:mx-10">
                <img src={logo} alt="logo" />
                CLEANING <br/> EXPERT
            </a>
            <a href="!#" className="w-7 h-7 -mr-14 md:hidden ">
                <img src={whatsapp} alt="whatsapp"/>
            </a>
            <a href="!#" className="w-7 h-7 md:hidden">
                <img src={phone} alt="phone"/>
            </a>
            <div className={"hidden md:flex items-center w-1/2 justify-around font-semibold gap-3"}>
                <div className={"flex items-center gap-2 border-r pr-4 cursor-pointer"}>
                    <span>Pest Control</span>
                    <img src={down} alt="" className={"w-4 h-4"}/>
                </div>
                <div className={"flex items-center gap-2 border-r pr-4 cursor-pointer"}>
                    <span>Home Cleaning</span>
                    <img src={down} alt="" className={"w-4 h-4"}/>
                </div>
                <div className={"cursor-pointer h-"}>
                    <span>Covid Disinfection</span>
                </div>
                <div className={"flex cursor-pointer"}>
                    <img src={cart} alt="" className={"w-10 h-10"}/>
                    <span className={"text-sm"}>2</span>
                </div>
                <span className={"text-lg font-bold text-orange-400 cursor-pointer"}>Free Quotes</span>
            </div>
        </nav>
    );
};

export default Navbar;
