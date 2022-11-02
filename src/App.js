// import './App.css';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

import Overview from './design-system/components/Overview';
function App() {
  return (
    <div className="App">
      <Overview icon={faUserGroup} title='650 Participants' description='Quisque ut libero sapien. Integer tellus nisl, eff: sed dolor at, vehicula finibus m Integer tellus nisl, eff: sed dolor at, vehicula finibus m' />
      {/* <Overview icon={faClock} title='24 Programs' description='Quisque ut libero sapien. Integer tellus nisl, eff: sed dolor at, vehicula finibus m' />
      <Overview icon={faMicrophone} title='11 Speakers' description='Quisque ut libero sapien. Integer tellus nisl, eff: sed dolor at, vehicula finibus m' />
      Test */}
    </div>
  );
}

export default App;
