import React, {useEffect, useRef} from 'react';
import leftbutton from '../assets/left.png';
import rightbutton from '../assets/right.png';

import images from '../assets/urbanExpertCleaning-common.json';


const Carousel = () => {
    const data= images[0].carousel;
    const maxscrollwidth = useRef(0);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const carousel =useRef(null)

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };
    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxscrollwidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };


    useEffect(()=>{
            if (carousel !== null && carousel.current !== null) {
                carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
            }
        }
        ,[currentIndex])

    useEffect(()=>{
        maxscrollwidth.current=carousel.current?carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
    },[]);


    return (
        <div className="relative mx-10 md:mx-20 my-10">
            <div className="hidden absolute w-full h-full md:flex justify-between top left z-10 ">
                <button className="-ml-8"><img src={leftbutton} alt="left" onClick={movePrev}/></button>
                <button className="-mr-8"><img src={rightbutton} alt="right" onClick={moveNext}/></button>
            </div>
            <div className="flex gap-1 overflow-scroll scroll-smooth snap-x snap-mandatory touch-pan-x" ref={carousel}>
                {data.map((image, index) => (
                    <div key={index} className="relative w-64 h-64 aspect-square snap-start">
                        <img src={image} alt="" className="w-full h-full" />
                    </div>
                    ))}

            </div>

        </div>
    );
};

export default Carousel;
