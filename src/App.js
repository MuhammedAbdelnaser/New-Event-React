// import './App.css';

import OurPrograms from './design-system/components/OurPrograms/OurPrograms';
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
        <OurPrograms />
      </div>
    </div>
  );
}

export default App;
