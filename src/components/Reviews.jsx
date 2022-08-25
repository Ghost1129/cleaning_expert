import React from 'react';
import avatar from '../assets/avatar.png';
import star from '../assets/star.png';
import down from '../assets/down.png';

const Reviews = ({data}) => {
    return (
        <div className={"max-w-xl md:mx-auto"}>
            <h2 className={"text-2xl font-medium py-2 text-center"}>Customer reviews</h2>

            <div className={"p-6"}>
                <h2 className={"text-xl font-medium py-2"}>Avg. user rating</h2>
                <div className={"flex items-center"}>
                    <img src={star} alt="star" className="w-4 h-4"/>
                    <span className={"text-3xl"}>4.5</span>
                </div>
                <span className={"text-sm text-gray-500 "}>347K reviews</span>
            </div>
            <div className={"border-t-4 border-gray-300 mx-6 mt-6"}>
                {data.map((item, index) => (
                    <div className={" border-b-4 border-gray-300  py-6 "} key={index}>
                        <div className={"flex justify-between"}>
                            <img src={avatar} alt="avatar" className={"w-10 h-10 md:w-14 md:h-14"}/>
                            <div>
                                <h3>{item.custName}</h3>
                                <span className={"text-sm text-gray-500"}>July 2022 • Noida, Uttar Pradesh 201301, India</span>
                            </div>
                            <span className={"flex items-start"}>
                            <img src={star} alt="" className={"w-5 h-5"}/>
                                {item.rating}
                        </span>
                        </div>
                        <div className={"py-4"}>
                            <span className={"text-md"}>{item.review}</span>
                        </div>

                    </div>
                ))}
            </div>
            <button className={"flex items-center text-teal-700 border-2 mt-8 ml-4 font-medium p-1"}>Show more reviews
                <img src={down} alt="" className={"w-3 h-3 m-1"}/></button>

        </div>
    );
};

export default Reviews;
