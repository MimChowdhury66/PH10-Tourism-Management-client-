import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Slide

} from "react-awesome-reveal";
const SpotDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [spots, setSpots] = useState({});
    const { _id, PhotoURL, AverageCost, SpotName, TotalVisitor, TravelTime,
        Seasonality,
        CountryName,
        Location,
        Description,
        Email,
        UserName

    } = spots;
    useEffect(() => {
        fetch(`http://localhost:5000/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => setSpots(data)
            )
    }, [id])

    return (
        <div className='mt-5'>
            <Slide
            ><h1 className='text-3xl font-bold'><span className='text-orange-500'>|</span> Details</h1></Slide>
            <section className="p-6 bg-gray-100 text-gray-800">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
                        <span className="block mb-2 text-default-600">{SpotName}, {Location}</span>
                        <h1 className="text-xl lg:text-5xl font-extrabold text-gray-900">{CountryName}</h1>
                        <p className="my-8">
                            {Description}
                            <br /> <br />
                            MAX travel time around the place: {TravelTime}
                        </p>
                        <h1 className="text-xl font-extrabold text-gray-900">Total Visitor: {TotalVisitor}</h1>
                        <h1 className="text-xl font-extrabold text-gray-900">Best Time: {Seasonality}</h1>
                        <h1 className="text-xl font-extrabold text-gray-900">Average Cost: ${AverageCost}</h1>
                        <div className='mt-10'>
                            {Email} <br /> {UserName}
                        </div>
                    </div>
                    <img src={PhotoURL} alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />

                </div>


            </section>
        </div>
    );
};

export default SpotDetails;