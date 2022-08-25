import React from 'react';

import Form from "./form";

const Hero = () => {
    return (
        <section className="">
            <div className="h-72 bg-hero-image bg-no-repeat bg-right-top bg-cover md:h-full">
                <div className="relative backdrop-brightness-75 h-full">
                        <ol className="flex text-white p-2 gap-1">
                            <li><a href="!#" className="">Home</a></li>
                            <li><span>/</span></li>
                            <li><a href="!#">Delhi NCR</a></li>
                            <li><span>/</span></li>
                            <li><a href="!#">Home Cleaning</a></li>
                        </ol>

                    <div className="mt-10 md:flex md:justify-between md:mr-10 md:mt-4 md:pb-12 items-center">
                        <h1 className="text-3xl text-white font-bold md:w-1/2 p-2 mx-2 my-3 md:text-5xl">Top House Cleaning Services in Delhi NCR</h1>
                        <Form/>
                    </div>

                </div>
            </div>
            <div className="mt-96 md:mt-4 md:pt-10  px-3 md:w-3/5 mx-auto">
                <h2 className="font-bold">House Cleaning Services in Delhi NCR :</h2>
                <p className="mt-2 text-gray-500 md:leading-7 tracking-wide md:text-xl">Get home cleaning services in Delhi NCR, India. We have Well Equipped and Trained Team, who carries out Deep House Cleaning and Sanitization with Non-Hazardous Chemicals. Book well-trained and experienced team from OyeBusy to get your home deep cleaned thoroughly at your chosen time and location. We offer the most affordable home cleaning services in Delhi NCR, India for studios, apartments, and villas. Book home cleaning services on OyeBusy today.</p>
            </div>


        </section>
    );
};

export default Hero;
