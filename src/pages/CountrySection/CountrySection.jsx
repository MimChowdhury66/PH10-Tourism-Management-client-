import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import CountryCard from '../CountryCard/CountryCard';

const CountrySection = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://tourism-management-server-two.vercel.app/country')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="lg:mt-10 mb-10">
            <Fade><h1 className="lg:text-3xl font-bold text-center mb-5">Top Destinations..
            </h1></Fade>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
                {
                    countries.slice(0, 6).map(country => <CountryCard country={country} ></CountryCard>)
                }

            </div>

        </div>
    );
};

export default CountrySection;