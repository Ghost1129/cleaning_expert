import React from 'react';
import Form from "./form";


const Links = () => {

    return (
        <div className={"max-w-7xl mx-4 md:mx-auto my-20"}>
            <div><h1 className={"text-3xl font-medium py-2"}>Quick Links</h1></div>
            <div>
                <h2 className={"text-xl font-medium py-2"}>Serving in</h2>
                <p className={"text-sm leading-6 text-gray-500"}>Ludhiana • Kochi • Kanpur • Agra • Bhopal • Guwahati • Vijayawada • Varanasi • Coimbatore • Thiruvananthapuram • Patna • Raipur • Nashik • Jabalpur • Jamshedpur • Dehradun • Meerut • Ranchi • Prayagraj • Amritsar • Gwalior • Kota • Aurangabad • Mysore • Guntur • Cuttack • Udaipur • Ahmedabad • Bangalore • Chennai • Delhi NCR • Chandigarh Tricity • Jaipur • Hyderabad • Kolkata • Mumbai • Pune • Nagpur • Visakhapatnam • Vadodara • Lucknow • Bhubaneswar • Surat • Indore • Rajahmundry • Madurai • Jodhpur • Kakinada • Warangal • Sonipat • Panipat • Karnal • Rohtak • Alwar </p>
            </div>
            <div>
                <h2 className={"text-xl font-medium py-2"}>Also available in</h2>
                <p className={"text-sm leading-6 text-gray-500"}> Full House Cleaning Service in Delhi NCR, India • Full House Cleaning Service in Kharkhari Jatmal, South Delhi, Delhi NCR, India • Full House Cleaning Service in Raja Garden, West Delhi, Delhi NCR, India • Full House Cleaning Service in Badusarai, South Delhi, Delhi NCR, India • Full House Cleaning Service in Nizamuddin West, South Delhi, Delhi NCR, India • Full House Cleaning Service in Kapashera, South Delhi, Delhi NCR, India • Full House Cleaning Service in Budh Vihar, North Delhi, Delhi NCR, India • Full House Cleaning Service in Karam Pura, West Delhi, Delhi NCR, India • Full House Cleaning Service in Yusuf Sarai, South Delhi, Delhi NCR, India • Full House Cleaning Service in Mandawali, East Delhi, Delhi NCR, India •
                    <span>See More.</span>
                </p>

            </div>
            <div>
                <h2 className={"text-xl font-medium py-2"}>Services Offered</h2>
                <p className={"text-sm leading-6 text-gray-500"}>Sofa Cleaning in Delhi NCR, India • Bathroom Cleaning in Delhi NCR, India • Kitchen Cleaning in Delhi NCR, India • Office Cleaning in Delhi NCR, India • Car Cleaning in Delhi NCR, India</p>
            </div>
            <div className={"hidden md:block md:max-w-fit md:mx-auto"}>
                <Form/>
            </div>

        </div>
    );
};

export default Links;
