import { useContext, useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSpots(data)
            })
    }, [user])

    return (
        <div>
            <div className='text-center mt-2 lg:mt-10 mb-5'>
                <Zoom>  <h1 className='lg:text-3xl font-bold'>My Added List </h1>
                </Zoom>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead >
                        <tr >
                            <th></th>
                            <th className="lg:text-xl font-bold">Country Name</th>
                            <th className="lg:text-xl font-bold">Spot Name</th>
                            <th className="lg:text-xl font-bold">Average Cost</th>
                            <th className="lg:text-xl font-bold">Total Visitor per year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            spots.map((spot, index) => (
                                <tr>

                                    <th>{index + 1}</th>
                                    <td>{spot.CountryName}</td>
                                    <td>{spot.SpotName} </td>
                                    <td>${spot.AverageCost} </td>
                                    <td>{spot.TotalVisitor} </td>
                                    <td className="flex gap-2 m-2">
                                        <Link to={`/updateSpot/${spot._id}`}><button className="btn text-white  bg-orange-400 ">Update</button></Link>
                                        <button className="btn text-white  bg-black ">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }





                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyList;