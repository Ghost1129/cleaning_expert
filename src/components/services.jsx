import React from 'react';
import down from '../assets/down.png';
import image1 from '../assets/Rectangle 2084.png';
import image2 from '../assets/Rectangle 2085.png';
import image3 from '../assets/Rectangle 2086.png';
import image4 from '../assets/Rectangle 2016.png';
import work1 from '../assets/Vector-1.png';
import work2 from '../assets/Group.png';
import work3 from '../assets/Vector-2.png';
import work4 from '../assets/Group-1.png';

const Services = () => {
    return (
        <>
            <section className={"m-2 shadow-black shadow-md border rounded-xl md:border-none md:shadow-none"}>
                <div className={"p-4 text-2xl font-medium py-2 md:text-center my-8"}>
                    <h2>Choose Our Services</h2>
                </div>
                <div className={"md:flex md:mx-auto md:max-w-fit gap-4 mb-4"}>
                    <div className="flex items-center p-4 md:flex-col relative font-semibold md:border-2 md:h-36 md:max-w-fit rounded-t-3xl cursor-pointer md:hover:bg-sky-700 md:hover:text-white md:shadow">
                        <img src={image1} alt="sofa" className="h-10 w-10 md:h-24 md:w-24 rounded md:absolute -top-6"/>
                        <span className={"ml-4 md:mt-auto md:ml-0 text-center"}>Sofa Deep Cleaning</span>
                        <img src={down} alt="arrow" className="w-4 h-5 -rotate-90 ml-auto md:hidden"/>

                    </div>
                    <div className="flex items-center p-4 md:flex-col relative font-semibold md:border-2 md:h-36 md:max-w-fit rounded-t-3xl cursor-pointer md:hover:bg-sky-700 md:hover:text-white md:shadow">
                        <img src={image2} alt="sofa" className="h-10 w-10 md:h-24 md:w-24 rounded md:absolute -top-6"/>
                        <span className={"ml-4 md:mt-auto md:ml-0 text-center"}>House Cleaning Services</span>
                        <img src={down} alt="arrow" className="w-4 h-5 -rotate-90 ml-auto md:hidden"/>

                    </div>
                    <div className="flex items-center p-4 md:flex-col relative font-semibold md:border-2 md:h-36 md:max-w-fit rounded-t-3xl cursor-pointer md:hover:bg-sky-700 md:hover:text-white md:shadow">
                        <img src={image3} alt="sofa" className="h-10 w-10 md:h-24 md:w-24 rounded md:absolute -top-6"/>
                        <span className={"ml-4 md:mt-auto md:ml-0 text-center"}>Bathroom Deep Cleaning</span>
                        <img src={down} alt="arrow" className="w-4 h-5 -rotate-90 ml-auto md:hidden"/>

                    </div>
                    <div className="flex items-center p-4 md:flex-col relative font-semibold md:border-2 md:h-36 md:max-w-fit rounded-t-3xl cursor-pointer md:hover:bg-sky-700 md:hover:text-white md:shadow">
                        <img src={image4} alt="sofa" className="h-10 w-10 md:h-24 md:w-24 rounded md:absolute -top-6"/>
                        <span className={"ml-4 md:mt-auto md:ml-0 text-center"}>Kitchen Deep Cleaning</span>
                        <img src={down} alt="arrow" className="w-4 h-5 -rotate-90 ml-auto md:hidden"/>

                    </div>
                </div>
            </section>
            <section className={"max-w-fit mx-auto my-20"}>
                <div className={"text-center relative max-w-fit mx-auto"}>
                    <h2 className={"text-3xl font-bold text-teal-700"}>How it Works</h2>
                    <div className={" w-4/5 h-1 bg-teal-700 mx-auto"}></div>
                </div>
                <div className={"flex items-center mt-6"}>
                    <div className={"flex flex-col items-center mr-4"}>
                        <div className={"flex items-center justify-center w-14 h-14 border-2 border-gray-300 rounded-full"}>
                            <img src={work1} alt="" className={"w-8 h-8"}/>
                        </div>
                        <div className={"w-1 h-3 bg-gray-300 my-1"}></div>
                        <div className={"flex items-center justify-center w-14 h-14 border-2 border-gray-300 rounded-full"}>
                            <img src={work2} alt="" className={"w-8 h-8"}/>
                        </div>
                        <div className={"w-1 h-3 bg-gray-300 my-1  "}></div>
                        <div className={"flex items-center justify-center w-14 h-14 border-2 border-gray-300 rounded-full"}>
                            <img src={work3} alt="" className={"w-8 h-8"}/>
                        </div>
                        <div className={"w-1 h-3 bg-gray-300  my-1 "}></div>
                        <div className={"flex items-center justify-center w-14 h-14 border-2 border-gray-300 rounded-full"}>
                            <img src={work4} alt="" className={"w-8 h-8"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-6"}>
                        <div className={"flex flex-col"}>
                            <span className={"font-bold"}>Choose the Service</span>
                            <span className={"text-md text-gray-500"}>Select the Service required</span>
                        </div>
                        <div className={"flex flex-col"}>
                            <span className={"font-bold"}>Fillup the form</span>
                            <span className={"text-md text-gray-500"}>Share your required details</span>
                        </div>
                        <div className={"flex flex-col"}>
                            <span className={"font-bold"}>Our team will contact you</span>
                            <span className={"text-md text-gray-500"}>We serve from 9am-7pm</span>
                        </div>
                        <div className={"flex flex-col "}>
                            <span className={"font-bold"}>Hassle-free service</span>
                            <span className={"text-md text-gray-500"}>24*7 Booking Available, verified professionals</span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Services;
