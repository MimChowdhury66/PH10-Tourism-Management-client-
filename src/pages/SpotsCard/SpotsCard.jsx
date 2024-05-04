import { Link } from "react-router-dom";

const SpotsCard = ({ spot }) => {
    const { _id, PhotoURL, AverageCost, SpotName, TotalVisitor, TravelTime,
        Seasonality
    } = spot;
    return (
        <div>
         
            



            {/* card */}
            <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800"><span className="font-bold">Total Visitor:</span> {TotalVisitor} </a>
                    </div>

                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={PhotoURL} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span className="font-bold">Average Cost: $</span>   {AverageCost}

                        </div>

                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold text-default-600">{SpotName}</h3>
                        </a>
                        <p className="leading-snug text-gray-600"><span className="font-bold">Best time for travel-</span> {Seasonality}</p>
                        <p className="leading-snug text-gray-600"><span className="font-bold">Travel Time-</span> {TravelTime}</p>

                    </div>
                </div>
                <Link to={`/spotDetails/${_id}`}><button className="btn mt-3 bg-orange-400 text-white">View details</button></Link>
            </div>
        </div>
    );
};

export default SpotsCard;
