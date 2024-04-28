import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import {
    Flip
} from "react-awesome-reveal";

const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,

    } = useForm();




    const onSubmit = data => {
        // console.log(data);
        const newTourist = data;
        console.log(newTourist);

        // send data
        fetch('http://localhost:5000/addSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTourist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        icon: "success",
                        title: "Tourist Spot saved successfully",
                    });
                }
            })

        // send data
        // fetch('http://localhost:5000/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 icon: "success",
        //                 title: "Coffee saved",
        //             });
        //         }
        //     })



    }
    return (
        <div className="bg-[#F4F3F0] p-5 lg:p-10">
            <Flip
            > <h1 className="text-center text-2xl font-bold mb-6">Add a Tourist Spot Here</h1></Flip
            >

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
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    User Email
                                    <input type="text" defaultValue={user.email}
                                        name="email" className="grow w-full" placeholder="Email" {...register("Email")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    User Name
                                    <input type="text" defaultValue={user.displayName} name="user" className="grow w-full" placeholder="User Name" {...register("UserName")} />
                                </label>
                            </div>
                        </div>


                    </div>
                    <div className=" flex justify-center w-full">
                        <input type="submit" value="Add Tourist Spot" className="btn  w-1/2  text-white bg-orange-400 " />
                    </div>
                </form>
            }

        </div>
    );
};

export default AddTouristsSpot;