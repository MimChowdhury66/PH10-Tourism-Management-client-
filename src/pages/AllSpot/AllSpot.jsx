import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import { useLoaderData } from 'react-router-dom';
import SpotsCard from '../SpotsCard/SpotsCard';
import { key } from 'localforage';

const AllSpot = () => {
    const spots = useLoaderData();
    const [sort, setSort] = useState(spots);

    const handleSort = (e) => {

        const sortBy = e.target.value
        console.log(sortBy)
        fetch(`https://tourism-management-server-two.vercel.app/all-tourist-spot?sortBy=${sortBy}`)
            .then(res => res.json())
            .then(data => setSort(data))
    }

    // console.log(spots)
    return (
        <div>
            <div className='text-center mt-2 mb-5 lg:mt-10'>
                <Slide>  <h1 className='lg:text-3xl font-bold'>All Tourists Spot </h1>
                </Slide>
            </div>

            {/* sorting */}
            <div className='flex mb-5 justify-center'>
                <select name='sort' onChange={handleSort} className="select select-warning w-full max-w-xs" defaultValue={' '}>
                    <option disabled selected>Sort by avg cost </option>
                    <option value='cost-asc'>Average cost (asc)</option>
                    <option value='cost-des' > Average cost (des)</option>

                </select>

            </div>




            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    sort.map(spot => <SpotsCard key={spot._id} spot={spot} ></SpotsCard>)
                }
            </div>


        </div>
    );
};

export default AllSpot;