import {Anchor} from 'antd';
import 'antd/dist/antd.css';
import './HomePageCSS.css';
import {gsap} from 'gsap';
//AOS place
import {useEffect} from 'react';
import About from './about/About.js';
import Anim from './anim/Anim.js';
import AnimMobile from './anim/AnimMobile';
import hero from './img/generation_bd.jpg';
import hero2 from './img/life_bd.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Media from 'react-media';

function HomePage () {

    const AnchorLink  = Anchor.Link;

useEffect(() => {    
let tl = gsap.timeline();

    tl.to('.loading', {
        opacity: '0',
        duration: 8
    })

    tl.to('.loading', {
        display: 'none'})

}, []);

useEffect(()=>{
    AOS.init();
    AOS.refresh();
})

    return (
        <div id='topHomePage'>
            <section className="loading"></section>
            <Media query="(min-width:1000px)">
                {(matches)=> matches ? (<Anim/>) : (<AnimMobile/>)}
            </Media>        
            <section className='heroHome'>
                <div className='titleHome'>
                    <h1 className='eternal_title'>ETERNALSTAR</h1>
                    <h4 className='eternal_title'>Entrez dans le monde de la blockchain</h4>
                </div>
            </section>
            
            <section className="hero">
                <div className="heroG">
                    <div style={{width:'100%'}}>
                        <h1 className='eternal_title'>Devenez un acteur reconnu dans le WEB3.0</h1>
                        <p>Tout savoir sur notre offre</p>   
                        <Anchor>
                        <button className="btn">
                            <AnchorLink href="#nos_services" title="Offres">
                            </AnchorLink>
                        </button>
                        </Anchor>
                    </div>
                </div>
                <div className="heroD">
                </div>
            </section>

            <section className="info">
                <div className="container">
                    <h2 data-aos="zoom-in-up">
                    Smart contract créés
                    <br />
                    + 80
                    </h2>
                </div>
            </section>

            <section className="hero">
                <div data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroD_2"></div>
                    <div data-aos="zoom-out-up" data-aos-offset="300" className="heroG">
                        <div>
                            <h1>
                                <span className='eternal_title'>Travailler avec nous</span>
                            </h1>
                            <p>
                            Besoin d'une équipe compétente et qualifiée pour vous accompagner dans la réalisation de votre projet ?
                            Vous avez frappé à la bonne porte. Notre travaille consiste à comprendre vos objectifs et à trouver la solution adaptée à vos besoins.
                            Contactez-nous ! 
                            </p>
                            <Anchor>
                                <button className="btn">
                                    <AnchorLink href="#contact" title="Go">
                                    </AnchorLink>
                                </button>
                            </Anchor>
                        </div>
                </div>
            </section>

            <section>
                <div className="team" id="nos_services" >
                    <div className="container">
                    <h2 data-aos="zoom-in">
                        Nos services
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
                        <img src={hero} alt="Création de collection NFT" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            Design dans le metavers <br/>
                            <span className="job">
                            Création et conception d'objet pour le métaverse.
                            EternalStar vous aide à réaliser votre obectif artistique.
                            </span>
                        </h4>
                        <img src={hero2} alt="Design dans le Metaverse" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            Marketing et gestion de communauté <br/>
                            <span className="job">
                            EternalStart vous accompagne dans la création et la maintenance d'une communauté autour de votre projet.
                            Une communauté se doit d'être active, et doit donc être animée. Notre connaissance du terrain saura votre plus fort atout.
                            </span>
                        </h4>
                        <img src={hero} alt="Marketing et gestion de communauté" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="hero" id="contact">
                <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroG">
                    <div>
                            <About/>
                    </div>
                </div>
                <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroD_3"></div>
            </section>

            <section className="info">
                <div className="container">
                    <h2 data-aos='zoom-in-up'>
                        Une entreprise dynamique 
                    </h2>
                    <div style={{width:'50%', marginLeft:'25%'}}>
                        <span style={{fontSize:'50px'}}>" </span>Nous vous accompagnons du début du projet jusqu'à la livraison finale. Nous adoptons une méthodologie paliée par des process précis, grâce à notre experience cumulée de plus de 10ans.<span style={{fontSize:'50px'}}> "</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="roadmap">
                    <div className="container">
                        <h2 data-aos="zoom-in">Expertises</h2>
                        <div className="line"></div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">1</div>
                            <h3>NFT Arts</h3>
                            <p>Notre expertise vous permet de lancer votre projet dans un délai réduit, tout en vous assurant d'une qualité à la hauteur des plus grands projets de collections d'oeuvres d'art numériques.</p>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">2</div>
                            <h3>NFT Game</h3>
                            <p>Vous souhaitez créer un jeu sur le Web3.0 ? Nous vous accompagnons sur la spécification des besoins. Nous nous occupons de la programmation.</p>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">3</div>
                            <h3>Dapp DEFI</h3>
                            <p>Un projet sur la finance décentralisée ? Nous vous aidons à lancer votre application tout en respectant les normes juridiques.</p>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">4</div>
                            <h3>Direction Artistique</h3>
                            <p>Besoin de conseils pour votre oeuvre ? Notre expertise artistique vous permettra de concrétiser votre objectif.</p>
                        </div>
                        <div className="bloc" data-aos="zoom-in">
                            <div className="number off">5</div>
                            <h3>Création d'une Communauté</h3>
                            <p>Votre projet manque de visibilité ? Nous vous accompagnons dans la création d'une communauté.
                                Discord et Twitter sont les incontournables du moment, mais certains outils qui ne sont pas à négliger, font la différence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
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
            </section> */}
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