import React from 'react';
import down from '../assets/down.png';
import Services from "./services";


const Faq = ({data}) => {

    const [list, setList] = React.useState(data);
    const toggleFaq = (index) => {
        setList(list.map((item,i) =>{
            if (index === i){
                   item.isActive= !item.isActive;
            } else {
                item.isActive= false
            }
            return item;
        }))
    }

    return (
        <>
            <div className={"text-3xl font-medium py-1 mx-2 md:text-center"}>
                <h1>FAQ's Before Home Cleaning Services In Delhi
                    NCR</h1>
            </div>
            <div className={"my-10  md:max-w-6xl md:mx-auto"}>
                {list.map((item, index) => (
                    <div className="bg-gray-200 my-2 mx-2 rounded-md p-2 cursor-pointer" key={index} >
                        <div className="flex justify-between p-2 items-center" onClick={()=>toggleFaq(index)}>
                            <span>{item.question}</span>
                            <img src={down} alt="arrow" className={`w-3 h-3 ${item.isActive === true ? '':'-rotate-90'}`} />
                        </div>
                        <p className={`p-2 ${item.isActive === true ? 'block':'hidden'}`}>{item.answer}</p>
                    </div>
                ))}

            </div>
            <Services/>



        </>
    );
};

export default Faq;
