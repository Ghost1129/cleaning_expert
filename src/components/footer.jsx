import React from 'react';
import playicon from '../assets/black-playstore 1.png';
import insta from '../assets/Vector-3.png';
import twitter from '../assets/icons8-twitter.png';
import linkedin from '../assets/linkedin-logo 1.png';
import facebook from '../assets/facebook 1.png';
import youtube from '../assets/youtube.png';
import pintrest from '../assets/pinterest-social-logo.png';
const Footer = () => {
    return (
        <footer className={"mt-2 pt-4 bg-gray-100"}>
            <div className={"flex flex-col md:flex-col-reverse"}>
                <div className={"flex max-w-fit mx-auto gap-10"}>
                    <span className={"text-teal-800 font-bold text-sm w-28 cursor-pointer md:text-base"}>Download Oyebusy App</span>
                    <img src={playicon} alt="" className={"h-10 w-36 cursor-pointer"}/>
                </div>
                <div className={" flex flex-col items-center font-semibold leading-4 gap-4 md:flex-row w-3/5 justify-between mx-auto md:my-6 md:text-lg"}>
                    <a href="" className={"mt-6 hover:text-gray-500 md:mt-0"}>About Us</a>
                    <a href="" className={"hover:text-gray-500"}>Blog</a>
                    <a href="" className={"hover:text-gray-500"}>Terms & Conditions</a>
                    <a href="" className={"hover:text-gray-500"}>Privacy Policy</a>
                    <a href="" className={"hover:text-gray-500"}>Offers & Gift Cards</a>
                    <a href="" className={"hover:text-gray-500"}>Contact Us</a>
                </div>
            </div>
            <div className={"text-center mt-8 pb-8"}>
                <div className={"flex max-w-fit gap-6 mx-auto my-4"}>
                    <a href=""><img src={insta} alt="" className={"w-7 h-7 hover:scale-110"}/></a>
                    <a href=""><img src={twitter} alt="" className={"w-7 h-7 hover:scale-110"}/></a>
                    <a href=""><img src={linkedin} alt="" className={"w-7 h-7 hover:scale-110"}/></a>
                    <a href=""><img src={facebook} alt="" className={"w-7 h-7 hover:scale-110"}/></a>
                    <a href=""><img src={youtube} alt="" className={"w-7 h-7 hover:scale-110"}/></a>
                    <a href=""><img src={pintrest} alt="" className={"w-7 h-7 hover:scale-110"}/></a>
                </div>
                <span className={"text-sm font-thin"}>© 2022 House Cleaning Expert</span>
            </div>


        </footer>
    );
};

export default Footer;
