import {Anchor} from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import Media from 'react-media';

function HomePage () {

    const AnchorLink  = Anchor.Link;

useEffect(() => {    
let tl = gsap.timeline();

    tl.to('.loading', {
        bottom: '0%',
        duration: 10
    })

    tl.to('.loading', {
        display: 'none'})

}, []);

useEffect(()=>{
    AOS.init();
    AOS.refresh();
},[])

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
                <div data-aos="zoom-in-out" className="container">
                    <h2>
                    Smart contract créés
                    <br />
                    + 80
                    </h2>
                </div>
            </section>

            <section className="hero">
                <div className="heroD_2"></div>
                    <div className="heroG">
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
                    <h2>
                        Nos services
                    </h2>
                    <div className="team__flex">
                        <div className="member">
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
                        <div className="member">
                        <h4>
                            Design dans le metavers <br/>
                            <span className="job">
                            Création et conception d'objet pour le métaverse.
                            EternalStar vous aide à réaliser votre obectif artistique.
                            </span>
                        </h4>
                        <img src={hero2} alt="Design dans le Metaverse" />
                        </div>
                        <div className="member">
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
                <div className="heroG">
                    <div>
                            <About/>
                    </div>
                </div>
                <div className="heroD_3"></div>
            </section>

            <section className="info">
                <div className="container">
                    <h2>
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
                        <h2>Expertises</h2>
                        <div className="line"></div>
                        <div className="bloc">
                            <div className="number off">1</div>
                            <h3>NFT Arts</h3>
                            <p>Notre expertise vous permet de lancer votre projet dans un délai réduit, tout en vous assurant d'une qualité à la hauteur des plus grands projets de collections d'oeuvres d'art numériques.</p>
                        </div>
                        <div className="bloc">
                            <div className="number off">2</div>
                            <h3>NFT Game</h3>
                            <p>Vous souhaitez créer un jeu sur le Web3.0 ? Nous vous accompagnons sur la spécification des besoins. Nous nous occupons de la programmation.</p>
                        </div>
                        <div className="bloc">
                            <div className="number off">3</div>
                            <h3>Dapp DEFI</h3>
                            <p>Un projet sur la finance décentralisée ? Nous vous aidons à lancer votre application tout en respectant les normes juridiques.</p>
                        </div>
                        <div className="bloc">
                            <div className="number off">4</div>
                            <h3>Direction Artistique</h3>
                            <p>Besoin de conseils pour votre oeuvre ? Notre expertise artistique vous permettra de concrétiser votre objectif.</p>
                        </div>
                        <div className="bloc">
                            <div className="number off">5</div>
                            <h3>Création d'une Communauté</h3>
                            <p>Votre projet manque de visibilité ? Nous vous accompagnons dans la création d'une communauté.
                                Discord et Twitter sont les incontournables du moment, mais certains outils qui ne sont pas à négliger, font la différence.</p>
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