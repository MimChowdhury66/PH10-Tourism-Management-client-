import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { _id, PhotoURL, Description, CountryName
    } = country;
    return (
        <div>
            <div className="max-w-lg p-4 h-full shadow-md bg-gray-50 text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800"><span className="font-bold">Country:</span> {CountryName}  </a>
                    </div>

                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={PhotoURL} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />


                    </div>
                    <div className="space-y-2">

                        <p className="leading-snug text-gray-600"> {Description} </p>

                    </div>
                </div>
                <button className="btn mt-3 bg-orange-400 text-white">View Spots</button>
                {/* <Link to={`/spotDetails/${_id}`}><button className="btn mt-3 bg-orange-400 text-white">View details</button></Link> */}
            </div>
        </div>
    );
};

export default CountryCard;