import HomePage from './HomePage/HomePage.jsx';
import {Anchor} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Link } = Anchor;

function App() {
  return (
    <div className="App">
      <div className='mainMenuDiv'>
        <Anchor>
          <div className='mainMenuAnchorGroup'>
            <img style={{ marginLeft:'20px', width:"30px"}} alt="logo EternalStar" src="logoEternal.png"/>
            <Link href="#topHomePage" title="-  Acceuil  " />
            <Link href="#nos_services" title="-  Nos services  "/>
            <Link href="#contact" title="-  Contact  " >
            </Link>
          </div>
        </Anchor>
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
