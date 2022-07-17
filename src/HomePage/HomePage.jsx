import {Anchor} from 'antd';
import 'antd/dist/antd.css';
import './HomePageCSS.css';
import {gsap} from 'gsap';
import {useEffect, useState} from 'react';
import About from './about/About.js';
import Anim from './anim/Anim.js';
import AnimMobile from './anim/AnimMobile';
import hero from './img/generation_bd.png';
import hero2 from './img/life_bd.png';
import Media from 'react-media';
import offers from "./Offers/offers.json";

function HomePage () {

    const AnchorLink  = Anchor.Link;
     const beginingTimeLine = gsap.timeline();

    useEffect(()=>{

        gsap.fromTo(".eternal_title",{x: -500}, {
            scrollTrigger: ".eternal_title", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        
        gsap.fromTo(".eternal_title2",{x: -500}, {
            scrollTrigger: ".eternal_title2", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        gsap.fromTo(".info",{x: -500}, {
            scrollTrigger: ".info", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        gsap.fromTo(".heroD_2",{opacity: 0}, {
            scrollTrigger: ".heroD_2", // start the animation when ".box" enters the viewport (once)
            opacity: 1,
            duration:3,
        });
        gsap.fromTo(".team__flex .member",{transform: 'scale(0.5)'}, {
            scrollTrigger: ".team__flex .member", // start the animation when ".box" enters the viewport (once)
            transform: 'scale(1)',
            duration:1,
        });
        gsap.fromTo(".heroContact",{opacity: 0}, {
            scrollTrigger: ".heroContact", // start the animation when ".box" enters the viewport (once)
            opacity: 1,
            duration:3,
        });
        gsap.fromTo(".info2",{x: -500}, {
            scrollTrigger: ".info .info2", // start the animation when ".box" enters the viewport (once)
            x: 0
        });
        gsap.fromTo(".bloc1",{y: 150}, {
            scrollTrigger: ".bloc1", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc2",{y: 150}, {
            scrollTrigger: ".bloc2", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc3",{y: 150}, {
            scrollTrigger: ".bloc3", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc4",{y: 150}, {
            scrollTrigger: ".bloc4", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
        gsap.fromTo(".bloc5",{y: 150}, {
            scrollTrigger: ".bloc5", // start the animation when ".box" enters the viewport (once)
            y: 0
        });
    })

    /*Offering list*/
    const technique = [
        "Création de Dapps",
        "Détermination de vos besoins",
        "Conception technique",
        "Choix de la Blockchain",
        "Création du ou des Smart contracts",
        "Création de site (une interface animée adaptée aux utilisateurs)",
        "Tests",
        "Mise en production",
        "Maintenance applicative"
        ];
    
    const artistique = [
        "Définir vos projets pour le WEB3.0",
        "Aide à la conception",
        "Direction artistique"
    ];

    const marketing = [
        "Lancement de collections NFTs",
        "Gestion de communauté",
        "Aide à la communication pour les projets sur le WEB3.0"
    ]
      
    return (
        <div id='topHomePage'>
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
                        <h1 className='eternal_title eternal_title2'>Devenez un acteur reconnu dans le WEB3.0</h1>
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
                    <h2 className="infoTitle">
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
                            
                            <p>
                            <h1 className='eternal_title'>
                                Travailler avec nous
                            </h1>
                            Besoin d'une équipe compétente et qualifiée pour vous accompagner dans la réalisation de votre projet ?
                            Vous avez frappé à la bonne porte. Notre travaille consiste à comprendre vos objectifs et à trouver la solution adaptée à vos besoins.
                            Contactez-nous !
                            <div style={{marginLeft:'30%', marginTop:'10%'}}>
                                <Anchor>
                                    <button className="btn">
                                        <AnchorLink href="#contact" title="Go">
                                        </AnchorLink>
                                    </button>
                                </Anchor>
                            </div>
                            </p>
                            
                        </div>
                </div>
            </section>

            <section>
                <div className="team" id="nos_services" >
                    <div className="container">
                    <h2>
                        Notre offre
                    </h2>
                    <div className="team__flex">
                        <div className="member">
                        <h4>Technique</h4>
                        <ul className="job">  
                                {technique.map((e,i)=><li key={i}>{e}</li>)}
                        </ul>
                        <img src={hero} alt="Création de collection NFT" />
                        </div>
                        <div className="member">
                        <h4>Artistique</h4>
                        <ul className="job">
                                {artistique.map((e,i)=><li key={i}>{e}</li>)}
                        </ul>
                        <img src={hero2} alt="Design dans le Metaverse" />
                        </div>
                        <div className="member">
                        <h4>Marketing</h4>
                        <ul className="job">
                                {marketing.map((e,i)=><li key={i}>{e}</li>)}
                        </ul>
                        <img src={hero} alt="Marketing et gestion de communauté" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="hero heroContact" id="contact">
                <div className="heroG">
                    <div>
                            <About/>
                    </div>
                </div>
                <div className="heroD_3"></div>
            </section>

            <section className="info">
                <div className="container">
                    <div className='info2'>
                        <h2>
                            Une entreprise dynamique 
                        </h2>
                        <div style={{width:'50%', marginLeft:'25%'}}>
                            <span style={{fontSize:'50px'}}>" </span>Nous vous accompagnons du début du projet jusqu'à la livraison finale. Nous adoptons une méthodologie paliée par des process précis, grâce à notre experience cumulée de plus de 10ans.<span style={{fontSize:'50px'}}> "</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="roadmap">
                    <div className="container">
                        <h2>Expertises</h2>
                        <div className="line"></div>
                        <div className="bloc bloc1">
                            <div className="number off">1</div>
                            <h3>NFT Arts</h3>
                            <p>Notre expertise vous permet de lancer votre projet dans un délai réduit, tout en vous assurant d'une qualité à la hauteur des plus grands projets de collections d'oeuvres d'art numériques.</p>
                        </div>
                        <div className="bloc bloc2">
                            <div className="number off">2</div>
                            <h3>NFT Game</h3>
                            <p>Vous souhaitez créer un jeu sur le Web3.0 ? Nous vous accompagnons sur la spécification des besoins. Nous nous occupons de la programmation.</p>
                        </div>
                        <div className="bloc bloc3">
                            <div className="number off">3</div>
                            <h3>Dapp DEFI</h3>
                            <p>Un projet sur la finance décentralisée ? Nous vous aidons à lancer votre application tout en respectant les normes juridiques.</p>
                        </div>
                        <div className="bloc bloc4">
                            <div className="number off">4</div>
                            <h3>Direction Artistique</h3>
                            <p>Besoin de conseils pour votre oeuvre ? Notre expertise artistique vous permettra de concrétiser votre objectif.</p>
                        </div>
                        <div className="bloc bloc5">
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