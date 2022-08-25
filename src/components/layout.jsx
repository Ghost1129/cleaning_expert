import React from 'react';
import Navbar from "./navbar";
import Hero from "./hero";
import Work from "./work";
import Faq from "./faq";
import data from "../assets/urbanExpertCleaning-common.json"
import Reviews from "./Reviews";
import Links from "./links";
import Footer from "./footer";


const Layout = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <div className="hidden h-2 bg-black my-16 md:block"></div>
            <Work/>
            <Faq data={data[0].faq}/>
            <Reviews data={data[0].reviews}/>
            <Links/>
            <Footer/>

        </>
    );
};

export default Layout;
