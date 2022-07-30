import HomePage from './HomePage/HomePage.jsx';
import './App.css';
import { useState } from 'react';
import Media from 'react-media';

function App() {
  const [isMenuMobileVisible, setMenuMobileVisible] = useState('none');
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState('flex');
  return (
    <div className="App">
      <Media query="(min-width:700px)">
                {(matches)=> matches ? (
                  <nav className='navMenu'>
                  <ul>
                    <li><a href="#">Acceuil</a></li>
                    <li><a href="#nos_services">Nos services</a></li>
                    <li><a href="#contact">Nous contacter</a></li>
                  </ul>
                </nav>
                ) : (
                  <div>
                    <div className='burgerButton' style={{display:isBurgerMenuVisible}} onClick={()=>{setMenuMobileVisible('flex'); setBurgerMenuVisible('none')}}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <nav style={{display:isMenuMobileVisible}} className='navMenuMobile' onClick={()=>{setMenuMobileVisible('none'); setBurgerMenuVisible('flex')}}>
                      <ul>
                        <li style={{border:'1px solid white', width:'2em'}}><a href="#">X</a></li>
                        <li><a href="#">Acceuil</a></li>
                        <li><a href="#nos_services">Nos services</a></li>
                        <li><a href="#contact">Nous contacter</a></li>
                      </ul>
                    </nav>
                  </div>
                )}
            </Media> 
      
      
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
