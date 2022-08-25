import React from 'react';
import data from "../assets/form.json";

const Form = () => {
      const options = data[0];
      const[options1, setOptions1] = React.useState('');
      const [selected, setSelected] = React.useState('');




    const handleSelect = (e) => {
        const index = e.target.value;
        if(index === '#'){
            setOptions1('')
        }
        else {
            setOptions1(index)
            let options2 = options.option2.at(index)
            setSelected(options2)
        }
    }
    return (
        <div className=" my-10 mx-2 bg-white rounded border border-gray-400 p-4 md:m-10 ">
            <form action="">
                <select name="" id="" className="w-full p-2 my-2 bg-white border border-gray-400" onChange={handleSelect}>
                    <option value="#">Select</option>
                    {options.option.map((item,i) => (
                        <option value={i} key={i}>{item}</option>
                    ))}
                </select>
                <select name="" id="" className={`w-full p-2 my-2 bg-white border border-gray-400 ${options1?'flex':'hidden'}`}>
                    {selected && selected.option_value.map((item,i) => (
                            <option value={i} key={i}>{item}</option>
                        ))}
                </select>
                <div >
                    <input type="text" className="w-full p-2 border border-gray-400 my-2 rounded" placeholder="Enter Name"/>
                </div>
                <div className="my-2 flex justify-between">
                    <input type="text" className="w-1/2 p-2 border border-gray-400 rounded mr-2" placeholder="Phone Number"/>
                    <input type="text" className="w-1/2 p-2 border border-gray-400 rounded" placeholder="Alternate Number"/>
                </div>
                <div>
                    <input type="text" className="w-full p-2 border border-gray-400 rounded" placeholder="Pincode or Address"/>
                </div>
                <div className="text-center">
                    <button className="w-32 m-3 p-3 bg-blue-800 text-white rounded">SUBMIT</button>
                    <br/>
                    <span className="">Average call back time : 12 min</span>
                </div>


            </form>

        </div>
    );
};

export default Form;
