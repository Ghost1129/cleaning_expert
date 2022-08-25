import React from 'react';
import Carousel from "./carousel";


const Work = () => {
    return (
        <>
            <div className="text-center mt-4 md:mt-0">
                <h1 className="text-xl font-bold">Our Professionals Work</h1>
                <Carousel/>
            </div>
            <div className="md:max-w-fit md:mx-auto md:border p-4 rounded-2xl">
            <div>
                <h1 className={"text-3xl font-medium py-2 my-8"}>Top 10 House Cleaning Service in Delhi NCR :</h1>
                <h2 className={"text-xl font-medium py-2"}>Services Included in House Cleaning Services:</h2>
                <ol className="list-decimal my-2 p-2 ml-6 text-gray-600">
                    <li className="">Includes of all Rooms Cleaning, Bathroom Cleaning, Kitchen Cleaning and Balcony Area Cleaning</li>
                    <li>Ceiling dusting</li>
                    <li>Window and channel cleaning</li>
                    <li>Fans/Ac dusting & Cleaning</li>
                    <li>Walls dusting</li>
                    <li>Window and channel cleaning</li>
                    <li>Curtain Cleaning, Sofa Cleaning, mattress & carpet vacuuming</li>
                    <li>Glass Cleaning</li>
                    <li>All Wooden Furniture, Doors, etc. cleaning and Polishing</li>
                    <li>Floor Scrubbing</li>
                    <li>After removing the fridge, almirah, sofa, and cleaning the floor, the goods will be put back in place</li>
                    <li>Oil layer on the kitchen wall will be removed by the kitchen cleaner</li>
                    <li>Water stains, pan stains, or floor stains in the bathroom will be removed</li>
                </ol>
            </div>
            <div>
                <h2 className={"text-xl font-medium py-2"}>Materials & Equipment's Used In House Cleaning Services:</h2>
                <ol className="list-decimal my-2 p-2 ml-6 text-gray-600">
                    <li>Professional cleaning chemicals</li>
                    <li>Single-disc floor scrubber/handheld scrubber</li>
                    <li>Vacuum Cleaner</li>
                    <li>Microfiber Cloths for dusting</li>
                    <li>Mops, Scotch Brite / foam or scrubbers.</li>
                    <li>Ladders, bucket, wiper and mugs etc.</li>
                </ol>
            </div>
            <div>
                <h2 className={"text-xl font-medium py-2 "}>Benefits Of Booking Us For Home Cleaning Services:</h2>
                <ol className="list-decimal my-2 p-2 ml-6 text-gray-600">
                    <li>Best price guarantee: We offer you the best and lowest price offered in the market.
                        Five Star Rated Experts: Providing you with the top</li>
                    <li>certified and accomplished practitioners.</li>
                    <li>Timely Service: Our specialists are committed to delivering timely services.</li>
                    <li>100% safe chemicals usage: Our Experts use
                        environmentally friendly chemicals</li>


                </ol>
            </div>
            <div>
                <h2 className={"text-xl font-medium py-2"}>Safety Precautions Follows In House Cleaning Services:</h2>
                <ol className="list-decimal my-2 p-2 ml-6 text-gray-600">
                    <li>Minimal touch contact & social distancing</li>
                    <li>Daily temperature monitoring.</li>
                    <li>Wearing masks and gloves.</li>
                    <li>Regular sanitization of hands.</li>
                    <li>Compliant of the Aarogaya Setu App.</li>
                </ol>
            </div>
            </div>




        </>
    );
};

export default Work;
