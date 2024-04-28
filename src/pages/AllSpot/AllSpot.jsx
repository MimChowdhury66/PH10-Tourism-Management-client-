import React from 'react';
import { Slide } from "react-awesome-reveal";
import { useLoaderData } from 'react-router-dom';
import SpotsCard from '../SpotsCard/SpotsCard';

const AllSpot = () => {
    const spots = useLoaderData();

    console.log(spots)
    return (
        <div>
            <div className='text-center mt-2 mb-5 lg:mt-10'>
                <Slide>  <h1 className='lg:text-3xl font-bold'>All Tourists Spot {spots.length} </h1>
                </Slide>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {
                spots.map(spot=><SpotsCard key={spot._id} spot={spot} ></SpotsCard>)
           }
           </div>


        </div>
    );
};

export default AllSpot;