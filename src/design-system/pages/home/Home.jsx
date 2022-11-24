import AboutUs from "./components/AboutUs";
import AccordionComponent from "./components/AccordionComponent/AccordionComponent";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms/OurPrograms";
import OurSponsorsComponent from "./components/OurSponsors/OurSponsors";
import Overview from "./components/Overview/Overview";
import RegisterHere from "./components/RegisterHere/RegisterHere";
import Speakers from "./components/Speakers/Speakers";
import Venue from "./components/Venue/Venue";
import WatchVideo from "./components/WatchVideo/WatchVideo";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <Overview />
            <WatchVideo />
            <Speakers />
            <OurPrograms />
            <RegisterHere />
            <AccordionComponent />
            <Venue />
            <OurSponsorsComponent />
            <ContactUs />
        </>
    )
}
