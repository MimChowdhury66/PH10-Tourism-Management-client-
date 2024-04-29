import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import SpotsCard from '../SpotsCard/SpotsCard';

const TouristSection = () => {

    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addSpot')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    return (
        <div className="lg:mt-10 ">
            <Fade><h1 className="lg:text-3xl font-bold text-center mb-5">Top Attractions
            </h1></Fade>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
                {
                    spots.slice(0, 6).map(spot => <SpotsCard key={spot._id} spot={spot} ></SpotsCard>)
                }
            </div>

        </div>
    );
};

export default TouristSection;