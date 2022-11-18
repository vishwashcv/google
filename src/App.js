import './App.css';
import logo from './images/Google-Search-Logo.png';
import searchicon from './images/search.png';
import mic from './images/mic.png';
import camera from './images/camera.svg';

function App() {
  return (
    <div className="App">
      <center>
        <header className="App-header">
        <img  className="logo" src={logo} /><br/>
        <input className='searchbox' />
        <img className="searchicon" src={searchicon} />
        <img className="mic" src={mic} />
        <img className="camera" src={camera} />
        <div className='buttons'>
          <button className='button'>Google Search</button>
          <div className='space'></div>
          <button className='button'>I'm Feeling Lucky</button>
        </div>
        <p className='lang'>Google offered in: <a href="">हिन्दी</a>&nbsp;&nbsp;<a href="">বাংলা</a>&nbsp;&nbsp;<a href="">తెలుగు</a>&nbsp;&nbsp;<a href="">मराठी</a>&nbsp;&nbsp;<a href="">தமிழ்</a>&nbsp;&nbsp;<a href="">ગુજરાતી</a>&nbsp;&nbsp;<a href="">ಕನ್ನಡ</a>&nbsp;&nbsp;<a href="">മലയാളം</a>&nbsp;&nbsp;<a href="">ਪੰਜਾਬੀ</a></p>
      </header>
      </center>
    </div>
  );
}

export default App;
