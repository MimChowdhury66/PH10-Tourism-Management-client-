import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay'
import banner1 from '../../../public/banner-1.jpg';
import banner2 from '../../../public/banner-2.jpg';
import banner3 from '../../../public/banner-3.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='mt-3'>
            <Swiper navigation={true} autoplay={{ delay: 1000 }} modules={[Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-45"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">FINDING THE BEST TOURIST SPOT
                                </h1>
                                <p className="mb-5 animate__animated animate__backInDown">plan your next trip, read reviews and get travel advice from our community on where to stay and what to do. find savings on hotels, book the perfect tour or attraction, and reserve a table at the best restaurants.</p>
                                <Link to='/login'><button className="btn text-xl">See Details</button></Link>                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">FINDING THE RIGHT AIRBNB
                            </h1>
                            <p className="mb-5 animate__animated animate__backInDown">Get an airbnb for every kind of trip → 7 million vacation rentals → 2 million guest favorites → 220+ countries and regions worldwide </p>
                            <Link to='/login'><button className="btn text-xl ">See Details</button></Link>                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">Book your perfect holiday
                            </h1>
                            <p className="mb-5 animate__animated animate__backInDown">Book your perfect holiday with Trip.com and enjoy our great discounts on hotels, homes, flights and activities. get the Trip.com app!</p>
                            <Link to='/login'><button className="btn text-xl">See Details</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;