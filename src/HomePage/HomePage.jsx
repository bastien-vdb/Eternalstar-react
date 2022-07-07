import './HomePageCSS.css';
import {gsap} from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import img10 from './img/eternalstar_img/nftsEt.png';
import img11jpg from './img/eternalstar_img/metaverse_nft.jpg';
import img12 from './img/eternalstar_img/service_commu_et.png';
import BVDB from './img/team/BVDB.png';
import ADFCH from './img/team/ADFCH.png';
import JEWE from './img/team/JEWE.png';
import RUSN from './img/team/RUSN.png';
import ARFCH from './img/team/ARFCH.png';
import ALVU from './img/team/ALVU.png';
import ERSCH from './img/team/ERSCH.png';
import About from './about/About.js';
import Anim from './anim/Anim.js';

function HomePage () {

useEffect(() => {
    AOS.init();
    AOS.refresh();

let tl = gsap.timeline();

    tl.to('.loading', {
        left: '100%',
        duration: 2
    })

    tl.to('.loading', {
        display: 'none'})

}, []);

    return (
        <div>
            <section className="loading"></section>
            <Anim/>           
            <section className='heroHome'>
                <div className='titleHome'>
                    <h2 style={{color:'white'}}><strong><span className='red'>ETERNALSTAR</span></strong><br/>La start up spécialisée sur la blockchain ETH</h2>
                </div>
            </section>
            
            <section className="hero">
                {/* <div className="logo">Comic Friends</div> */}
                <div style={{fontFamily:"Roboto, sans-serif"}} className="socials">
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                                <i className="fab fa-discord"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="heroG">
                    <div style={{width:'60%'}}>
                        <h1 style={{color:'white'}}>Devenez un acteur reconnu<span className="red"> dans le WEB3.0</span></h1>
                        <p>Tout savoir sur notre offre</p>
                        
                        <Link  to={{hash: "#team"}}><button className="btn">En savoir plus</button></Link>
                        
                    </div>
                </div>
                <div className="heroD"></div>
            </section>

            <section className="info">
                <div className="container">
                    <h2 data-aos="zoom-in-up">
                        Whitelist Mint{" "}
                        <span className="red"> {/* <NativeBalance /> */} </span>
                    </h2>
                    <a href="#" data-aos="zoom-in-up">
                        <button className="btn">Go !</button>
                    </a>
                </div>
                <div className="container">
                    <h2 data-aos="zoom-in-up">
                    NFT <span className="red">Minted</span>
                    <br />
                    <span className="red">0</span>/8888
                    </h2>
                </div>
            </section>

            <section className="hero">
                <div data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroD_2"></div>
                    <div data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroG">
                        <div>
                            <h1>
                                <span className="red">EternalStar</span>
                            </h1>
                            <p>
                                COMIC Friends Museum is a place where Comic creators and comic fans can meet by mint, exchanges or sell NFT of collections newly created eatch month by a brandnew comic creator. 
                            </p>
                            <a href="#">
                                <button className="btn">See on OpenSea</button>
                            </a>
                        </div>
                </div>
            </section>

            <section>
                <div className="team">
                    <div className="container">
                    <h2 data-aos="zoom-in">
                        Nos <span className="red">services</span>
                    </h2>
                    <div className="team__flex">
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            Création d'une collection NFT <br/>
                            <span className="job">   
                            EternalStart vous accompagne du début à la fin de votre projet.
                            EternalStar concrétise votre idée en développant le smart contract
                            de votre collection et la Dapp qui plaira à vos utilisateurs.
                            </span>
                        </h4>
                        <img src={img10} alt="Image" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            Design dans le metavers <br/>
                            <span className="job">
                            Création et conception d'objet pour le métaverse.
                            EternalStar vous aide à réaliser votre obectif artistique.
                            </span>
                        </h4>
                        <img src={img11jpg} alt="Imagejpg" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            Marketing et gestion de communauté <br/>
                            <span className="job">
                            EternalStart vous accompagne dans la création et la maintenance d'une communauté autour de votre projet.
                            Une communauté se doit d'être active, et doit donc être animée. Notre connaissance du terrain saura votre plus fort atout.
                            </span>
                        </h4>
                        <img src={img12} alt="Image" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="hero">
                <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroG">
                    <div>
                        <h1>
                            <span className="red">Check your NFT minted</span>
                        </h1>
                        <p>
                            Every NFT are on the Ethereum blockchain because we trust in it for security and the futur of this technology. As soon as you have minted an NFT from Moebius collection, you can find all your nft minted on Opensea but no only: You can see for art collection Here! Don't forget to connect your metamask.
                        </p>
                        <a href="#">
                            <button className="btn">Access to the market place</button>
                        </a>
                    </div>
                </div>
                <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroD_3"></div>
            </section>
            <section className="info">
                <div className="container">
                    <h2 data-aos='zoom-in-up'>
                        Join <span className='red'>our Discord</span>
                    </h2>
                    <a href='#' data-aos='zoom-in-up'>
                        <button className='btn'>Go !</button>
                    </a>
                </div>
            </section>

            <section>
                <div className="roadmap">
                    <div className="container">
                        <h2 data-aos="zoom-in">The <span className="red">Roadmap</span></h2>
                        <div className="line"></div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number">1</div>
                            <h4>Launch Roadmap</h4>
                            <About/>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">2</div>
                            <h4>Launch Presale</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">3</div>
                            <h4>Mint the remaining NFTs on OpenSea</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">4</div>
                            <h4>Mint the remaining NFTs on OpenSea</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="team">
                    <div className="container">
                        <h2 data-aos="zoom-in">Notre <span className="red">équipe</span></h2>
                        <div className="team__flex">
                            <div className="member service" data-aos="zoom-in">
                                <h4>Arthur Fuchs <br/><span className="job">DG</span></h4>
                                <img src={ARFCH} alt="Arthur Fuchs" />
                            </div>
                            
                            <div className="member service" data-aos="zoom-in">
                                <h4>Adrien Fuchs <br/><span className="job">DG</span></h4>
                                <img src={ADFCH} alt="Adrien Fuchs" />
                            </div>
                            
                            <div className="member service" data-aos="zoom-in">
                                <h4>Ruben Sananes <br/><span className="job">CEO Player one labs</span></h4>
                                <img src={RUSN} alt="Ruben Sananes" />
                            </div>
                            <div className="member service" data-aos="zoom-in">
                                <h4>Alex Vuillaume <br/><span className="job">COO Player one labs</span></h4>
                                <img src={ALVU} alt="Alex Vuillaume" />
                            </div>
                        </div>
                        <div className="team__flex niveau2">
                            <div className="member service" data-aos="zoom-in">
                                <h4>Éric Schahl <br/><span className="job">Avocat</span></h4>
                                <img src={ERSCH} alt="Éric Schahl" />
                            </div>
                            <div className="member service" data-aos="zoom-in">
                                <h4>Jennifer Westjohn <br/><span className="job">DA</span></h4>
                                <img src={JEWE} alt="Jennifer Westjohn" />
                            </div>
                            <div className="member service" data-aos="zoom-in">
                                <h4>Bastien Vermot de boisrolin<br/><span className="job">Web3 Developper</span></h4>
                                <img src={BVDB} alt="Bastien Vermot de boisrolin" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="footer__flex">
                        <div className="footerG">
                            EternalStar
                        </div>
                        <div className="footerD">
                            <ul>
                                <li><a href="#">Developement</a></li>
                                <li><a href="#">Mentions légales</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;