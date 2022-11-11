// import './App.css';

import './design-system/main.css';
// import overviewData from './design-system/components/Overview/Data';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
      </div>
    </div>
  );
}

export default App;
