// import './App.css';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
// import Overview from './design-system/components/Overview';

import SpeakersData from "./design-system/components/CreativeSpeakers/SpeakersData";

import CreativeSpeakers from "./design-system/components/CreativeSpeakers";
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
        {
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
        }
      </div>
    </div>
  );
}

export default App;
