import Banner from "../Banner/Banner";
import Cancellation from "../Cancellation/Cancellation";
import CountrySection from "../CountrySection/CountrySection";
import TouristSection from "../TouristSection/TouristSection";
import WhyUs from "../WhyUs/WhyUs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSection></TouristSection>
            <CountrySection></CountrySection>
            <WhyUs></WhyUs>
            <Cancellation></Cancellation>
        </div>
    );
};

export default Home;