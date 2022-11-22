import AboutUs from "./components/AboutUs";
import AccordionComponent from "./components/AccordionComponent/AccordionComponent";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms/OurPrograms";
import Overview from "./components/Overview/Overview";
import RegisterHere from "./components/RegisterHere/RegisterHere";
import Speakers from "./components/Speakers/Speakers";
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
        </>
    )
}
