import apps from './images/apps.png';
import './Nav.css';


function Nav() {
    return (
      <div className="Nav">
            <p className='sp n'>Gmail</p>
            <p className='sp n'>Images</p>
            <img className="apps sp" src={apps} />
            <button className='signin sp'>Sign in</button>
      </div>
    );
  }
  
  export default Nav;
  