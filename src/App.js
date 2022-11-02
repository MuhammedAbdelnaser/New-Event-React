// import './App.css';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
import Overview from './design-system/components/Overview';
import overviewData from './design-system/components/Overview/Data';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#222122" }}>
        {
          overviewData.map((item) => {
            return (
              <Overview key={item.id} icon={item.icon} title={item.title} description={item.description} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
