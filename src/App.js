// import './App.css';

import OurSponsors from './design-system/components/OurSponsors/OurSponsors';
import ourSponsors from './design-system/components/OurSponsors/OurSponsorsData';
import './design-system/main.css';
// import overviewData from './design-system/components/Overview/Data';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
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
        {
          ourSponsors.map((item) => {
            return (
              <OurSponsors src={item.img} alt={item.alt} key={item.id} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
