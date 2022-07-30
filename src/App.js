import HomePage from './HomePage/HomePage.jsx';
import {Anchor} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Link } = Anchor;

function App() {
  return (
    <div className="App">
      <nav className='navMenu'>
        <ul>
          <li><a href="#">Acceuil</a></li>
          <li><a href="#nos_services">Nos services</a></li>
          <li><a href="#contact">Nous contacter</a></li>
        </ul>
      </nav>
      <HomePage/>
    </div>
  );
}

export default App;


/* <div className='mainMenuDiv'>
        <Anchor>
          <div className='mainMenuAnchorGroup'>
            <img style={{ marginLeft:'20px', width:"30px"}} alt="logo EternalStar" src="logoEternal.png"/>
            <Link href="#topHomePage" title="-  Acceuil  " />
            <Link href="#nos_services" title="-  Nos services  "/>
            <Link href="#contact" title="-  Contact  " >
            </Link>
          </div>
        </Anchor>
      </div> */
