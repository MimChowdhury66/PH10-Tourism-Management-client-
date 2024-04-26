import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-28">
        
        <h1 className="text-5xl">404!! Not Found. </h1>
        <Link to='/'>            <button className="mt-3 btn btn-outline">Go Back to Home</button>
        </Link>
    </div>
    );
};

export default ErrorPage;