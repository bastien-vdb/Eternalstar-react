import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage.jsx';
import {Anchor} from 'antd';
import 'antd/dist/antd.css';

const { Link } = Anchor;

function App() {
  return (
    <div className="App">
      <div className='mainMenuDiv'>
        <Anchor>
          <div className='mainMenuAnchorGroup'>
            <img style={{ marginLeft:'20px', width:"30px"}} src="logoEternal.png"/>
            <Link href="#topHomePage" title="Acceuil" />
            <Link href="#contact" title="Contact" />
            <Link href="#nos_services" title="Nos services">
            </Link>
          </div>
        </Anchor>
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
