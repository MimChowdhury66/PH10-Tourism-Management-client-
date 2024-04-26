import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
                        <li><NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink></li>
                        <li><NavLink to="/myList">My List</NavLink></li>
                    </ul>
                </div>
                <a className="font-bold text-xl text-orange-400">Trip.com</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
                    <li><NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink></li>
                    <li><NavLink to="/myList">My List</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end tooltip tooltip-left z-[4]" data-tip={user?.displayName || 'name not found'}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                            <div className="w-10 rounded-full "  >
                                <img src={user?.photoURL || 'https://avatars.githubusercontent.com/u/86664820?v=4'} alt="" />

                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={logout} className="btn btn-sm btn-ghost">Logout</button></li>
                        </ul>
                    </div> :


                        <div className="flex gap-2">
                            <Link to='/login'><button className="btn lg:text-xl bg-orange-400">Log In</button></Link>
                            <Link to='/register'><button className="btn lg:text-xl bg-orange-400">Register</button></Link>
                        </div>

                }

              



            </div>
        </div>
    );
};

export default Header;