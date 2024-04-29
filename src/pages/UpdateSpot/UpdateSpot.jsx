import React from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { Flip } from "react-awesome-reveal";



const UpdateSpot = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,

    } = useForm();


    const onSubmit = data => {
        // console.log(data);
        const newData = data;
        console.log(newData);
    }
    // update data



    return (
        <div className="bg-[#F4F3F0] p-5 lg:p-10">
            <Flip
            > <h1 className="text-center text-2xl font-bold mb-6">Update Your Data Here</h1></Flip>


            {
                user &&
                <form onSubmit={handleSubmit(onSubmit)} className=" ">
                    <div className=" grid gap-3 w-full justify-center mb-3">
                        <div className="form-control ">
                            <label className="input input-bordered flex items-center gap-2">
                                Photo URL                            <input type="text" name="photo" className="grow w-full" placeholder="Photo URL" {...register("PhotoURL")} />
                            </label>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Spot Name
                                    <input type="text" name="spot" className="grow w-full" placeholder="Spot name" {...register("SpotName")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Country Name
                                    <input type="text" name="country" className="grow w-full" placeholder="Country Name" {...register("CountryName")} />
                                </label>
                            </div>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Location
                                    <input type="text" name="location" className="grow w-full" placeholder="Location" {...register("Location")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Average Cost
                                    <input type="text" name="cost" className="grow w-full" placeholder="Average Cost" {...register("AverageCost")} />
                                </label>
                            </div>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Travel Time
                                    <input type="text" name="time" className="grow w-full" placeholder="Travel Time in Days" {...register("TravelTime")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Total Visitor
                                    <input type="text" name="visitor" className="grow w-full" placeholder="Total Visitor Per Year" {...register("TotalVisitor")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Seasonality                         <input type="text" name="description" className="grow w-full" placeholder="Summer/Winter" {...register("Seasonality")} />
                                </label>
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="input input-bordered flex items-center gap-2">
                                Description                         <input type="text" name="description" className="grow w-full" placeholder="Description" {...register("Description")} />
                            </label>
                        </div>


                    </div>
                    <div className=" flex justify-center w-full">
                        <input type="submit" value="Update Tourist Spot" className="btn  w-1/2  text-white bg-orange-400 " />
                    </div>
                </form>
            }

        </div>
    );
};

export default UpdateSpot;