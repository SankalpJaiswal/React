import logo from './logo.svg';
import './App.css';
import JoinUs from './day1/JoinUs';
import Settings from './day1/Settings';
import Login from './day1/Login';
import ContactUs from './day1/ContactUs';
import Search from './day1/Search';
import Help from './day1/Help';
import Home from './day1/Home';
import Download from './day1/Download';

function App() {
  return (
    <div className="App">
      
      <JoinUs/> <Settings/>
      <br></br>
      <Login/> <ContactUs/>
      <br></br>
      <Search/> <Help/>
      <br></br>
      <Home/> <Download/>



    </div>
  );
}

export default App;
