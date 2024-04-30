import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import SpotsCard from '../SpotsCard/SpotsCard';
const CountrySpot = () => {
    const { countryName } = useParams();
    console.log(countryName);
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/country/${countryName}`)
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    return (
        <div className="lg:mt-10 ">
            <Fade><h1 className="lg:text-3xl font-bold text-center mb-5">Top Attractions
            </h1></Fade>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
                {
                    spots.map(spot => <SpotsCard key={spot._id} spot={spot} ></SpotsCard>)
                }
            </div>

        </div>
    );
};

export default CountrySpot;