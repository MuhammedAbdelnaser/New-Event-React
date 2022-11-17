import AboutUs from "./components/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview/Overview";
import WatchVideo from "./components/WatchVideo/WatchVideo";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <Overview />
            <WatchVideo />
        </>
    )
}
