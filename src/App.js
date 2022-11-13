// import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './design-system/main.css';
import Header from './design-system/pages/home/components/Header';
import Home from './design-system/pages/home/Home';
// import overviewData from './design-system/components/Overview/Data';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Header />
        {/* {
          overviewData.map((item) => {
            return (
              <Overview key={item.id} icon={item.icon} title={item.title} description={item.description} />
            )
          })
        } */}
        {/* {
          SpeakersData.map((item) => {
            return (
              <CreativeSpeakers
                key={item.id}
                img={item.img}
                name={item.name}
                job={item.job}
                alt={item.alt}
              />
            )
          })
        } */}
        {/* {
          OurProgramsData.map((item) => {
            return (
              <OurPrograms
                key={item.id}
                img={item.img}
                alt={item.alt}
                time={item.time}
                roomNumber={item.roomNumber}
                title={item.title}
                name={item.name}
                description={item.description}
              />
            )
          })
        } */}
        {/* {
          ourSponsors.map((item) => {
            return (
              <OurSponsors src={item.img} alt={item.alt} key={item.id} />
            )
          })
        } */}
      </>
    </div>
  );
}

export default App;
